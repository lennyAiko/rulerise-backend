import FaqLayout from './_components/FaqLayout'
import { useForm } from '@inertiajs/react'

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
        <h1 className="font-bold">Create FAQ</h1>

        <form onSubmit={submit} className="flex flex-col gap-2">
          <label className="" htmlFor="question">
            Enter question
          </label>
          <input
            type="text"
            value={data.question}
            // @ts-ignore
            onChange={(e) => setData('question', e.target.value)}
            id="question"
            name="question"
            className="border"
          />

          <label className="" htmlFor="answer">
            Enter answer
          </label>
          <textarea
            value={data.answer}
            // @ts-ignore
            onChange={(e) => setData('answer', e.target.value)}
            id="answer"
            name="answer"
            className="border"
          />
          <button type="submit" className="border">
            Submit
          </button>
        </form>
      </div>
    </FaqLayout>
  )
}

export default create
