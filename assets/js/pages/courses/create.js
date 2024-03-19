import { useForm } from '@inertiajs/react'
import CoursesLayout from './_components/CoursesLayout'
import { useEffect, useState } from 'react'
import TextInput from '@/components/TextInput'
import TextareaInput from '@/components/TextareaInput'
import { FiMinusCircle } from 'react-icons/fi'

const create = ({ facilitators, categories }) => {
  const [topicFields, setTopicFields] = useState([{ value: '' }])

  const { data, setData, post } = useForm({
    title: '',
    image: '',
    description: '',
    overview: '',
    duration: '',
    learningMode: '',
    priceId: '',
    fee: '',
    level: '',
    topics: [],
    facilitators: [],
    category: '',
    startDate: '',
    endDate: '',
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
            className="p-2 font-bold border rounded-lg"
          >
            <option value="">--Select--</option>
            <option value="Physical lectures">Physical lectures</option>
            <option value="Live virtual classes">Live virtual training</option>
          </select>

          <TextInput
            id="priceId"
            label="Enter stripe price id"
            value={data.priceId}
            changeData={setData}
          />

          <TextInput
            id="fee"
            label="Enter fee amount"
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

          <label htmlFor="facilitator" className="pl-2">
            Select multiple facilitators:
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

          <label htmlFor="category" className="pl-2">
            Select categories:
          </label>
          <select
            id="category"
            value={data.category}
            // @ts-ignore
            onChange={(e) => setData('category', e.target.value)}
            className="p-2 font-bold border rounded-lg"
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
                className={`w-full rounded-lg border py-2 pl-3 font-bold`}
              />
            </div>
          ))}

          <div className="flex items-center gap-2 ">
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

          <button
            type="submit"
            className="p-2 text-sm text-white border rounded-lg w-fit bg-primary hover:bg-primary/80 lg:text-base"
          >
            Submit Course
          </button>
        </form>
      </div>
    </CoursesLayout>
  )
}

export default create
