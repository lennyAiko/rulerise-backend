import { router } from '@inertiajs/react'
import ContactLayout from './_component/ContactLayout'
import DefaultButton from '@/components/buttons/DefaultButton'

const view = ({ contact }) => {
  return (
    <ContactLayout>
      <h1 className="m-2 mb-2 font-bold">View contact</h1>

      <div className="m-2 space-y-2">
        <div className="col-span-2 text-sm md:col-span-3 lg:text-base">
          <p>Full name:</p>
          <p className="font-bold">{contact.fullName}</p>
        </div>
        <div className="col-span-2 text-sm md:col-span-3 lg:text-base">
          <p>Email:</p>
          <p className="font-bold">{contact.email}</p>
        </div>
        <div className="col-span-2 text-sm md:col-span-3 lg:text-base">
          <p>Request:</p>
          <p className="font-bold">{contact.request}</p>
        </div>
      </div>

      <DefaultButton
        className="mt-2 w-[20vw] lg:w-[10vw]"
        text="Delete"
        type={'button'}
        doThis={(e) => {
          e.preventDefault()
          router.delete(`/contact/${contact.id}`)
        }}
      />
    </ContactLayout>
  )
}

export default view
