import { NextResponse } from 'next/server'

export async function GET() {
  const date = new Date()
  // 可序列化的日期
  const serializableDate = date.valueOf()
  return NextResponse.json({ message: 'succeed', data: serializableDate })
}
