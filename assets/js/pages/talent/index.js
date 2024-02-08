import { Link } from '@inertiajs/react'
import TalentLayout from './_component/TalentLayout'

export default function Index({ talents }) {
  return (
    <TalentLayout>
      <h1 className="m-2 mb-2 font-bold">Talents</h1>

      {talents.length === 0 ? (
        <h2 className="px-3">No talent request received yet</h2>
      ) : null}

      <ul className="space-y-3 px-4">
        {talents.map((talent, index) => (
          <div className="" key={index}>
            <li
              key={talent.id}
              className="mt-2 flex items-center justify-between text-sm font-light lg:text-base"
            >
              {talent.companyName}
              <Link
                href={`/talent/${talent.id}`}
                className="rounded-lg bg-primary px-2 py-0.5 text-white"
              >
                view
              </Link>
            </li>
            <hr className="mt-1" />
          </div>
        ))}
      </ul>
    </TalentLayout>
  )
}
