import { useEffect, useState } from 'react'
import FacilitatorLayout from './_components/FacilitatorLayout'
import { useForm } from '@inertiajs/react'

const create = () => {
  const socials = ['Twitter', 'Facebook', 'LinkedIn', 'Instagram']

  const [socialFields, setSocialFields] = useState([{ value: '' }])

  const { data, setData, post } = useForm({
    fullName: '',
    image: '',
    description: '',
    socials: [],
    courses: [],
  })

  useEffect(() => {
    setData('socials', socialFields)
    console.log(socialFields)
  }, socialFields)

  const handleAddInput = (e, index) => {
    e.preventDefault()
    if (socialFields.length === 4) return
    setSocialFields([...socialFields, { value: '' }])
  }

  const handleInputChange = (index, event) => {
    const newSocialInputs = [...socialFields]
    newSocialInputs[index].key = socials[index]
    newSocialInputs[index].value = event.target.value
    setSocialFields(newSocialInputs)
    setData('socials', newSocialInputs)
  }

  const submit = (e) => {
    e.preventDefault()
    post('/facilitators/create')
  }

  return (
    <FacilitatorLayout>
      <div className="">
        <h1 className="font-bold">Create Facilitator</h1>

        <form onSubmit={submit} className="flex flex-col gap-2">
          <label className="" htmlFor="fullName">
            Enter full name
          </label>
          <input
            type="text"
            value={data.fullName}
            // @ts-ignore
            onChange={(e) => setData('fullName', e.target.value)}
            id="fullName"
            name="fullName"
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
          <input
            type="text"
            value={data.description}
            // @ts-ignore
            onChange={(e) => setData('description', e.target.value)}
            id="description"
            name="description"
            className="border"
          />

          <label className="" htmlFor="socials">
            Enter socials
          </label>

          {socialFields.map((input, index) => (
            <div key={index}>
              <label htmlFor={`socials${index}`}>{socials[index]}</label>

              <input
                type="text"
                value={input.value}
                // @ts-ignore
                onChange={(e) => handleInputChange(index, e)}
                id={`socials${index}`}
                name={`socials${index}`}
                className="border"
              />
            </div>
          ))}
          <button onClick={handleAddInput} disabled={socialFields.length === 4}>
            Add Input
          </button>

          <button type="submit" className="border">
            Submit
          </button>
        </form>
      </div>
    </FacilitatorLayout>
  )
}

export default create
