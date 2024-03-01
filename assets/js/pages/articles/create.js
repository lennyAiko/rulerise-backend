import { useEffect, useState } from 'react'
import { useForm } from '@inertiajs/react'
import TextInput from '@/components/TextInput'
import DefaultButton from '@/components/buttons/DefaultButton'
import ArticleLayout from './_components/ArticleLayout'
import TextareaInput from '@/components/TextareaInput'

export default function Create() {
  const [disabledButton, setDisabledButton] = useState(true)

  const { data, setData, post, progress } = useForm({
    title: '',
    summary: '',
    content: '',
    img: '',
  })

  useEffect(() => {
    if (
      data.title.length > 3 &&
      data.summary.length > 3 &&
      data.content.length > 3
    ) {
      setDisabledButton(false)
    } else {
      setDisabledButton(true)
    }
  }, [data.title, data.summary, data.content])

  const submit = (e) => {
    e.preventDefault()
    post('/articles/create')
  }

  return (
    <ArticleLayout>
      <div className="flex flex-col gap-2">
        <h1 className="my-2 mb-2 font-bold">Create article</h1>

        <form className="flex flex-col gap-2">
          <TextInput
            label="Enter article title"
            value={data.title}
            changeData={setData}
            id="title"
          />

          <TextInput
            label="Paste article image link"
            value={data.img}
            changeData={setData}
            id="img"
          />

          <TextareaInput
            label="Enter article summary"
            id="summary"
            value={data.summary}
            changeData={setData}
          />

          <TextareaInput
            label="Enter article content"
            id="content"
            value={data.content}
            changeData={setData}
            height="350px"
          />

          <DefaultButton
            text="Submit"
            type="submit"
            doThis={submit}
            disabled={disabledButton}
            className="mt-2 lg:w-fit lg:px-3"
          />
        </form>
      </div>
    </ArticleLayout>
  )
}
