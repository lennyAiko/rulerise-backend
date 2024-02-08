import { router } from '@inertiajs/react'
import TalentLayout from './_component/TalentLayout'
import DefaultButton from '@/components/buttons/DefaultButton'

const view = ({ talent }) => {
  return (
    <TalentLayout>
      <h1 className="m-2 mb-2 font-bold">View talent</h1>

      <div className="m-3 grid grid-cols-6 gap-3">
        <div className="col-span-full grid grid-cols-4 items-center md:col-span-4 lg:col-start-2">
          <div className="col-span-2 text-sm md:col-span-3 lg:text-base">
            <p>Company name:</p>
            <p className="font-bold">{talent.companyName}</p>
          </div>
          <div className="col-span-2 text-sm md:col-span-1 lg:text-base">
            <p>Company location:</p>
            <p className="font-bold">{talent.companyLocation}</p>
          </div>
        </div>

        <div className="col-span-full grid grid-cols-4 items-center md:col-span-4 lg:col-start-2">
          <div className="col-span-2 text-sm md:col-span-3 lg:text-base">
            <p>Company website:</p>
            <p className="font-bold">{talent.companyWebsite}</p>
          </div>
          <div className="col-span-2 text-sm md:col-span-1 lg:text-base">
            <p>Company email:</p>
            <p className="font-bold">{talent.companyEmail}</p>
          </div>
        </div>

        <div className="col-span-full grid grid-cols-4 items-center md:col-span-4 lg:col-start-2">
          <div className="col-span-2 text-sm md:col-span-3 lg:text-base">
            <p>Employment type:</p>
            <p className="font-bold">{talent.employmentType}</p>
          </div>
          <div className="col-span-2 text-sm md:col-span-1 lg:text-base">
            <p>Talent to hire:</p>
            <p className="font-bold">{talent.talentToHire}</p>
          </div>
        </div>

        <div className="col-span-full grid grid-cols-4 items-center md:col-span-4 lg:col-start-2">
          <div className="col-span-4 text-sm md:col-span-3 lg:text-base">
            <p>comment:</p>
            <p className="font-bold">{talent.comment}</p>
          </div>
        </div>

        <DefaultButton
          className="col-start-2 col-end-4"
          text="Delete"
          type={'button'}
          doThis={(e) => {
            e.preventDefault()
            router.delete(`/talent/${talent.id}`)
          }}
        />
      </div>
    </TalentLayout>
  )
}

export default view
