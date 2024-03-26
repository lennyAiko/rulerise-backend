import { useEffect, useState } from 'react'
import { useForm } from '@inertiajs/react'
import TextInput from '@/components/TextInput'
import DefaultButton from '@/components/buttons/DefaultButton'
import AddonLayout from './_components/AddonLayout'

export default function Create() {
  const [disabledButton, setDisabledButton] = useState(true)

  const { data, setData, post, progress } = useForm({
    title: '',
  })

  useEffect(() => {
    if (data.title.length > 3) {
      setDisabledButton(false)
    } else {
      setDisabledButton(true)
    }
  }, [data.title])

  const submit = (e) => {
    e.preventDefault()
    post('/addon/create')
  }

  return (
    <AddonLayout>
      <div className="flex flex-col gap-2">
        <h1 className="my-2 mb-2 font-bold">Create addon</h1>

        <form className="flex flex-col gap-2">
          <TextInput
            label="Enter addon title"
            value={data.title}
            changeData={setData}
            id="title"
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
    </AddonLayout>
  )
}
