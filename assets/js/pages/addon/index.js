import { Link, router } from '@inertiajs/react'
import AddonLayout from './_components/AddonLayout'
import { TiPlus } from 'react-icons/ti'

export default function Index({ addons }) {
  return (
    <AddonLayout>
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <h1 className="my-2 mb-2 font-bold">addon</h1>

          <Link href="/addon/create" className="w-fit p-1">
            <TiPlus />
          </Link>
        </div>

        {addons.length > 0 ? (
          addons.map((addon, index) => (
            <div className="space-y-1.5 lg:mx-4" key={index}>
              <div className="mt-2 flex items-center justify-between text-sm font-light lg:text-base">
                <p>{addon.title}</p>
                <Link
                  href={`/addon/${addon.id}`}
                  className="rounded-lg bg-primary px-2 py-0.5 text-white"
                >
                  view
                </Link>
              </div>
              <hr />
            </div>
          ))
        ) : (
          <p>No addons available</p>
        )}
      </div>
    </AddonLayout>
  )
}
