// const response = await axios.get<UserMainData>(
//   `${API_BASE_URL}/user/${userId}`
// )
// return response.data

import axios from 'axios'
import {
  UserMainData,
  UserActivity,
  UserAverageSessions,
  UserPerformance,
} from './api.interface'
import { useFetch } from '../utils/hooks/fetch'

const API_BASE_URL = 'http://localhost:3000'

// interface DataApi {
//   getUserMainDataById(userId: number): Promise<UserMainData>
//   getUserActivityById(userId: number): Promise<UserActivity>
//   getUserSessionsById(userId: number): Promise<UserAverageSessions>
//   getUserPerformanceById(userId: number): Promise<UserPerformance>
// }
// Dans ce fichier redigier dans un fichier tsx pour useFetch et utiliser axios
// class DataApiImpl implements DataApi {
export function GetUserMainDataById(userId: number): UserMainData {
  const response = useFetch<UserMainData>(`${API_BASE_URL}/user/${userId}`)
  console.log(response)
  // console.log(response.error)
  console.log(response.data)
  // const response = { data, isLoading, error }
  return response.data
}

export async function getUserActivityById(
  userId: number
): Promise<UserActivity> {
  const response = await axios.get<UserActivity>(
    `${API_BASE_URL}/user/${userId}/activity`
  )
  return response.data
}

export async function getUserSessionsById(
  userId: number
): Promise<UserAverageSessions> {
  const response = await axios.get<UserAverageSessions>(
    `${API_BASE_URL}/user/${userId}/average-sessions`
  )
  return response.data
}

export async function getUserPerformanceById(
  userId: number
): Promise<UserPerformance> {
  const response = await axios.get<UserPerformance>(
    `${API_BASE_URL}/user/${userId}/performance`
  )
  return response.data
}
// }

// const dataApiInstance = new DataApiImpl()

// export default dataApiInstance
