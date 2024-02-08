// @ts-ignore
import React, { useEffect } from 'react'
import FaqLayout from './_components/FaqLayout'
import { router, useForm } from '@inertiajs/react'
import TextInput from '@/components/TextInput'
import TextareaInput from '@/components/TextareaInput'

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
    <FaqLayout>
      <h2 className="m-2 mb-2 font-bold">Update faq</h2>
      <form onSubmit={submit} className="flex w-full flex-col gap-3">
        <TextInput
          id="question"
          label="Enter question"
          value={data.question}
          changeData={setData}
        />
        <TextareaInput
          id="answer"
          label="Enter answer"
          value={data.answer}
          changeData={setData}
        />

        <div className="flex gap-2">
          <button
            type="submit"
            className="w-fit rounded-lg border bg-primary p-2 text-sm text-white hover:bg-primary/80 lg:text-base"
          >
            Update
          </button>

          <button
            onClick={(e) => {
              e.preventDefault()
              router.delete(`/faqs/${faq.id}`)
            }}
            className="w-fit rounded-lg border bg-primary p-2 text-sm text-white hover:bg-primary/80 lg:text-base"
          >
            Delete
          </button>
        </div>
      </form>
    </FaqLayout>
  )
}

export default view
