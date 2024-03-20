import { Link, router } from '@inertiajs/react'
import TeamsLayout from './_components/TeamsLayout'
import { TiPlus } from 'react-icons/ti'

export default function Index({ teams }) {
  return (
    <TeamsLayout>
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <h1 className="my-2 mb-2 font-bold">Teams</h1>

          <Link href="/teams/create" className="w-fit p-1">
            <TiPlus />
          </Link>
        </div>

        {teams.length > 0 ? (
          teams.map((team, index) => (
            <div className="space-y-1.5 lg:mx-4" key={index}>
              <div className="mt-2 flex items-center justify-between text-sm font-light lg:text-base">
                <p>{team.name}</p>
                <Link
                  href={`/teams/${team.id}`}
                  className="rounded-lg bg-primary px-2 py-0.5 text-white"
                >
                  view
                </Link>
              </div>
              <hr />
            </div>
          ))
        ) : (
          <p>No teams available</p>
        )}
      </div>
    </TeamsLayout>
  )
}
