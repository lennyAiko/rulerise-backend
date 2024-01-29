import React from 'react'
import Sidebar from './Sidebar'
import { Head } from '@inertiajs/react'

const AppLayout = ({ children, title = 'Rulerise page' }) => {
  return (
    <>
      <Head title={title}></Head>
      <div className="flex min-h-screen">
        <Sidebar />
        <div className="">{children}</div>
      </div>
    </>
  )
}

export default AppLayout
