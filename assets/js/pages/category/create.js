import { useEffect, useState } from 'react'
import CategoryLayout from './_components/CategoryLayout'
import { useForm } from '@inertiajs/react'

export default function Create() {
  const [disabledButton, setDisabledButton] = useState(true)

  const { data, setData, post, progress } = useForm({
    name: '',
    image: null,
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
      <div className="">
        <h1 className="font-bold">Create category</h1>

        <form onSubmit={submit} className="flex flex-col gap-2">
          <label className="" htmlFor="category_name">
            Enter category name
          </label>
          <input
            type="text"
            value={data.name}
            // @ts-ignore
            onChange={(e) => setData('name', e.target.value)}
            id="category_name"
            name="category_name"
            className="border"
          />

          <label className="" htmlFor="file">
            Upload category icon
          </label>
          <input
            type="file"
            id="file"
            name="file"
            // @ts-ignore
            onChange={(e) => setData('image', e.target.files[0])}
          />

          <button type="submit" disabled={disabledButton}>
            Submit
          </button>
        </form>
      </div>
    </CategoryLayout>
  )
}
