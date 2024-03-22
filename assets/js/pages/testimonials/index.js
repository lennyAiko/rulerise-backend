import { Link, router } from '@inertiajs/react'
import TestimonialsLayout from './_components/TestimonialsLayout'
import { TiPlus } from 'react-icons/ti'

export default function Index({ testimonials }) {
  return (
    <TestimonialsLayout>
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <h1 className="my-2 mb-2 font-bold">Testimonials</h1>

          <Link href="/testimonials/create" className="w-fit p-1">
            <TiPlus />
          </Link>
        </div>

        {testimonials.length > 0 ? (
          testimonials.map((testimonial, index) => (
            <div className="space-y-1.5 lg:mx-4" key={index}>
              <div className="mt-2 flex items-center justify-between text-sm font-light lg:text-base">
                <p>{testimonial.name}</p>
                <Link
                  href={`/testimonials/${testimonial.id}`}
                  className="rounded-lg bg-primary px-2 py-0.5 text-white"
                >
                  view
                </Link>
              </div>
              <hr />
            </div>
          ))
        ) : (
          <p>No testimonials available</p>
        )}
      </div>
    </TestimonialsLayout>
  )
}
