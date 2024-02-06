import { Head, Link, usePage } from '@inertiajs/react'
import Header from './Header'
import { makePlural } from './utils'

const AppLayout = ({ children, title = 'Rulerise page' }) => {
  const { models, pathName } = usePage().props

  return (
    <>
      <Head title={title}></Head>
      <div className="flex min-h-screen flex-col font-outfit">
        <Header />
        <div className="grid grid-cols-8">
          <div className="col-span-full lg:col-span-6 lg:col-start-2">
            <div className="flex flex-col gap-5 px-2 pt-3 lg:flex-row lg:px-0 lg:pt-10">
              <div className="sticky top-14 z-50 m-2 h-fit bg-white shadow-lg">
                <div className="flex flex-wrap items-center justify-center lg:flex-col lg:items-start lg:justify-start lg:p-2">
                  {models
                    // @ts-ignore
                    .map((model, index) => (
                      <Link
                        href={`/${model ? model.toLowerCase() : ''}`}
                        key={index}
                        className={`m-2 text-sm font-semibold lg:text-xl
                        ${
                          pathName === `/${model ? model.toLowerCase() : ''}`
                            ? 'underline decoration-primary underline-offset-2'
                            : ''
                        }`}
                      >
                        {makePlural(model)}
                      </Link>
                    ))}
                </div>
              </div>
              <div className="flex w-full flex-col p-3 shadow-lg">
                {children}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AppLayout
