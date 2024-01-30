import { router, useForm } from '@inertiajs/react'
import CategoryLayout from './_components/CategoryLayout'
import { useEffect } from 'react'

const update = ({ category, updated }) => {
  const { data, setData, patch } = useForm({
    name: category.name,
    image: category.image,
  })

  const submit = (e) => {
    e.preventDefault()
    patch(`/category/${category.id}`)
  }

  useEffect(() => {
    if (updated) {
      router.visit('/category')
    }
  }, [updated, category])

  return (
    <CategoryLayout>
      <h2>Update category</h2>
      <form onSubmit={submit} className="flex w-full flex-col">
        <input
          type="text"
          value={data.name}
          // @ts-ignore
          onChange={(e) => setData('name', e.target.value)}
        />
        <input
          type="text"
          value={data.image}
          // @ts-ignore
          onChange={(e) => setData('image', e.target.value)}
        />
        <button type="submit">Update</button>
      </form>
    </CategoryLayout>
  )
}

export default update
