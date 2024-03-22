import { router, useForm } from '@inertiajs/react'
import TestimonialLayout from './_components/TestimonialsLayout'
import TextInput from '@/components/TextInput'
import DefaultButton from '@/components/buttons/DefaultButton'
import TextareaInput from '@/components/TextareaInput'

const update = ({ testimonial }) => {
  const { data, setData, patch } = useForm({
    name: testimonial.name,
    img: testimonial.img,
    description: testimonial.description,
  })

  const submit = (e) => {
    e.preventDefault()
    patch(`/testimonials/${testimonial.id}`)
  }

  return (
    <TestimonialLayout>
      <h2 className="my-2 mb-2 font-bold">Update testimonial</h2>

      <form className="mt-2 flex w-full flex-col gap-2 px-3">
        <TextInput
          id="name"
          label={'Name'}
          value={data.name}
          changeData={setData}
        />
        <TextareaInput
          id="description"
          label={'description'}
          value={data.description}
          changeData={setData}
        />
        <TextInput
          id="img"
          label={'Image URL'}
          value={data.img}
          changeData={setData}
        />

        <div className="flex gap-5 p-2">
          <DefaultButton text="Update" type="submit" doThis={submit} />
          <DefaultButton
            text="Delete"
            type="submit"
            doThis={(e) => {
              e.preventDefault()
              router.delete(`/testimonials/${testimonial.id}`)
            }}
          />
        </div>
      </form>
    </TestimonialLayout>
  )
}

export default update
