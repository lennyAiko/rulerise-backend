import { TiPlus } from 'react-icons/ti'
import FacilitatorLayout from './_components/FacilitatorLayout'
import { Link, router } from '@inertiajs/react'

export default function Index({ facilitators }) {
  console.log(facilitators)
  return (
    <FacilitatorLayout>
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <h1 className="my-2 mb-2 font-bold">Facilitator</h1>

          <Link href="/facilitators/create" className="w-fit p-1">
            <TiPlus />
          </Link>
        </div>

        {facilitators.length > 0 ? (
          facilitators.map((facilitator, index) => (
            <div className="flex flex-col gap-1 px-3" key={index}>
              <div className="mt-2 flex items-center justify-between text-sm font-light lg:text-base">
                <p key={facilitator.id} className="">
                  {facilitator.fullName}
                </p>
                <Link
                  href={`/facilitators/${facilitator.id}`}
                  className="rounded-lg bg-primary px-2 py-0.5 text-white"
                >
                  view
                </Link>
              </div>
              <hr />
            </div>
          ))
        ) : (
          <p>No facilitators available</p>
        )}
      </div>
    </FacilitatorLayout>
  )
}
