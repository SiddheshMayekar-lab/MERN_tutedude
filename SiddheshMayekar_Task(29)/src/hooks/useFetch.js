import { useEffect, useState } from 'react'

const useFetch = (url) => {
  // state for storing fetched data
  const [data, setData] = useState(null)

  // state for loading message
  const [loading, setLoading] = useState(true)

  // state for error handling
  const [error, setError] = useState(null)

  useEffect(() => {
    // function for fetching api data
    const fetchData = async () => {
      try {
        setLoading(true)

        // fetching data from given url
        const response = await fetch(url)

        // converting response into json
        const result = await response.json()

        // storing data in state
        setData(result)
      } catch (err) {
        // if error comes while fetching
        setError('Failed to fetch data')
      }

      // loading completed
      setLoading(false)
    }

    // calling function
    fetchData()
  }, [url])

  // returning values from custom hook
  return { data, loading, error }
}

export default useFetch