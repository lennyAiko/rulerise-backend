import { Link, router } from '@inertiajs/react'
import EmailLayout from './_components/EmailLayout'
import DefaultButton from '@/components/buttons/DefaultButton'

const index = ({ emails }) => {
  return (
    <EmailLayout>
      <h1 className="m-2 mb-2 font-bold">Emails</h1>

      {emails.length === 0 ? (
        <h2 className="px-3">No email received yet</h2>
      ) : null}

      <ul className="space-y-3 px-4">
        {emails.map((email, index) => (
          <div key={index}>
            <li
              // key={index}
              className="mt-2 flex items-center justify-between text-sm font-light lg:text-base"
            >
              {email.email}
              <DefaultButton
                className="col-start-2 col-end-4"
                text="Delete"
                type={'button'}
                doThis={(e) => {
                  e.preventDefault()
                  router.delete(`/emails/${email.id}`)
                }}
              />
            </li>
            <hr className="mt-1" />
          </div>
        ))}
      </ul>
    </EmailLayout>
  )
}

export default index
