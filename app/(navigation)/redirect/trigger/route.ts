import { redirect } from 'next/navigation'
import { NextResponse, NextRequest } from 'next/server'

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const query = searchParams.get('q')

  if (query === 'helloworld') {
    redirect('/redirect/redirected')
  }

  return NextResponse.json({ message: 'succeed' })
}
