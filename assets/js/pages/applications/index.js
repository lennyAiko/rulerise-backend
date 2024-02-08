import { Link, router } from '@inertiajs/react'
import ApplicationLayout from './_component/ApplicationLayout'

export default function Index({ applications }) {
  return (
    <ApplicationLayout>
      <h1 className="m-2 mb-2 font-bold">Applications</h1>

      {applications.length === 0 ? (
        <h2 className="px-3">No application received yet</h2>
      ) : null}

      <ul className="space-y-3 px-4">
        {applications.map((application, index) => (
          <div key={index}>
            <li
              // key={index}
              className="mt-2 flex items-center justify-between text-sm font-light lg:text-base"
            >
              {application.firstName} {application.lastName}
              <Link
                href={`/application/${application.id}`}
                className="rounded-lg bg-primary px-2 py-0.5 text-white"
              >
                view
              </Link>
            </li>
            <hr className="mt-1" />
          </div>
        ))}
      </ul>
    </ApplicationLayout>
  )
}
