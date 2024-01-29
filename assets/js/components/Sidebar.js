import { Link } from '@inertiajs/react'

const Sidebar = () => {
  return (
    <div className="hidden h-screen flex-col items-center bg-slate-900 text-gray-200 lg:flex lg:w-[20rem]">
      <h2>RULERISE ADMIN</h2>

      <ul>
        <li>
          <Link href="/">Dashboard</Link>
        </li>
        <li>
          <Link href="/">Applied Students</Link>
        </li>
        <li>
          <Link href="/">Payments</Link>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar
