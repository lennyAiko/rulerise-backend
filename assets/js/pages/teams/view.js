import { router, useForm } from '@inertiajs/react'
import TeamsLayout from './_components/TeamsLayout'
import TextInput from '@/components/TextInput'
import DefaultButton from '@/components/buttons/DefaultButton'

const update = ({ team }) => {
  const { data, setData, patch } = useForm({
    name: team.name,
    img: team.img,
    title: team.title,
  })

  const submit = (e) => {
    e.preventDefault()
    patch(`/teams/${team.id}`)
  }

  return (
    <TeamsLayout>
      <h2 className="my-2 mb-2 font-bold">Update team</h2>

      <form className="mt-2 flex w-full flex-col gap-2 px-3">
        <TextInput
          id="name"
          label={'Name'}
          value={data.name}
          changeData={setData}
        />
        <TextInput
          id="title"
          label={'Title'}
          value={data.title}
          changeData={setData}
        />
        <TextInput
          id="img"
          label={'Image URL'}
          value={data.img}
          changeData={setData}
        />

        <div className="flex gap-5 p-2">
          <DefaultButton text="Update" type="submit" doThis={submit} />
          <DefaultButton
            text="Delete"
            type="submit"
            doThis={(e) => {
              e.preventDefault()
              router.delete(`/teams/${team.id}`)
            }}
          />
        </div>
      </form>
    </TeamsLayout>
  )
}

export default update
