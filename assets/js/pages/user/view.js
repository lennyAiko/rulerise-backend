import UserLayout from './_component/UserLayout'
import DefaultButton from '@/components/buttons/DefaultButton'
import { router } from '@inertiajs/react'

const view = ({ users }) => {
  const handleSubmit = (value, id) => {
    router.patch(`/user/${id}`, { status: value })
  }

  return (
    <UserLayout>
      <h1 className="m-2 mb-2 font-bold">View users</h1>

      {users.length > 0 ? (
        users.map((user, index) => (
          <div key={index}>
            <div
              className="mx-2 my-1 flex items-center justify-between px-2"
              key={user.id}
            >
              <p className="">{user.fullName}</p>
              <DefaultButton
                text={`${!user.status ? 'approve' : 'disapprove'}`}
                type="submit"
                doThis={() => {
                  handleSubmit(!user.status, user.id)
                }}
              />
            </div>
            <hr className="mx-2" />
          </div>
        ))
      ) : (
        <p>No user available</p>
      )}
    </UserLayout>
  )
}

export default view
