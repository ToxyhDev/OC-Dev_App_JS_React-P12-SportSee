import './index.scss'
import { useParams } from 'react-router-dom'
import GetUserMainData from '../../api/GetUserMainData'
import { Post } from '../../api/GetUserMainData'
import NavigationSecond from '../../components/NavigationSecond'
import ChartActivity from '../../components/ChartActivity'
import IconCalories from '../../assets/calories-icon.svg?react'
import IconProtein from '../../assets/protein-icon.svg?react'
import IconCarbs from '../../assets/carbs-icon.svg?react'
import IconFat from '../../assets/fat-icon.svg?react'
import ChartSessions from '../../components/ChartSessions'
import ChartPerformance from '../../components/ChartPerformance'
import ChartScore from '../../components/ChartScore'

export default function Profil() {
  const { id } = useParams<string>()
  const userData: Post | string = id ? GetUserMainData(id) : 'Chargement...'
  // console.log(Object.keys(userData.keyData).length)
  return (
    <>
      {typeof userData === 'string' ? (
        <h2>
          Bonjour <span>{userData}</span>
        </h2>
      ) : (
        <>
          <main className="profil__main-container">
            <NavigationSecond />
            <article className="profil__container">
              <header className="profil__header">
                <h2 className="profil__header--title fontSize-title">
                  Bonjour <span>{userData.userInfos.firstName}</span>
                </h2>
                <p className="fontSize-paragraph2">
                  Félicitation ! Vous avez explosé vos objectifs hier 👏
                </p>
              </header>
              <div className="profil__content">
                <div className="profil__charts">
                  <ChartActivity userId={id} />
                  <ul className="profil__charts--squares">
                    <li className="profil__charts--element">
                      <ChartSessions userId={id} />
                    </li>
                    <li className="profil__charts--element">
                      <ChartPerformance userId={id} />
                    </li>
                    <li className="profil__charts--element">
                      <ChartScore score={userData.todayScore} />
                    </li>
                  </ul>
                </div>
                <ul className="profil__indicators">
                  <li className="profil__indicator">
                    <IconCalories width={100} />
                    <p className="profil__indicator--p fontSize-paragraph3">
                      <span className="profil__indicator--span fontSize-paragraph">{`${userData.keyData.calorieCount}kcal`}</span>{' '}
                      Calories
                    </p>
                  </li>
                  <li className="profil__indicator">
                    <IconProtein width={100} />
                    <p className="profil__indicator--p fontSize-paragraph3">
                      <span className="profil__indicator--span fontSize-paragraph">{`${userData.keyData.proteinCount}g`}</span>{' '}
                      Proteines
                    </p>
                  </li>
                  <li className="profil__indicator">
                    <IconCarbs width={100} />
                    <p className="profil__indicator--p fontSize-paragraph3">
                      <span className="profil__indicator--span fontSize-paragraph">{`${userData.keyData.carbohydrateCount}g`}</span>{' '}
                      Glucides
                    </p>
                  </li>
                  <li className="profil__indicator">
                    <IconFat width={100} />
                    <p className="profil__indicator--p fontSize-paragraph3">
                      <span className="profil__indicator--span fontSize-paragraph">{`${userData.keyData.lipidCount}g`}</span>{' '}
                      Lipides
                    </p>
                  </li>
                </ul>
              </div>
            </article>
          </main>
        </>
      )}
    </>
  )
}
