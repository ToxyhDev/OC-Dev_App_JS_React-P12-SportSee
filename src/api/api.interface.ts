export interface UserMainData {
  id: number
  userInfos: UserInfo
  todayScore?: number
  score?: number
  keyData: KeyData
}

export interface UserInfo {
  firstName: string
  lastName: string
  age: number
}

export interface KeyData {
  calorieCount: number
  proteinCount: number
  carbohydrateCount: number
  lipidCount: number
}
//----------------------------------------------

export interface UserActivity {
  userId: number
  sessions: Session[]
}
export interface Session {
  day: string
  kilogram: number
  calories: number
}
//----------------------------------------------

export interface UserAverageSessions {
  userId: number
  sessions: AverageSession[]
}
export interface AverageSession {
  day: number
  sessionLength: number
}
//----------------------------------------------
export interface UserPerformance {
  userId: number
  kind: {
    1: string
    2: string
    3: string
    4: string
    5: string
    6: string
  }
  data: PerformanceData[]
}
export interface PerformanceData {
  value: number
  kind: number | string
}

//----------------------------------------------

export interface Api {
  getUserData(userId: number): UserMainData | string
  getUserActivityData(userId: number): UserActivity | string
  getUserSessionsData(userId: number): UserAverageSessions | string
  getUserPerformanceData(userId: number): UserPerformance | string
}
export interface MockApi {
  getUserMainDataById(userId: number): UserMainData
  getUserActivityById(userId: number): UserActivity
  getUserSessionsById(userId: number): UserAverageSessions
  getUserPerformanceById(userId: number): UserPerformance
}
