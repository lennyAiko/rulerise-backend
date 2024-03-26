import { router, useForm } from '@inertiajs/react'
import AddonLayout from './_components/AddonLayout'
import TextInput from '@/components/TextInput'
import DefaultButton from '@/components/buttons/DefaultButton'

const update = ({ addon }) => {
  const { data, setData, patch } = useForm({
    title: addon.title,
  })

  const submit = (e) => {
    e.preventDefault()
    patch(`/addon/${addon.id}`)
  }

  return (
    <AddonLayout>
      <h2 className="my-2 mb-2 font-bold">Update addon</h2>

      <form className="mt-2 flex w-full flex-col gap-2 px-3">
        <TextInput
          id="title"
          label={'Title'}
          value={data.title}
          changeData={setData}
        />

        <div className="flex gap-5 p-2">
          <DefaultButton text="Update" type="submit" doThis={submit} />
          <DefaultButton
            text="Delete"
            type="submit"
            doThis={(e) => {
              e.preventDefault()
              router.delete(`/addon/${addon.id}`)
            }}
          />
        </div>
      </form>
    </AddonLayout>
  )
}

export default update
