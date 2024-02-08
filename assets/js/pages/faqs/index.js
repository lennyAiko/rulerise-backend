import { TiPlus } from 'react-icons/ti'
import FaqLayout from './_components/FaqLayout'
import { Link, router } from '@inertiajs/react'

export default function Index({ faqs }) {
  return (
    <FaqLayout>
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <h1 className="my-2 mb-2 font-bold">FAQ</h1>

          <Link href="/faqs/create" className="w-fit p-1">
            <TiPlus />
          </Link>
        </div>

        {faqs.length > 0 ? (
          faqs.map((faq) => (
            <div className="flex flex-col gap-1 px-3" key={faq.id}>
              <div className="mt-2 flex items-center justify-between text-sm font-light lg:text-base">
                <p key={faq.id}>{faq.question}</p>
                <Link
                  href={`/faqs/${faq.id}`}
                  className="rounded-lg bg-primary px-2 py-0.5 text-white"
                >
                  View
                </Link>
              </div>
              <hr />
            </div>
          ))
        ) : (
          <p>No faqs available</p>
        )}
      </div>
    </FaqLayout>
  )
}
