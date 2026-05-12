import { useState, useEffect } from 'react'

// This is my custom hook for fetching data
// I learned that hooks are just functions that start with "use"
// and they let me reuse logic across components

function useFetch(url) {
  // three states I need - the data itself, whether its loading, and any errors
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    // dont fetch if no url was passed
    if (!url) return

    // set loading true when we start
    setLoading(true)
    setError(null) // clear previous errors

    fetch(url)
      .then((res) => {
        // res.ok checks if status is 200-299
        if (!res.ok) {
          throw new Error('something went wrong, status: ' + res.status)
        }
        return res.json()
      })
      .then((json) => {
        setData(json)
        setLoading(false)
      })
      .catch((err) => {
        // I had a bug here earlier where loading stayed true on error
        // fixed by setting it to false in catch too
        setError(err.message)
        setLoading(false)
      })
  }, [url]) // url in dependency array means re-fetch if url changes

  return { data, loading, error }
}

export default useFetch
