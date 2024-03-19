import { router, useForm } from '@inertiajs/react'
import CoursesLayout from './_components/CoursesLayout'
import { useEffect, useState } from 'react'
import TextInput from '@/components/TextInput'
import TextareaInput from '@/components/TextareaInput'

const create = ({ facilitators, categories, course }) => {
  const [topicFields, setTopicFields] = useState([{ value: '' }])

  const { data, setData, patch } = useForm({
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
    priceId: course.priceId,
    startDate: course.startDate,
    endDate: course.endDate,
  })

  useEffect(() => {
    setData('topics', topicFields)
  }, [topicFields])

  const handleAddInput = (e) => {
    e.preventDefault()
    if (topicFields.length === 19) return
    setTopicFields([...topicFields, { value: '' }])
  }

  const handleRemoveInput = (e) => {
    e.preventDefault()
    if (topicFields.length === 1) return
    setTopicFields(topicFields.slice(0, -1))
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
    patch(`/courses/${course.id}`)
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
            className="p-2 font-bold border rounded-lg"
          >
            <option value="">--Select--</option>
            <option value="Physical lectures">Physical lectures</option>
            <option value="Live virtual classes">Live virtual training</option>
          </select>

          <TextInput
            id="priceId"
            label="Update stripe price ID"
            value={data.priceId}
            changeData={setData}
          />

          <TextInput
            id="fee"
            label="Update fee amount"
            value={data.fee}
            changeData={setData}
          />

          <div className="flex flex-col w-full gap-2 lg:flex-row lg:gap-5">
            <TextInput
              id="startDate"
              label="Enter start date"
              value={data.startDate}
              changeData={setData}
              type="date"
            />
            <TextInput
              id="endDate"
              label="Enter end date"
              value={data.endDate}
              changeData={setData}
              type="date"
            />
          </div>

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
            className="p-2 font-bold border rounded-lg"
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
            className="p-2 font-bold border rounded-lg"
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

          <div className="flex items-center gap-2 my-3">
            <button
              onClick={handleAddInput}
              disabled={topicFields.length === 19}
              className="p-2 text-sm text-white rounded-lg w-fit bg-primary hover:bg-primary/80 lg:text-base"
            >
              Add Topic
            </button>

            <button
              onClick={handleRemoveInput}
              disabled={topicFields.length === 19}
              className="p-2 text-sm text-white rounded-lg w-fit bg-primary hover:bg-primary/80 lg:text-base"
            >
              Remove Topic
            </button>
          </div>

          <div className="flex gap-2">
            <button
              type="submit"
              className="p-2 text-sm text-white border rounded-lg w-fit bg-primary hover:bg-primary/80 lg:text-base"
              onClick={submit}
            >
              Update
            </button>

            <button
              onClick={(e) => {
                e.preventDefault()
                router.delete(`/courses/${course.id}`)
              }}
              className="p-2 text-sm text-white border rounded-lg w-fit bg-primary hover:bg-primary/80 lg:text-base"
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
