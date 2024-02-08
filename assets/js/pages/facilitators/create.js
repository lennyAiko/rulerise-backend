import { useEffect, useState } from 'react'
import FacilitatorLayout from './_components/FacilitatorLayout'
import { useForm } from '@inertiajs/react'
import { socials } from './_components/data'
import TextInput from '@/components/TextInput'
import TextareaInput from '@/components/TextareaInput'

const create = () => {
  const [socialFields, setSocialFields] = useState([{ value: '' }])

  const { data, setData, post } = useForm({
    fullName: '',
    image: '',
    description: '',
    socials: [],
    courses: [],
    category: '',
    facilitators: [],
  })

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
    post('/facilitators/create')
  }

  return (
    <FacilitatorLayout>
      <div className="">
        <h1 className="m-2 mb-2 font-bold">Create Facilitator</h1>

        <form onSubmit={submit} className="flex flex-col gap-3">
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

          <label className="pl-2" htmlFor="socials">
            Enter socials:
          </label>

          {socialFields.map((input, index) => (
            <div key={index} className="flex items-center gap-2">
              <label className="w-20" htmlFor={`socials${index}`}>
                {socials[index]}
              </label>

              <input
                type="text"
                value={input.value}
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

          <button
            type="submit"
            className="w-fit rounded-lg border bg-primary p-2 text-sm text-white hover:bg-primary/80 lg:text-base"
          >
            Submit
          </button>
        </form>
      </div>
    </FacilitatorLayout>
  )
}

export default create
