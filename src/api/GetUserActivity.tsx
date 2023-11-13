import axios from 'axios'
import { useEffect, useState } from 'react'
import { USER_ACTIVITY as mockData } from '../utils/mocks/mockData'

const apiDisconnected = false

interface DataPost {
  data: Post
}
export interface Post {
  userId: number
  sessions: Sessions[]
}
interface Sessions {
  day: string
  kilogram: number
  calories: number
}

export default function GetUserActivity(userId: string): Post | string {
  const baseURL = `http://localhost:3000/user/${userId}/activity`

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
