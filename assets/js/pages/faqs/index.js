import React, { useEffect } from 'react'
import FaqLayout from './_components/FaqLayout'
import { Link, router } from '@inertiajs/react'

export default function Index({ faqs, deleted }) {
  useEffect(() => {
    if (deleted) {
      router.visit('/faqs')
    }
  }, [deleted, faqs])
  return (
    <FaqLayout>
      <div className="flex flex-col gap-2">
        <h1 className="font-bold">FAQ</h1>

        <Link href="/faqs/create" className="m-5 border p-2">
          Add
        </Link>

        {faqs.length > 0 ? (
          faqs.map((faq) => (
            <div className="" key={faq.id}>
              <Link href={`/faqs/${faq.id}`}>
                <p key={faq.id}>{faq.question}</p>
              </Link>
              <p>{faq.answer}</p>
              <button
                onClick={(e) => {
                  e.preventDefault()
                  router.delete(`/faqs/${faq.id}`)
                }}
              >
                Delete
              </button>
            </div>
          ))
        ) : (
          <p>No faqs available</p>
        )}
      </div>
    </FaqLayout>
  )
}
