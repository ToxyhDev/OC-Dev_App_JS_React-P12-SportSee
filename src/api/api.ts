import {
  UserMainData,
  UserActivity,
  UserAverageSessions,
  UserPerformance,
  Api,
} from './api.interface'
// import dataApiInstance from './dataApi'
import {
  GetUserMainDataById,
  getUserActivityById,
  getUserSessionsById,
  getUserPerformanceById,
} from './dataApi'
import mockApiInstance from './mockApi'

class ApiImpl implements Api {
  private useApi: boolean

  constructor(useApi: boolean) {
    this.useApi = useApi
  }

  getUserData(userId: number): UserMainData | string {
    if (this.useApi) {
      try {
        const mainData = GetUserMainDataById(userId)
        // console.log(mainData.data)
        return mainData
      } catch (error) {
        return 'Erreur lors de la récupération des données utilisateur.'
      }
    } else {
      const userData = mockApiInstance.getUserMainDataById(userId)
      return userData || 'Utilisateur non trouvé.'
    }
  }

  getUserActivityData(userId: number): UserActivity | string {
    if (this.useApi) {
      try {
        const mainData = getUserActivityById(userId)
        return mainData
      } catch (error) {
        return 'Erreur lors de la récupération des données utilisateur.'
      }
    } else {
      const userData = mockApiInstance.getUserActivityById(userId)
      return userData || 'Utilisateur non trouvé.'
    }
  }

  getUserSessionsData(userId: number): UserAverageSessions | string {
    if (this.useApi) {
      try {
        const mainData = getUserSessionsById(userId)
        return mainData
      } catch (error) {
        return 'Erreur lors de la récupération des données utilisateur.'
      }
    } else {
      const userData = mockApiInstance.getUserSessionsById(userId)
      return userData || 'Utilisateur non trouvé.'
    }
  }

  getUserPerformanceData(userId: number): UserPerformance | string {
    if (this.useApi) {
      try {
        const mainData = getUserPerformanceById(userId)
        return mainData
      } catch (error) {
        return 'Erreur lors de la récupération des données utilisateur.'
      }
    } else {
      const userData = mockApiInstance.getUserPerformanceById(userId)
      return userData || 'Utilisateur non trouvé.'
    }
  }
}
const apiUsing = false
const apiInstance = new ApiImpl(apiUsing)

export default apiInstance
