import { Link, usePage } from '@inertiajs/react'

const Header = () => {
  const { pathName } = usePage().props

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

      <div className="">
        <div className="rounded-full bg-primary p-1.5 text-sm font-bold text-white md:p-2 lg:text-base">
          L.C
        </div>
      </div>
    </div>
  )
}

export default Header
