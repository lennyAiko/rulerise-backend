import { Link, router } from '@inertiajs/react'
import CoursesLayout from './_components/CoursesLayout'
import { TiPlus } from 'react-icons/ti'

export default function Index({ courses }) {
  return (
    <CoursesLayout>
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <h1 className="my-2 mb-2 font-bold">Courses</h1>

          <Link href="/courses/create" className="w-fit p-1">
            <TiPlus />
          </Link>
        </div>

        {courses.length > 0 ? (
          courses.map((course) => (
            <div className="space-y-2 lg:mx-4" key={course.id}>
              <div className="flex justify-between">
                <p
                  key={course.id}
                  className="mt-2 flex items-center justify-between text-sm font-light lg:text-base"
                >
                  {course.title}
                </p>
                <Link
                  href={`/courses/${course.id}`}
                  className="rounded-lg bg-primary px-2 py-0.5 text-white"
                >
                  View
                </Link>
              </div>
              <hr />
            </div>
          ))
        ) : (
          <p>No courses available</p>
        )}
      </div>
    </CoursesLayout>
  )
}
