import { Link } from '@inertiajs/react'
import TalentLayout from './_component/TalentLayout'

export default function Index({ talents }) {
  return (
    <TalentLayout>
      <h1 className="font-bold">Talents</h1>

      <ul>
        {talents.map((talent) => (
          <li key={talent.id}>
            <Link href={`/talent/${talent.id}`}>{talent.fullName}</Link>
          </li>
        ))}
      </ul>
    </TalentLayout>
  )
}
