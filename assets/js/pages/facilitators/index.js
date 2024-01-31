import FacilitatorLayout from './_components/FacilitatorLayout'
import { Link, router } from '@inertiajs/react'

export default function Index({ facilitators }) {
  return (
    <FacilitatorLayout>
      <div className="flex flex-col gap-2">
        <h1 className="font-bold">Facilitator</h1>

        <Link href="/facilitators/create" className="m-5 border p-2">
          Add
        </Link>

        {facilitators.length > 0 ? (
          facilitators.map((facilitator) => (
            <div className="" key={facilitator.id}>
              <Link href={`/facilitators/${facilitator.id}`}>
                <p key={facilitator.id}>{facilitator.question}</p>
              </Link>
              <p>{facilitator.answer}</p>
              <button
                onClick={(e) => {
                  e.preventDefault()
                  router.delete(`/facilitators/${facilitator.id}`)
                }}
              >
                Delete
              </button>
            </div>
          ))
        ) : (
          <p>No facilitators available</p>
        )}
      </div>
    </FacilitatorLayout>
  )
}
