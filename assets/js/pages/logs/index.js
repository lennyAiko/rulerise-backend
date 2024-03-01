import React from 'react'
import LogLayout from './_components/LogLayout'

const index = ({ logs }) => {
  console.log(logs)
  return (
    <LogLayout>
      <h1 className="my-2 mb-2 font-bold">Logs</h1>

      <div className="max-h-[70vh] max-w-[60vw] overflow-hidden overflow-y-auto">
        {logs.map((_) => (
          <div className="m-2 w-full text-sm" key={_.id}>
            <span className="text-primary">**</span> {'  '}
            {_.log}
          </div>
        ))}
      </div>
    </LogLayout>
  )
}

export default index
