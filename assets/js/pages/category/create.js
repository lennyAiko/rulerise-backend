import { useEffect, useState } from 'react'
import CategoryLayout from './_components/CategoryLayout'
import { useForm } from '@inertiajs/react'
import TextInput from '@/components/TextInput'
import DefaultButton from '@/components/buttons/DefaultButton'

export default function Create() {
  const [disabledButton, setDisabledButton] = useState(true)

  const { data, setData, post, progress } = useForm({
    name: '',
    image: '',
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
    post('/category/create')
  }

  return (
    <CategoryLayout>
      <div className="flex flex-col gap-2">
        <h1 className="my-2 mb-2 font-bold">Create category</h1>

        <form className="flex flex-col gap-2">
          <TextInput
            label="Enter category name"
            value={data.name}
            changeData={setData}
            id="name"
          />

          <TextInput
            label="Paste category icon link"
            value={data.image}
            changeData={setData}
            id="image"
          />

          {/* <input
            type="file"
            id="file"
            name="file"
            // @ts-ignore
            onChange={(e) => setData('image', e.target.files[0])}
          /> */}

          <DefaultButton
            text="Submit"
            type="submit"
            doThis={submit}
            disabled={disabledButton}
            className="mt-2 lg:w-fit lg:px-3"
          />
        </form>
      </div>
    </CategoryLayout>
  )
}
