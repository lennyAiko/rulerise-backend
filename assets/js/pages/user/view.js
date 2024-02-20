import React from 'react'
import UserLayout from './_component/UserLayout'

const view = ({ users }) => {
  return (
    <UserLayout>
      <h1 className="m-2 mb-2 font-bold">View users</h1>

      {users.length > 0 ? (
        users.map((user) => (
          <div className="flex items-center justify-between" key={user.id}>
            <p className="">{user.fullName}</p>
            <button>{user.status}</button>
          </div>
        ))
      ) : (
        <p>No user available</p>
      )}
    </UserLayout>
  )
}

export default view
