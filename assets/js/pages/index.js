import AppLayout from '@/components/AppLayout'

export default function Index({ name }) {
  return (
    <AppLayout title={name}>
      <p className="flex h-full w-full items-center justify-center font-bold lg:text-xl">
        Click to view!
      </p>
    </AppLayout>
  )
}
