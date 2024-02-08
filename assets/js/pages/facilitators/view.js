// @ts-ignore
import React, { useEffect, useState } from 'react'
import FacilitatorLayout from './_components/FacilitatorLayout'
import { router, useForm } from '@inertiajs/react'
import { socials } from './_components/data'
import TextInput from '@/components/TextInput'
import TextareaInput from '@/components/TextareaInput'

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

  useEffect(() => {
    setSocialFields(data.socials)
  }, [])

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
      <h2 className="m-2 mb-2 font-bold">Update facilitator</h2>
      <form onSubmit={submit} className="flex flex-col gap-2">
        <TextInput
          id="fullName"
          label="Enter full name"
          value={data.fullName}
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

        <label className="" htmlFor="socials">
          Enter socials
        </label>

        {socialFields.map((social, index) => (
          <div key={index} className="flex items-center gap-2">
            <label className="w-20" htmlFor={`socials${index}`}>
              {socials[index]}
            </label>

            <input
              type="text"
              value={social.value}
              // @ts-ignore
              onChange={(e) => handleInputChange(index, e)}
              id={`socials${index}`}
              name={`socials${index}`}
              className={`rounded-lg border py-2 pl-3 font-bold`}
            />
          </div>
        ))}
        <button
          onClick={handleAddInput}
          disabled={socialFields.length === 4}
          className="w-fit rounded-lg bg-primary p-2 text-sm text-white hover:bg-primary/80 lg:text-base"
        >
          Add Input
        </button>
        <div className="flex gap-2">
          <button
            type="submit"
            className="w-fit rounded-lg border bg-primary p-2 text-sm text-white hover:bg-primary/80 lg:text-base"
          >
            Update
          </button>

          <button
            onClick={(e) => {
              e.preventDefault()
              router.delete(`/facilitators/${facilitator.id}`)
            }}
            className="w-fit rounded-lg border bg-primary p-2 text-sm text-white hover:bg-primary/80 lg:text-base"
          >
            Delete
          </button>
        </div>
      </form>
    </FacilitatorLayout>
  )
}

export default view
