import axios from 'axios'
import { useEffect, useState } from 'react'
import { USER_MAIN_DATA as mockData } from '../utils/mocks/mockData'

const apiDisconnected = false

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
