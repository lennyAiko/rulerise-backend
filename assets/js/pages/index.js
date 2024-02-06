import AppLayout from '@/components/AppLayout'

export default function Index({ name }) {
  return (
    <AppLayout title={name}>
      <p>Click to view!</p>
    </AppLayout>
  )
}
