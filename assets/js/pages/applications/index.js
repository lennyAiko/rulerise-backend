import AppLayout from '@/components/AppLayout'

export default function Index({ applications }) {
  return (
    <AppLayout>
      <h1>Applications</h1>

      <ul>
        {applications.map((application) => (
          <li key={application.id}>{application.fullName}</li>
        ))}
      </ul>
    </AppLayout>
  )
}
