import TextInput from '@/components/TextInput'
import FaqLayout from './_components/FaqLayout'
import { useForm } from '@inertiajs/react'
import TextareaInput from '@/components/TextareaInput'

const create = () => {
  const { data, setData, post } = useForm({
    question: '',
    answer: '',
  })

  const submit = (e) => {
    e.preventDefault()
    post('/faqs/create')
  }

  return (
    <FaqLayout>
      <div className="">
        <h1 className="m-2 mb-2 font-bold">Create FAQs</h1>

        <form onSubmit={submit} className="flex flex-col gap-2">
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

          <button
            type="submit"
            className="w-fit rounded-lg border bg-primary p-2 text-sm text-white hover:bg-primary/80 lg:text-base"
          >
            Submit
          </button>
        </form>
      </div>
    </FaqLayout>
  )
}

export default create
