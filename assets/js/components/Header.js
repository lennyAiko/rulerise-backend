import { Link, usePage } from '@inertiajs/react'

const Header = () => {
  const { pathName, loggedInUser } = usePage().props

  return (
    <div className="sticky top-0 z-50 flex h-fit w-full items-center justify-between bg-white p-2 shadow-lg">
      <Link href="/">
        <img
          src="/images/rulerise.svg"
          alt="rulerise logo"
          className="h-[25px] w-[95px] lg:h-[35px] lg:w-[125px]"
        />
      </Link>

      <div className="space-x-4">
        <Link
          href="/"
          className={`text-sm font-bold hover:text-primary md:text-lg ${
            pathName === '/' ? 'text-primary' : 'text-gray-600'
          }`}
        >
          Dashboard
        </Link>
        <Link
          href="/"
          className={`text-sm font-bold hover:text-primary md:text-lg ${
            pathName === '/payments' ? 'text-primary' : 'text-gray-600'
          }`}
        >
          Payments
        </Link>
      </div>

      <Link
        href="/logout"
        className="flex items-center justify-center rounded-full bg-primary p-1.5 text-sm text-white md:p-2.5 lg:text-base lg:font-bold"
      >
        {
          // @ts-ignore
          loggedInUser?.fullName?.split(' ')[0].split('')[0]
        }

        {
          // @ts-ignore
          loggedInUser?.fullName?.split(' ')[1]?.split('')[0]
        }
      </Link>
    </div>
  )
}

export default Header
