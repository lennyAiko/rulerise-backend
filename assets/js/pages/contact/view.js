import ContactLayout from './_component/ContactLayout'

const view = ({ contact }) => {
  return (
    <ContactLayout>
      <h1>View contact</h1>

      <h2>{contact.fullName}</h2>

      <p>{contact.email}</p>

      <p>{contact.request}</p>
    </ContactLayout>
  )
}

export default view
