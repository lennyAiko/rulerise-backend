import { Link, router } from '@inertiajs/react'
import CoursesLayout from './_components/CoursesLayout'

export default function Index({ courses }) {
  return (
    <CoursesLayout>
      <div className="flex flex-col gap-2">
        <h1 className="font-bold">Courses</h1>

        <Link href="/courses/create" className="m-5 border p-2">
          Add
        </Link>

        {courses.length > 0 ? (
          courses.map((course) => (
            <div className="" key={course.id}>
              <Link href={`/course/${course.id}`}>
                <p key={course.id}>{course.name}</p>
              </Link>
              <button
                onClick={(e) => {
                  e.preventDefault()
                  router.delete(`/course/${course.id}`)
                }}
              >
                Delete
              </button>
            </div>
          ))
        ) : (
          <p>No courses available</p>
        )}
      </div>
    </CoursesLayout>
  )
}
