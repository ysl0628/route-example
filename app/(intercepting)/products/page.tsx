import LinkWithIcon from '@/components/LinkWIthIcon/page'
import PageCard from '@/components/PageCard'
import Link from 'next/link'
import React from 'react'

const Page = () => {
  return (
    <PageCard
      title="Products"
      path="app/(intercepting)/products/page.tsx"
      url="/products"
    >
      <div className="flex flex-col gap-3">
        <div>Products Page</div>
        <div className="flex gap-6">
          <LinkWithIcon title="Go to clothing" path="/products/clothing" />
          <LinkWithIcon
            title="Go to electronics"
            path="/products/electronics"
          />
        </div>
      </div>
    </PageCard>
  )
}

export default Page
