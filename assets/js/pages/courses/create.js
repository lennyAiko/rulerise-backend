import { useForm } from '@inertiajs/react'
import CoursesLayout from './_components/CoursesLayout'
import { useEffect, useState } from 'react'
import TextInput from '@/components/TextInput'
import TextareaInput from '@/components/TextareaInput'

const create = ({ facilitators, categories }) => {
  const [topicFields, setTopicFields] = useState([{ value: '' }])

  const { data, setData, post } = useForm({
    title: '',
    image: '',
    description: '',
    overview: '',
    duration: '',
    learningMode: '',
    fee: '',
    level: '',
    topics: [],
    facilitators: [],
    category: '',
  })

  useEffect(() => {
    setData('topics', topicFields)
  }, [topicFields])

  const handleAddInput = (e) => {
    e.preventDefault()
    if (topicFields.length === 19) return
    setTopicFields([...topicFields, { value: '' }])
  }

  const handleInputChange = (index, event) => {
    console.log(index)
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
        <h1 className="m-2 mb-2 font-bold">Create course</h1>

        <form onSubmit={submit} className="flex flex-col gap-3 lg:gap-5">
          <TextInput
            id="title"
            label="Enter course title"
            value={data.title}
            changeData={setData}
          />

          <TextInput
            id="image"
            label="Enter image url"
            value={data.image}
            changeData={setData}
          />

          <TextareaInput
            id="description"
            label="Enter description"
            value={data.description}
            changeData={setData}
          />
          <TextareaInput
            id="overview"
            label="Enter overview"
            value={data.overview}
            changeData={setData}
          />

          <TextInput
            id="duration"
            label="Enter duration"
            value={data.duration}
            changeData={setData}
          />

          <label className="pl-2" htmlFor="learning">
            Enter learning mode
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
            label="Enter fee amount"
            value={data.fee}
            changeData={setData}
          />

          <label className="pl-2" htmlFor="level">
            Enter level
          </label>
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

          <label htmlFor="facilitator" className="pl-2">
            Select multiple facilitators:
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

          <label htmlFor="category" className="pl-2">
            Select multiple categories:
          </label>
          <select
            id="category"
            value={data.category}
            // @ts-ignore
            onChange={(e) => setData('category', e.target.value)}
            className="rounded-lg border p-2 font-bold"
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

          <label className="pl-2" htmlFor="topics">
            Enter topics
          </label>

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

          <button
            type="submit"
            className="w-fit rounded-lg border bg-primary p-2 text-sm text-white hover:bg-primary/80 lg:text-base"
          >
            Submit Course
          </button>
        </form>
      </div>
    </CoursesLayout>
  )
}

export default create
