const API_ENDPOINT = process.env.NEXT_PUBLIC_VERCEL_URL
const FETCHING_ENDPOINT_URL =
  process.env.NODE_ENV === 'production'
    ? `https://ysl0628-app-router-playground.vercel.app/api/data-fetching`
    : 'http://localhost:3000/api/data-fetching'

export { API_ENDPOINT, FETCHING_ENDPOINT_URL }
