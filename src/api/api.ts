import {
  UserMainData,
  UserActivity,
  UserAverageSessions,
  UserPerformance,
  Api,
} from './api.interface'
import {
  GetUserMainDataById,
  GetUserActivityById,
  GetUserSessionsById,
  GetUserPerformanceById,
} from './dataApi'
import mockApiInstance from './mockApi'

class ApiImpl implements Api {
  private useApi: boolean

  constructor(useApi: boolean) {
    this.useApi = useApi
  }

  getUserData(userId: number): UserMainData | string {
    if (this.useApi) {
      const mainData = GetUserMainDataById(userId)
      return mainData
    } else {
      const userData = mockApiInstance.getUserMainDataById(userId)
      return userData || 'Utilisateur non trouvé.'
    }
  }

  getUserActivityData(userId: number): UserActivity | string {
    if (this.useApi) {
      const mainData = GetUserActivityById(userId)
      return mainData
    } else {
      const userData = mockApiInstance.getUserActivityById(userId)
      return userData || 'Utilisateur non trouvé.'
    }
  }

  getUserSessionsData(userId: number): UserAverageSessions | string {
    if (this.useApi) {
      const mainData = GetUserSessionsById(userId)
      return mainData
    } else {
      const userData = mockApiInstance.getUserSessionsById(userId)
      return userData || 'Utilisateur non trouvé.'
    }
  }

  getUserPerformanceData(userId: number): UserPerformance | string {
    if (this.useApi) {
      const mainData = GetUserPerformanceById(userId)
      return mainData
    } else {
      const userData = mockApiInstance.getUserPerformanceById(userId)
      return userData || 'Utilisateur non trouvé.'
    }
  }
}
const apiUsing = import.meta.env.VITE_USE_API
const apiInstance = new ApiImpl(apiUsing)

export default apiInstance
