import { Link, router } from '@inertiajs/react'
import ArticleLayout from './_components/ArticleLayout'
import { TiPlus } from 'react-icons/ti'

export default function Index({ articles }) {
  return (
    <ArticleLayout>
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <h1 className="my-2 mb-2 font-bold">Articles</h1>

          <Link href="/articles/create" className="w-fit p-1">
            <TiPlus />
          </Link>
        </div>

        {articles.length > 0 ? (
          articles.map((article, index) => (
            <div className="space-y-1.5 lg:mx-4" key={index}>
              <div className="mt-2 flex items-center justify-between text-sm font-light lg:text-base">
                <p className="line-clamp-1">{article.title}</p>
                <Link
                  href={`/articles/${article.id}`}
                  className="rounded-lg bg-primary px-2 py-0.5 text-white"
                >
                  view
                </Link>
              </div>
              <hr />
            </div>
          ))
        ) : (
          <p>No articles available</p>
        )}
      </div>
    </ArticleLayout>
  )
}
