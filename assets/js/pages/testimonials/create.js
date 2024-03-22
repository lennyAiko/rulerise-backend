import { useEffect, useState } from 'react'
import TestimonialsLayout from './_components/TestimonialsLayout'
import { useForm } from '@inertiajs/react'
import TextInput from '@/components/TextInput'
import DefaultButton from '@/components/buttons/DefaultButton'
import TextareaInput from '@/components/TextareaInput'

export default function Create() {
  const [disabledButton, setDisabledButton] = useState(true)

  const { data, setData, post, progress } = useForm({
    name: '',
    img: '',
    description: '',
  })

  useEffect(() => {
    if (data.name.length > 3) {
      setDisabledButton(false)
    } else {
      setDisabledButton(true)
    }
  }, [data.name])

  const submit = (e) => {
    e.preventDefault()
    post('/testimonials/create')
  }

  return (
    <TestimonialsLayout>
      <div className="flex flex-col gap-2">
        <h1 className="my-2 mb-2 font-bold">Create testimonials</h1>

        <form className="flex flex-col gap-2">
          <TextInput
            label="Enter person name"
            value={data.name}
            changeData={setData}
            id="name"
          />

          <TextareaInput
            label="Enter person description"
            value={data.description}
            changeData={setData}
            id="description"
          />

          <TextInput
            label="Paste person image link"
            value={data.img}
            changeData={setData}
            id="img"
          />

          <DefaultButton
            text="Submit"
            type="submit"
            doThis={submit}
            disabled={disabledButton}
            className="mt-2 lg:w-fit lg:px-3"
          />
        </form>
      </div>
    </TestimonialsLayout>
  )
}
