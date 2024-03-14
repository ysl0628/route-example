import Link from 'next/link'
import PageCard from '@/components/PageCard'

const Page = () => {
  return (
    <PageCard
      title="phones - 原始的 Phones Page"
      path="app/(intercepting)/products/electronics/phones/page.tsx"
      url="/products/electronics/phones"
    >
      <div className="flex flex-col gap-2">
        <div>
          我被攔截了，你看到我是因為透過網址來了
          <br />
          或是在 (.)phone 中重新整理頁面
        </div>
        <Link
          href="/products/electronics"
          className="underline-offset-2 underline"
        >
          回到 Electronics
        </Link>
      </div>
    </PageCard>
  )
}

export default Page
