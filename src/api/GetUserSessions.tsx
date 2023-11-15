import axios from 'axios'
import { useEffect, useState } from 'react'
import { USER_AVERAGE_SESSIONS as mockData } from '../utils/mocks/mockData'
import { apiDisconnected } from './GetUserAllData'

interface DataPost {
  data: Post
}
export interface Post {
  userId: number
  sessions: Sessions[]
}
interface Sessions {
  day: number
  sessionLength: number
}
/**
 *
 * @param {number} userId
 * @returns {Post | string}  Data corresponds to the user ID
 */
export default function GetUserSessions(userId: string): Post | string {
  const baseURL = `http://localhost:3000/user/${userId}/average-sessions`

  const [post, setPost] = useState<DataPost | null>(null)

  useEffect(() => {
    if (apiDisconnected) {
      const userData = mockData.filter((data) => data.userId === Number(userId))
      setPost({ data: userData[0] } as DataPost)
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
  }, [baseURL, userId])

  if (!post) {
    return 'Chargement en cours'
  } else {
    return post.data
  }
}
