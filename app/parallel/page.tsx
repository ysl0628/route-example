import PageCard from '@/components/PageCard'
import Link from 'next/link'
import React from 'react'

const Page = () => {
  return (
    <PageCard title="parallel" path="app/parallel/page.tsx">
      <div className="flex flex-col gap-2">
        This is Parallel Page. It will change when you click the link.
        <Link
          href="/parallel/parallel-with-group"
          className="underline-offset-2 underline"
        >
          Go to Parallel with group page{' '}
        </Link>
      </div>
    </PageCard>
  )
}

export default Page
