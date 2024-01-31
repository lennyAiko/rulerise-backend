import { Link, router } from '@inertiajs/react'
import CategoryLayout from './_components/CategoryLayout'

export default function Index({ categories }) {
  return (
    <CategoryLayout>
      <div className="flex flex-col gap-2">
        <h1 className="font-bold">Category</h1>

        <Link href="/category/create" className="m-5 border p-2">
          Add
        </Link>

        {categories.length > 0 ? (
          categories.map((category) => (
            <div className="" key={category.id}>
              <Link href={`/category/${category.id}`}>
                <p key={category.id}>{category.name}</p>
              </Link>
              <img
                src={category.image}
                alt="category image"
                className="h-24 w-24"
              />
              <button
                onClick={(e) => {
                  e.preventDefault()
                  router.delete(`/category/${category.id}`)
                }}
              >
                Delete
              </button>
            </div>
          ))
        ) : (
          <p>No categories available</p>
        )}
      </div>
    </CategoryLayout>
  )
}
