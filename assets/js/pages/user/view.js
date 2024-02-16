import React from 'react'
import UserLayout from './_component/UserLayout'

const view = ({ users }) => {
  console.log(users)
  return (
    <UserLayout>
      <h1 className="m-2 mb-2 font-bold">View users</h1>
    </UserLayout>
  )
}

export default view
