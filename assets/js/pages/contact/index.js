import { Link } from '@inertiajs/react'
import ContactLayout from './_component/ContactLayout'

export default function Index({ contacts }) {
  return (
    <ContactLayout>
      <h1 className="m-2 mb-2 font-bold">Contact</h1>

      <ul>
        {contacts.map((contact) => (
          <li key={contact.id} className="mt-2 space-y-1 px-3">
            <div className="mt-2 flex items-center justify-between text-sm font-light lg:text-base">
              {contact.fullName}
              <Link
                href={`/contact/${contact.id}`}
                className="rounded-lg bg-primary px-2 py-0.5 text-white"
              >
                view
              </Link>
            </div>
            <hr />
          </li>
        ))}
      </ul>
    </ContactLayout>
  )
}
