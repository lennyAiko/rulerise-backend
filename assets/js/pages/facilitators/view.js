// @ts-ignore
import React, { useEffect } from 'react'
import FacilitatorLayout from './_components/FacilitatorLayout'
import { useForm } from '@inertiajs/react'

const view = ({ faq }) => {
  const { data, setData, patch } = useForm({
    question: faq.question,
    answer: faq.answer,
  })

  const submit = (e) => {
    e.preventDefault()
    patch(`/faqs/${faq.id}`)
  }

  return (
    <FacilitatorLayout>
      <h2>Update faq</h2>
      <form onSubmit={submit} className="flex w-full flex-col">
        <input
          type="text"
          value={data.question}
          // @ts-ignore
          onChange={(e) => setData('question', e.target.value)}
        />
        <input
          type="text"
          value={data.answer}
          // @ts-ignore
          onChange={(e) => setData('answer', e.target.value)}
        />
        <button type="submit">Update</button>
      </form>
    </FacilitatorLayout>
  )
}

export default view
