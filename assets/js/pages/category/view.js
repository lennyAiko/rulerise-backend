import { router, useForm } from '@inertiajs/react'
import CategoryLayout from './_components/CategoryLayout'
import TextInput from '@/components/TextInput'
import DefaultButton from '@/components/buttons/DefaultButton'

const update = ({ category }) => {
  const { data, setData, patch } = useForm({
    name: category.name,
    image: category.image,
  })

  const submit = (e) => {
    e.preventDefault()
    patch(`/category/${category.id}`)
  }

  return (
    <CategoryLayout>
      <h2 className="my-2 mb-2 font-bold">Update category</h2>

      <form className="mt-2 flex w-full flex-col gap-2 px-3">
        <TextInput
          id="name"
          label={'Name'}
          value={data.name}
          changeData={setData}
        />

        <TextInput
          id="image"
          label={'Image URL'}
          value={data.image}
          changeData={setData}
        />

        <div className="flex gap-5 p-2">
          <DefaultButton text="Update" type="submit" doThis={submit} />
          <DefaultButton
            text="Delete"
            type="submit"
            doThis={(e) => {
              e.preventDefault()
              router.delete(`/category/${category.id}`)
            }}
          />
        </div>
      </form>
    </CategoryLayout>
  )
}

export default update
