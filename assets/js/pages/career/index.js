import { Link, router } from '@inertiajs/react'
import CategoryLayout from './_components/CategoryLayout'
import { TiPlus } from 'react-icons/ti'

export default function Index({ categories }) {
  return (
    <CategoryLayout>
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <h1 className="my-2 mb-2 font-bold">Category</h1>

          <Link href="/category/create" className="w-fit p-1">
            <TiPlus />
          </Link>
        </div>

        {categories.length > 0 ? (
          categories.map((category, index) => (
            <div className="space-y-1.5 lg:mx-4" key={index}>
              <div className="mt-2 flex items-center justify-between text-sm font-light lg:text-base">
                <p>{category.name}</p>
                <Link
                  href={`/category/${category.id}`}
                  className="rounded-lg bg-primary px-2 py-0.5 text-white"
                >
                  view
                </Link>
              </div>
              <hr />
            </div>
          ))
        ) : (
          <p>No categories available</p>
        )}
      </div>
    </CategoryLayout>
  )
}
