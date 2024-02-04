import { Link } from '@inertiajs/react'
import ApplicationLayout from './_component/ApplicationLayout'

export default function Index({ applications }) {
  return (
    <ApplicationLayout>
      <h1 className="font-bold">Applications</h1>

      <ul>
        {applications.map((application) => (
          <li key={application.id}>
            <Link href={`/applications/${application.id}`}>
              {application.fullName}
            </Link>
          </li>
        ))}
      </ul>
    </ApplicationLayout>
  )
}
