import { router, useForm } from '@inertiajs/react'
import CoursesLayout from './_components/CoursesLayout'
import { useEffect, useState } from 'react'

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

  console.log(course)

  return (
    <CoursesLayout>
      <div className="">
        <h1 className="font-bold">update Facilitator</h1>

        <form className="flex flex-col gap-2">
          <label className="" htmlFor="title">
            Enter course title
          </label>
          <input
            type="text"
            value={data.title}
            // @ts-ignore
            onChange={(e) => setData('title', e.target.value)}
            id="title"
            name="title"
            className="border"
          />

          <label className="" htmlFor="image">
            Enter image url
          </label>
          <input
            type="text"
            value={data.image}
            // @ts-ignore
            onChange={(e) => setData('image', e.target.value)}
            id="image"
            name="image"
            className="border"
          />

          <label className="" htmlFor="description">
            Enter description
          </label>
          <textarea
            value={data.description}
            // @ts-ignore
            onChange={(e) => setData('description', e.target.value)}
            id="description"
            name="description"
            className="border"
          />

          <label className="" htmlFor="overview">
            Enter overview
          </label>
          <textarea
            value={data.overview}
            // @ts-ignore
            onChange={(e) => setData('overview', e.target.value)}
            id="overview"
            name="overview"
            className="border"
          />

          <label className="" htmlFor="duration">
            Enter duration
          </label>
          <input
            type="text"
            value={data.duration}
            // @ts-ignore
            onChange={(e) => setData('duration', e.target.value)}
            id="duration"
            name="duration"
            className="border"
          />

          <label className="" htmlFor="learning">
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
          >
            <option value="">--Select--</option>
            <option value="on-site">On-site</option>
            <option value="remote">Remote</option>
          </select>

          <label className="" htmlFor="fee">
            Enter fee amount
          </label>
          <input
            type="text"
            value={data.fee}
            // @ts-ignore
            onChange={(e) => setData('fee', e.target.value)}
            id="fee"
            name="fee"
            className="border"
          />

          <label className="" htmlFor="level">
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
          <label htmlFor="facilitator">Select multiple facilitators:</label>
          <select
            id="facilitator"
            multiple
            value={selectedFacilitatorsOptions}
            onChange={handleSelectFacilitatorsChange}
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
          <label htmlFor="category">Select multiple categories:</label>
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
            Enter topics
          </label>

          {/* Add existing values along with the ones to update */}
          {topicFields.map((input, index) => (
            <div key={index}>
              <input
                type="text"
                value={input.value}
                onChange={(e) => handleInputChange(index, e)}
                id={`topic${index}`}
                name={`topic${index}`}
                className="border"
              />
            </div>
          ))}

          <button onClick={handleAddInput} disabled={topicFields.length === 19}>
            Add Topic
          </button>

          <button type="submit" className="border" onClick={submit}>
            Submit
          </button>

          <button
            onClick={(e) => {
              e.preventDefault()
              router.delete(`/courses/${course.id}`)
            }}
          >
            Delete
          </button>
        </form>
      </div>
    </CoursesLayout>
  )
}

export default create
