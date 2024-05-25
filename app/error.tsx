'use client'
import Link from 'next/link'

// Error components must be Client Components

export default function Error({
  error,
  reset
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div>
      <h2>Something went wrong!</h2>
      <button
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        重新整理頁面
      </button>
      <div className="flex gap-5">
        <Link href="/" className="underline-offset-2 underline">
          回到首頁
        </Link>
      </div>
    </div>
  )
}
