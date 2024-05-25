import Link from 'next/link'
import PageCard from '@/components/PageCard'
import FetchCard from '@/components/FetchCard'
import LinkWithIcon from '@/components/LinkWIthIcon'

import { FETCHING_ENDPOINT_URL } from '@/config'

const getData = async () => {
  console.log('FETCHING_ENDPOINT_URL', FETCHING_ENDPOINT_URL)

  try {
    const res = await fetch(`${FETCHING_ENDPOINT_URL}`)
    const { data } = await res.json()
    return data
  } catch (error) {
    console.error('error', error)
  }
}

const Page = async () => {
  const data = await getData()

  return (
    <PageCard
      title="Data Fetching - force-cache"
      path="app/(fetch)/data-fetching/page.tsx"
      url="/data-fetching"
      description="重新整理頁面會因為 force cache 所以毫秒數不會改變"
    >
      <div className="flex flex-col gap-4">
        <FetchCard title="Fetch 的毫秒數" data={data} />
        <div className="flex flex-wrap gap-4">
          <LinkWithIcon
            title="前往 no-store (無快取)"
            path="/data-fetching/no-store"
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
