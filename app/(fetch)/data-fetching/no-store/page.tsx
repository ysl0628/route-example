import Link from 'next/link'
import PageCard from '@/components/PageCard'
import FetchCard from '@/components/FetchCard'
import LinkWithIcon from '@/components/LinkWIthIcon'

import { FETCHING_ENDPOINT_URL } from '@/config'

const getData = async ({ cache }: { cache?: RequestCache | undefined }) => {
  try {
    const res = await fetch(`${FETCHING_ENDPOINT_URL}`, {
      cache
    })

    const { data } = await res.json()
    return data
  } catch (error) {
    console.error('error', error)
  }
}

const Page = async () => {
  const data = await getData({})
  const dataNoStore = await getData({ cache: 'no-store' })

  return (
    <PageCard
      title="Data Fetching - no-store"
      path="app/(fetch)/data-fetching/no-store/page.tsx"
      url="/data-fetching/no-store"
      description="重新整理頁面會因為 no-store 所以紅色框中毫秒數會改變"
    >
      <div className="flex flex-col gap-4">
        <div className="flex flex-wrap gap-4">
          <FetchCard title="有 cache 的毫秒數" data={data} />
          <FetchCard title="無 cache 的毫秒數" data={dataNoStore} focus />
        </div>
        <div className="flex flex-wrap gap-4">
          <LinkWithIcon
            title="前往 data-fetching (有快取)"
            path="/data-fetching"
          />
          <LinkWithIcon
            title="前往 Revalidation (重新驗證)"
            path="/data-fetching/revalidation"
          />
        </div>
        <div className="flex gap-5">
          <Link href="/" className="underline-offset-2 underline">
            回到首頁
          </Link>
        </div>
      </div>
    </PageCard>
  )
}

export default Page
