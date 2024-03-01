import { router, useForm } from '@inertiajs/react'
import ArticleLayout from './_components/ArticleLayout'
import TextInput from '@/components/TextInput'
import DefaultButton from '@/components/buttons/DefaultButton'
import TextareaInput from '@/components/TextareaInput'

const update = ({ article }) => {
  const { data, setData, patch } = useForm({
    title: article.title,
    img: article.img,
    summary: article.summary,
    content: article.content,
  })

  const submit = (e) => {
    e.preventDefault()
    patch(`/articles/${article.id}`)
  }

  return (
    <ArticleLayout>
      <h2 className="my-2 mb-2 font-bold">Update article</h2>

      <form className="mt-2 flex w-full flex-col gap-2 px-3">
        <TextInput
          label="Update article title"
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
          label="Update article summary"
          id="summary"
          value={data.summary}
          changeData={setData}
        />

        <TextareaInput
          label="Update article content"
          id="content"
          value={data.content}
          changeData={setData}
          height="350px"
        />

        <div className="flex gap-5 p-2">
          <DefaultButton text="Update" type="submit" doThis={submit} />
          <DefaultButton
            text="Delete"
            type="submit"
            doThis={(e) => {
              e.preventDefault()
              router.delete(`/articles/${article.id}`)
            }}
          />
        </div>
      </form>
    </ArticleLayout>
  )
}

export default update
