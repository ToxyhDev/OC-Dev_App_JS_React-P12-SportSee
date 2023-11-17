import axios, { AxiosResponse } from 'axios'
import { useState, useEffect } from 'react'

interface ApiResponse<T> {
  data: T
}

export function useFetch<T>(url: string) {
  const [data, setData] = useState<T | undefined>(undefined)
  const [isLoading, setLoading] = useState(true)
  const [error, setError] = useState<null | boolean>(null)

  useEffect(() => {
    async function fetchData() {
      try {
        const res: AxiosResponse<ApiResponse<T>> = await axios.get(url)
        console.log(res.data.data)
        setData(res.data.data)
      } catch (err) {
        console.error(err)
        setError(true)
      } finally {
        setLoading(false)
      }
    }

    if (url) {
      fetchData().catch((err) => console.error(err))
    } else {
      setLoading(true)
    }
  }, [url])

  return { data, isLoading, error }
}
