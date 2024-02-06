import { Link, router } from '@inertiajs/react'
import ApplicationLayout from './_component/ApplicationLayout'

export default function Index({ applications }) {
  return (
    <ApplicationLayout>
      <h1 className="mb-2 font-bold">Applications</h1>

      <ul>
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
                View
              </Link>
            </li>
            <hr className="mt-1" />
          </div>
        ))}
      </ul>
    </ApplicationLayout>
  )
}
