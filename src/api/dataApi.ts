import {
  UserMainData,
  UserActivity,
  UserAverageSessions,
  UserPerformance,
  PerformanceData,
} from './api.interface'
import { useFetch } from '../utils/hooks/fetch'

const API_BASE_URL = `${import.meta.env.VITE_API_URL}`

export function GetUserMainDataById(userId: number): UserMainData | string {
  const response = useFetch<UserMainData>(`${API_BASE_URL}/user/${userId}`)

  if (response.error === true)
    return 'Erreur lors de la récupération des données utilisateur.'
  return response.data
}

export function GetUserActivityById(userId: number): UserActivity | string {
  const response = useFetch<UserActivity>(
    `${API_BASE_URL}/user/${userId}/activity`
  )
  if (response.error === true)
    return 'Erreur lors de la récupération des données utilisateur.'
  return response.data
}

export function GetUserSessionsById(
  userId: number
): UserAverageSessions | string {
  const response = useFetch<UserAverageSessions>(
    `${API_BASE_URL}/user/${userId}/average-sessions`
  )
  if (response.error === true)
    return 'Erreur lors de la récupération des données utilisateur.'

  if (typeof response.data === 'string') return response.data

  const week = ['L', 'M', 'M', 'J', 'V', 'S', 'D']
  response.data.sessions = response.data.sessions.map((session) => ({
    ...session,
    dayOfWeek: week[session.day - 1],
  }))

  return response.data
}

export function GetUserPerformanceById(
  userId: number
): UserPerformance | string {
  const response = useFetch<UserPerformance>(
    `${API_BASE_URL}/user/${userId}/performance`
  )
  if (response.error === true)
    return 'Erreur lors de la récupération des données utilisateur.'

  if (typeof response.data === 'string') return response.data

  // -> Formatting data for chart
  const listKind: string[] = [
    'Cardio',
    'Énergie',
    'Endurance',
    'Force',
    'Vitesse',
    'Intensité',
  ]
  const formatingData: PerformanceData[] = response.data.data.map(
    (element) => ({
      kind: listKind[Number(element.kind) - 1],
      value: element.value,
    })
  )
  return { ...response.data, data: formatingData }
}
