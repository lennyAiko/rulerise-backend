// @ts-ignore
import React, { useEffect, useState } from 'react'
import FacilitatorLayout from './_components/FacilitatorLayout'
import { useForm } from '@inertiajs/react'
import { socials } from './_components/data'

const view = ({ facilitator }) => {
  const { data, setData, patch } = useForm({
    fullName: facilitator.fullName,
    image: facilitator.image,
    description: facilitator.description,
    socials: facilitator.socials,
    courses: facilitator.courses,
  })

  const [socialFields, setSocialFields] = useState(facilitator.socials)

  useEffect(() => {
    setData('socials', socialFields)
  }, [socialFields])

  const handleAddInput = (e) => {
    e.preventDefault()
    if (socialFields.length === 4) return
    setSocialFields([...socialFields, { value: '' }])
  }

  const handleInputChange = (index, event) => {
    const newSocialInputs = [...socialFields]
    newSocialInputs[index].platform = socials[index]
    newSocialInputs[index].value = event.target.value
    setSocialFields(newSocialInputs)
  }

  const submit = (e) => {
    e.preventDefault()
    patch(`/facilitators/${facilitator.id}`)
  }

  return (
    <FacilitatorLayout>
      <h2>Update facilitator</h2>
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

        {facilitator.socials.map((social, index) => (
          <div key={index}>
            <label htmlFor={`socials${index}`}>{social.platform}</label>

            <input
              type="text"
              value={social.value}
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
    </FacilitatorLayout>
  )
}

export default view
