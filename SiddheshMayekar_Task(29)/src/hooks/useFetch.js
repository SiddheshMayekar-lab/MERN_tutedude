import { useEffect, useState } from 'react'

const useFetch = (url) => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const controller = new AbortController()

    const fetchData = async () => {
      if (!url) {
        setData(null)
        setError('Please provide a valid URL.')
        setLoading(false)
        return
      }

      setLoading(true)
      setError(null)

      try {
        const response = await fetch(url, { signal: controller.signal })

        if (!response.ok) {
          throw new Error(`Request failed with status ${response.status}`)
        }

        const result = await response.json()
        setData(result)
      } catch (err) {
        if (err.name !== 'AbortError') {
          setData(null)
          setError(err.message || 'Something went wrong while fetching data.')
        }
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false)
        }
      }
    }

    fetchData()

    return () => controller.abort()
  }, [url])

  return { data, loading, error }
}

export default useFetch
