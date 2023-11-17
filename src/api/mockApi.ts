// mockApi.ts

import {
  USER_MAIN_DATA,
  USER_ACTIVITY,
  USER_AVERAGE_SESSIONS,
  USER_PERFORMANCE,
} from '../utils/mocks/mockData'
import {
  UserMainData,
  UserActivity,
  UserAverageSessions,
  UserPerformance,
} from './api.interface'

interface MockApi {
  getUserMainDataById(userId: number): UserMainData
  getUserActivityById(userId: number): UserActivity
  getUserSessionsById(userId: number): UserAverageSessions
  getUserPerformanceById(userId: number): UserPerformance
}

class MockApiImpl implements MockApi {
  getUserMainDataById(userId: number): UserMainData {
    const userData = USER_MAIN_DATA.find((user) => user.id === userId)
    if (!userData) {
      throw new Error('Utilisateur non trouvé.')
    }
    return userData
  }

  getUserActivityById(userId: number): UserActivity {
    const activityData = USER_ACTIVITY.find((user) => user.userId === userId)
    if (!activityData) {
      throw new Error("Données d'activité non trouvées.")
    }
    return activityData
  }

  getUserSessionsById(userId: number): UserAverageSessions {
    const userData = USER_AVERAGE_SESSIONS.find(
      (user) => user.userId === userId
    )
    if (!userData) {
      throw new Error('Données de sessions non trouvées.')
    }
    return userData
  }

  getUserPerformanceById(userId: number): UserPerformance {
    const activityData = USER_PERFORMANCE.find((user) => user.userId === userId)
    if (!activityData) {
      throw new Error('Données de performance non trouvées.')
    }
    return activityData
  }
}

const mockApiInstance = new MockApiImpl()

export default mockApiInstance
