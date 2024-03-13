import PageCard from '@/components/PageCard'
import React, { Suspense } from 'react'

async function Main() {
  await new Promise((resolve) => setTimeout(resolve, 2000))

  return <PageCard title="@parallelA" path="app/parallel/@parallelA" />
}

const Page = async () => {
  return (
    <Suspense fallback="Loading...">
      <Main />
    </Suspense>
  )
}

export default Page
