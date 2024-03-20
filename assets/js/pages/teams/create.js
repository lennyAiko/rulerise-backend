import { useEffect, useState } from 'react'
import TeamsLayout from './_components/TeamsLayout'
import { useForm } from '@inertiajs/react'
import TextInput from '@/components/TextInput'
import DefaultButton from '@/components/buttons/DefaultButton'

export default function Create() {
  const [disabledButton, setDisabledButton] = useState(true)

  const { data, setData, post, progress } = useForm({
    name: '',
    img: '',
    title: '',
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
    post('/teams/create')
  }

  return (
    <TeamsLayout>
      <div className="flex flex-col gap-2">
        <h1 className="my-2 mb-2 font-bold">Create teams</h1>

        <form className="flex flex-col gap-2">
          <TextInput
            label="Enter team name"
            value={data.name}
            changeData={setData}
            id="name"
          />

          <TextInput
            label="Enter team title"
            value={data.title}
            changeData={setData}
            id="title"
          />

          <TextInput
            label="Paste team image link"
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
    </TeamsLayout>
  )
}
