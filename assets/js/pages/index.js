import AppLayout from '@/components/AppLayout'
import Counter from '@/components/Counter'
import Sidebar from '@/components/Sidebar'
import { Link } from '@inertiajs/react'

export default function Index({ name, models, model_count }) {
  return (
    <AppLayout>
      <div className="flex gap-5">
        <div className="shadow-lg">
          <h2 className="">Total: {model_count}</h2>

          <div className="flex flex-col">
            {models.map((model, index) => (
              <Link href={`/${model ? model.toLowerCase() : ''}`} key={index}>
                {model}
              </Link>
            ))}
          </div>
        </div>
        <div className="items-center justify-center shadow-lg">
          <p>Click to view!</p>
        </div>
      </div>
    </AppLayout>
  )
}
