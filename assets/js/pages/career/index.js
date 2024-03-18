import { Link, router } from '@inertiajs/react'
import CareerLayout from './_components/CareerLayout'
import { TiPlus } from 'react-icons/ti'

export default function Index({ careers }) {
  return (
    <CareerLayout>
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <h1 className="my-2 mb-2 font-bold">Career</h1>

          <Link href="/career/create" className="w-fit p-1">
            <TiPlus />
          </Link>
        </div>

        {careers.length > 0 ? (
          careers.map((career, index) => (
            <div className="space-y-1.5 lg:mx-4" key={index}>
              <div className="mt-2 flex items-center justify-between text-sm font-light lg:text-base">
                <p>{career.name}</p>
                <Link
                  href={`/career/${career.id}`}
                  className="rounded-lg bg-primary px-2 py-0.5 text-white"
                >
                  view
                </Link>
              </div>
              <hr />
            </div>
          ))
        ) : (
          <p>No careers available</p>
        )}
      </div>
    </CareerLayout>
  )
}
