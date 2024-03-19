import { router, useForm } from '@inertiajs/react'
import CareerLayout from './_components/CareerLayout'
import TextInput from '@/components/TextInput'
import DefaultButton from '@/components/buttons/DefaultButton'
import TextareaInput from '@/components/TextareaInput'

const update = ({ career }) => {
  const { data, setData, patch } = useForm({
    title: career.title,
    description: career.description,
    jobType: career.jobType,
    locationAndFormat: career.locationAndFormat,
    dayToDay: career.dayToDay,
    skillSet: career.skillSet,
    status: career.status,
  })

  const submit = (e) => {
    e.preventDefault()
    patch(`/career/${career.id}`)
  }

  return (
    <CareerLayout>
      <h2 className="my-2 mb-2 font-bold">Update career</h2>

      <form className="flex flex-col w-full gap-2 px-3 mt-2">
        <TextInput
          label="Enter job title"
          value={data.title}
          changeData={setData}
          id="title"
        />

        <TextareaInput
          label="Enter job description"
          value={data.description}
          changeData={setData}
          id="description"
        />

        <label className="pl-2" htmlFor="learning">
          Enter job type
        </label>
        <select
          id="jobType"
          value={data.jobType}
          className="p-2 font-bold border rounded-lg"
          // @ts-ignore
          onChange={(e) => setData('jobType', e.target.value)}
        >
          <option>--choose job type--</option>
          <option value="full-time">Full-time</option>
          <option value="remote">Remote</option>
          <option value="hybrid">Hybrid</option>
        </select>

        <label className="pl-2" htmlFor="learning">
          Enter status of job
        </label>
        <select
          id="status"
          value={data.status}
          className="p-2 font-bold border rounded-lg"
          // @ts-ignore
          onChange={(e) => setData('status', e.target.value)}
        >
          <option>--choose job status--</option>
          <option value="open">Open</option>
          <option value="closed">Closed</option>
        </select>

        <TextareaInput
          label="Enter location and format"
          value={data.locationAndFormat}
          changeData={setData}
          id="locationAndFormat"
        />

        <TextareaInput
          label="Enter day to day instructions"
          value={data.dayToDay}
          changeData={setData}
          id="dayToDay"
        />

        <TextareaInput
          label="Enter skill set"
          value={data.skillSet}
          changeData={setData}
          id="skillSet"
        />

        <div className="flex gap-5 p-2">
          <DefaultButton text="Update" type="submit" doThis={submit} />
          <DefaultButton
            text="Delete"
            type="submit"
            doThis={(e) => {
              e.preventDefault()
              router.delete(`/career/${career.id}`)
            }}
          />
        </div>
      </form>
    </CareerLayout>
  )
}

export default update
