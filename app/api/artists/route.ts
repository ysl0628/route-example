import { NextResponse } from 'next/server'

export async function GET(
  res: NextResponse,
  req: Request,
  { id }: { id: string }
) {
  const data = await new Promise((resolve) => {
    setTimeout(() => {
      resolve({ username: 'user' + id })
    }, 1000)
  })
  return NextResponse.json({ message: 'succeed', data })
}
