import { router, useForm } from '@inertiajs/react'
import CoursesLayout from './_components/CoursesLayout'
import { useEffect, useState } from 'react'
import TextInput from '@/components/TextInput'
import TextareaInput from '@/components/TextareaInput'

const create = ({ facilitators, categories, course }) => {
  const [topicFields, setTopicFields] = useState([{ value: '' }])

  const { data, setData, post } = useForm({
    title: course.title,
    image: course.image,
    description: course.description,
    overview: course.overview,
    duration: course.duration,
    learningMode: course.learningMode,
    fee: course.fee,
    level: course.level,
    topics: course.topics,
    facilitators: course.facilitators,
    category: course.category,
  })

  useEffect(() => {
    setData('topics', topicFields)
  }, [topicFields])

  const handleAddInput = (e) => {
    e.preventDefault()
    if (topicFields.length === 19) return
    setTopicFields([...topicFields, { value: '' }])
  }

  useEffect(() => {
    setTopicFields(data.topics)
  }, [])

  const handleInputChange = (index, event) => {
    const newTopicInputs = [...topicFields]
    newTopicInputs[index].value = event.target.value
    setTopicFields(newTopicInputs)
  }

  const [selectedFacilitatorsOptions, setSelectedFacilitatorsOptions] =
    useState([])

  const handleSelectFacilitatorsChange = (event) => {
    const selectedValues = Array.from(
      event.target.selectedOptions,
      (option) => option.value
    )
    setSelectedFacilitatorsOptions(selectedValues)
  }

  useEffect(() => {
    setData('facilitators', selectedFacilitatorsOptions)
  }, [selectedFacilitatorsOptions])

  const submit = (e) => {
    e.preventDefault()
    post('/courses/create')
  }

  return (
    <CoursesLayout>
      <div className="">
        <h1 className="m-2 mb-2 font-bold">Update course</h1>

        <form className="flex flex-col gap-3 lg:gap-5">
          <TextInput
            id="title"
            label="Update course title"
            value={data.title}
            changeData={setData}
          />

          <TextInput
            id="image"
            label="Update image url"
            value={data.image}
            changeData={setData}
          />

          <TextareaInput
            id="description"
            label="Update description"
            value={data.description}
            changeData={setData}
          />
          <TextareaInput
            id="overview"
            label="Update overview"
            value={data.overview}
            changeData={setData}
          />

          <TextInput
            id="duration"
            label="Update duration"
            value={data.duration}
            changeData={setData}
          />

          <label className="pl-2" htmlFor="learning">
            Update learning mode
          </label>
          <select
            id="learning"
            value={data.learningMode}
            onChange={(e) =>
              setData(
                'learningMode',
                // @ts-ignore
                e.target.value
              )
            }
            className="rounded-lg border p-2 font-bold"
          >
            <option value="">--Select--</option>
            <option value="on-site">On-site</option>
            <option value="remote">Remote</option>
          </select>

          <TextareaInput
            id="fee"
            label="Update fee amount"
            value={data.fee}
            changeData={setData}
          />

          <label className="pl-2" htmlFor="level">
            Enter level
          </label>
          <p className="pl-2 text-sm lg:text-base">
            Selected: <span className="font-bold">{data.level}</span>
          </p>
          <select
            id="level"
            value={data.level}
            onChange={(e) =>
              setData(
                'level',
                // @ts-ignore
                e.target.value
              )
            }
            className="rounded-lg border p-2 font-bold"
          >
            <option value="">--Select--</option>
            <option value="beginner">Beginner</option>
            <option value="beginner-intermediate">
              Beginner - Intermediate
            </option>
            <option value="intermediate">Intermediate</option>
            <option value="intermediate-advance">
              Intermediate - Advanced
            </option>
            <option value="advance">Advanced</option>
          </select>

          {/* Add existing values along with the ones to update */}
          <label htmlFor="facilitator" className="pl-2">
            Update facilitators:
          </label>
          <select
            id="facilitator"
            multiple
            value={selectedFacilitatorsOptions}
            onChange={handleSelectFacilitatorsChange}
            className="rounded-lg border p-2 font-bold"
          >
            {facilitators ? (
              facilitators.map((facilitator) => (
                <option key={facilitator.id} value={facilitator.id}>
                  {facilitator.fullName}
                </option>
              ))
            ) : (
              <p>Create a facilitator</p>
            )}
          </select>

          {/* Add existing values along with the ones to update */}
          <label htmlFor="category">Update category:</label>
          <select
            id="category"
            value={data.category}
            // @ts-ignore
            onChange={(e) => setData('category', e.target.value)}
          >
            <option value="">--Select--</option>
            {categories ? (
              categories.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))
            ) : (
              <p>Create a category</p>
            )}
          </select>

          <label className="" htmlFor="topics">
            Update topics
          </label>

          {/* Add existing values along with the ones to update */}
          {topicFields.map((input, index) => (
            <div key={index} className="flex flex-col gap-1">
              <label className="pl-2" htmlFor={`topic${index}`}>
                Topic {index + 1}
              </label>
              <input
                type="text"
                value={input.value}
                onChange={(e) => handleInputChange(index, e)}
                id={`topic${index}`}
                name={`topic${index}`}
                className={`rounded-lg border py-2 pl-3 font-bold`}
              />
            </div>
          ))}

          <button
            onClick={handleAddInput}
            disabled={topicFields.length === 19}
            className="w-fit rounded-lg bg-primary p-2 text-sm text-white hover:bg-primary/80 lg:text-base"
          >
            Add Topic
          </button>
          <div className="flex gap-2">
            <button
              type="submit"
              className="w-fit rounded-lg border bg-primary p-2 text-sm text-white hover:bg-primary/80 lg:text-base"
              onClick={submit}
            >
              Update
            </button>

            <button
              onClick={(e) => {
                e.preventDefault()
                router.delete(`/courses/${course.id}`)
              }}
              className="w-fit rounded-lg border bg-primary p-2 text-sm text-white hover:bg-primary/80 lg:text-base"
            >
              Delete
            </button>
          </div>
        </form>
      </div>
    </CoursesLayout>
  )
}

export default create
