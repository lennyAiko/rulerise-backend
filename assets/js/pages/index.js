import AppLayout from '@/components/AppLayout'
import { usePage } from '@inertiajs/react'
import { toast } from 'react-toastify'

export default function Index({ name }) {
  // @ts-ignore
  // const { message } = usePage().props.flash

  // if (message.length > 0) toast.success(`${message}`)

  return (
    <AppLayout title={name}>
      <p className="flex h-full w-full items-center justify-center font-bold lg:text-xl">
        Click to view!
      </p>
    </AppLayout>
  )
}
