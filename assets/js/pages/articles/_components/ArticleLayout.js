import AppLayout from '@/components/AppLayout'
import React from 'react'

const ArticleLayout = ({ children }) => {
  return <AppLayout title="Article">{children}</AppLayout>
}

export default ArticleLayout
