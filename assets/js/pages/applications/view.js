import { router } from '@inertiajs/react'
import ApplicationLayout from './_component/ApplicationLayout'
import DefaultButton from '@/components/buttons/DefaultButton'

const view = ({ application }) => {
  return (
    <ApplicationLayout>
      <h1 className="m-2 mb-2 font-bold">View application</h1>

      <div className="m-3 grid grid-cols-6 gap-3">
        <div className="col-span-full grid grid-cols-4 items-center md:col-span-4 lg:col-start-2">
          <div className="col-span-2 text-sm md:col-span-3 lg:text-base">
            <p>First name:</p>
            <p className="font-bold">{application.firstName}</p>
          </div>
          <div className="col-span-2 text-sm md:col-span-1 lg:text-base">
            <p>Last name:</p>
            <p className="font-bold">{application.lastName}</p>
          </div>
        </div>

        <div className="col-span-full grid grid-cols-4 items-center md:col-span-4 lg:col-start-2">
          <div className="col-span-2 text-sm md:col-span-3 lg:text-base">
            <p>Phone:</p>
            <p className="font-bold">{application.phoneNumber}</p>
          </div>
          <div className="col-span-2 text-sm md:col-span-1 lg:text-base">
            <p>Email:</p>
            <p className="font-bold">{application.email}</p>
          </div>
        </div>

        <div className="col-span-full grid grid-cols-4 items-center md:col-span-4 lg:col-start-2">
          <div className="col-span-2 text-sm md:col-span-3 lg:text-base">
            <p>Application status:</p>
            <p className="font-bold">{application.status}</p>
          </div>
          {/* <div className="col-span-2 text-sm md:col-span-1 lg:text-base">
            <p>Experience:</p>
            <p className="font-bold">{application.experience}</p>
          </div> */}
        </div>

        {/* <div className="grid items-center grid-cols-4 col-span-full md:col-span-4 lg:col-start-2">
          <div className="col-span-2 text-sm md:col-span-3 lg:text-base">
            <p>Educational Background:</p>
            <p className="font-bold">{application.educationalBackground}</p>
          </div>
          <div className="col-span-2 text-sm md:col-span-1 lg:text-base">
            <p>Reference:</p>
            <p className="font-bold">{application.reference}</p>
          </div> 
        </div>*/}

        {/* <button
          onClick={(e) => {
            e.preventDefault()
            router.delete(`/application/${application.id}`)
          }}
          className="w-16 py-2 text-sm text-white rounded-lg col-span-full bg-primary lg:col-span-6 lg:col-start-2 lg:w-20 lg:text-base"
        >
          Delete
        </button> */}

        <DefaultButton
          className="col-start-2 col-end-4"
          text="Delete"
          type={'button'}
          doThis={(e) => {
            e.preventDefault()
            router.delete(`/application/${application.id}`)
          }}
        />
      </div>
    </ApplicationLayout>
  )
}

export default view
