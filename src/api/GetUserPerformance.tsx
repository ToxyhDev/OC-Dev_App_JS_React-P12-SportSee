import axios from 'axios'
import { useEffect, useState } from 'react'
import { USER_PERFORMANCE as mockData } from '../utils/mocks/mockData'

const apiDisconnected = false

interface DataPost {
  data: Post
}
export interface Post {
  userId: number
  kind: {
    1: string
    2: string
    3: string
    4: string
    5: string
    6: string
  }
  data: Sessions[]
}
interface Sessions {
  value: number
  kind: number
}

export default function GetUserPerformance(userId: string): Post | string {
  const baseURL = `http://localhost:3000/user/${userId}/performance`

  const [post, setPost] = useState<DataPost | null>(null)

  useEffect(() => {
    if (apiDisconnected) {
      setPost({ data: mockData[0] } as DataPost)
    } else {
      axios
        .get(baseURL)
        .then((res) => {
          setPost(res.data as DataPost)
        })
        .catch((err) => {
          console.error(err)
        })
    }
  }, [baseURL])

  if (!post) {
    return 'Chargement en cours'
  } else {
    return post.data
  }
}