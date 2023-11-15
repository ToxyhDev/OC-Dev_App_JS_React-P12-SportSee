import axios from 'axios'
import { useEffect, useState } from 'react'
import { USER_MAIN_DATA as mockData } from '../utils/mocks/mockData'

export const apiDisconnected = true

interface DataPost {
  data: Post[]
}
export interface Post {
  id: number
  keyData: {
    calorieCount: number

    proteinCount: number
    carbohydrateCount: number
    lipidCount: number
  }
  todayScore: number
  userInfos: {
    firstName: string
    lastName: string
    age: number
  }
}

/**
 * Post[] if data load else return loading message
 * @returns {Post[] | string}
 */

export default function GetUserAllData(): Post[] | string {
  const baseURL = `http://localhost:3000/users`

  const [post, setPost] = useState<DataPost | null>(null)

  useEffect(() => {
    if (apiDisconnected) {
      setPost({ data: mockData } as DataPost)
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

  console.log(post)

  if (!post) {
    return 'Chargement en cours'
  } else {
    return post.data
  }
}
