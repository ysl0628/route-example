import LinkWithIcon from '@/components/LinkWIthIcon/page'
import PageCard from '@/components/PageCard'
import Link from 'next/link'
import React from 'react'

const Page = () => {
  return (
    <PageCard
      title="Electronics"
      path="app/(intercepting)/products/electronics/page.tsx"
      url="/products/electronics"
    >
      <LinkWithIcon title="Go to phones" path="/products/electronics/phones" />
      <p className="dark:text-gray-400 text-gray-800">
        點擊連結前往攔截的 Phones 頁面
      </p>
    </PageCard>
  )
}

export default Page
