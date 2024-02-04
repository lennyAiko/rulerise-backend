import { Link } from '@inertiajs/react'
import ContactLayout from './_component/ContactLayout'

export default function Index({ contacts }) {
  return (
    <ContactLayout>
      <h1 className="font-bold">Contact</h1>

      <ul>
        {contacts.map((contact) => (
          <li key={contact.id}>
            <Link href={`/contact/${contact.id}`}>{contact.fullName}</Link>
          </li>
        ))}
      </ul>
    </ContactLayout>
  )
}
