import AppLayout from '@/components/AppLayout'
import React from 'react'

const UserLayout = ({ children }) => {
  return <AppLayout title="Users">{children}</AppLayout>
}

export default UserLayout
