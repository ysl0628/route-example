import { NextResponse } from 'next/server'

export const revalidate = 0

export async function GET() {
  // 可序列化的日期
  const serializableDate = JSON.stringify(Date.now())
  return NextResponse.json({ message: 'succeed', data: serializableDate })
}
