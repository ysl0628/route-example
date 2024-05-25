const API_ENDPOINT = process.env.NEXT_PUBLIC_VERCEL_URL
const FETCHING_ENDPOINT_URL =
  process.env.NODE_ENV === 'production'
    ? `https://${API_ENDPOINT}/api/data-fetching`
    : `${API_ENDPOINT}/api/data-fetching`

export { API_ENDPOINT, FETCHING_ENDPOINT_URL }
