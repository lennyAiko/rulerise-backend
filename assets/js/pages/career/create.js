import { useEffect, useState } from 'react'
import CareerLayout from './_components/CareerLayout'
import { useForm } from '@inertiajs/react'
import TextInput from '@/components/TextInput'
import DefaultButton from '@/components/buttons/DefaultButton'
import TextareaInput from '@/components/TextareaInput'

export default function Create() {
  const [disabledButton, setDisabledButton] = useState(true)

  const { data, setData, post, progress } = useForm({
    title: '',
    description: '',
    jobType: '',
    locationAndFormat: '',
    dayToDay: '',
    skillSet: '',
    status: '',
  })

  useEffect(() => {
    if (data.title.length > 3) {
      setDisabledButton(false)
    } else {
      setDisabledButton(true)
    }
  }, [data.title])

  const submit = (e) => {
    e.preventDefault()
    post('/career/create')
  }

  return (
    <CareerLayout>
      <div className="flex flex-col gap-2">
        <h1 className="my-2 mb-2 font-bold">Create career</h1>

        <form className="flex flex-col gap-2">
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

          <DefaultButton
            text="Submit"
            type="submit"
            doThis={submit}
            disabled={disabledButton}
            className="mt-2 lg:w-fit lg:px-3"
          />
        </form>
      </div>
    </CareerLayout>
  )
}
