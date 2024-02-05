import TalentLayout from './_component/TalentLayout'

const view = ({ talent }) => {
  return (
    <TalentLayout>
      <h1>View talent</h1>

      <h2>{talent.companyName}</h2>

      <p>{talent.companyLocation}</p>

      <p>{talent.companyWebsite}</p>
    </TalentLayout>
  )
}

export default view
