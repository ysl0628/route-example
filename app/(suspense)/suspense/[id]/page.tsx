import Link from 'next/link'
import PageCard from '@/components/PageCard'
import FetchCard from '@/components/FetchCard'
import LinkWithIcon from '@/components/LinkWIthIcon'

import { API_ENDPOINT } from '@/config'
import { Suspense } from 'react'

const getArtists = async ({
  cache,
  id
}: {
  cache?: RequestCache | undefined
  id: string
}) => {
  const res = await fetch(`${API_ENDPOINT}/api/artists/${id}`, { cache })
  const { data: username } = await res.json()
  return username
}

const getAlbums = async ({
  cache,
  username
}: {
  cache?: RequestCache | undefined
  username: string
}) => {
  const res = await fetch(`${API_ENDPOINT}/api/albums/${username}`, { cache })
  const { data: albums } = await res.json()
  return albums
}

const Page = async ({ id }: { id: string }) => {
  const username = await getArtists({ id })
  const albums = await getAlbums({ username })

  return (
    <PageCard
      title="Data Fetching - no-store"
      path="app/(fetch)/data-fetching/no-store/page.tsx"
      url="/data-fetching/no-store"
      description="重新整理頁面會因為 no-store 所以紅色框中毫秒數會改變"
    >
      <div className="flex flex-col gap-4">
        <div className="flex flex-wrap gap-4">
          <Suspense fallback={<div>Loading artists...</div>}>
            <FetchCard title="有 cache 的毫秒數" data={username} />
          </Suspense>
        </div>
        <div className="flex flex-wrap gap-4">
          <LinkWithIcon
            title="前往 data-fetching (有快取)"
            path="/data-fetching"
          />
          <LinkWithIcon
            title="前往 Revalidation (重新驗證)"
            path="/revalidation"
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
