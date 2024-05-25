// import { NextResponse } from 'next/server'

// export async function GET(
//   req: Request,
//   { params }: { params: { username: string } }
// ) {
//   const { username } = params
//   if (username === 'user200') {
//     return new NextResponse('Not Found user200', { status: 404 })
//   }

//   if (!username) {
//     return new NextResponse('Not Found', { status: 404 })
//   }

//   const data = await new Promise((resolve) => {
//     setTimeout(() => {
//       resolve({
//         albums: [
//           { id: '1', name: 'album1' },
//           { id: '2', name: 'album2' },
//           { id: '3', name: 'album3' }
//         ]
//       })
//     }, 500)
//   })
//   return NextResponse.json({ message: 'succeed', data })
// }
