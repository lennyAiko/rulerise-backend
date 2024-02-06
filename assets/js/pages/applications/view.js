import ApplicationLayout from './_component/ApplicationLayout'

const view = ({ application }) => {
  return (
    <ApplicationLayout>
      <h1 className="mb-2 font-bold">View application</h1>

      <p>{application.firstName}</p>
      <p>{application.lastName}</p>
      <p>{application.phoneNumber}</p>
      <p>{application.email}</p>
      <p>{application.location}</p>
      <p>{application.experience}</p>
      <p>{application.educationalBackground}</p>
      <p>{application.reference}</p>
    </ApplicationLayout>
  )
}

export default view
