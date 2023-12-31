import './index.scss'
import { useParams } from 'react-router-dom'
import apiInstance from '../../api/api'
import { UserMainData } from '../../api/api.interface'
import NavigationSecond from '../../components/NavigationSecond'
import ChartActivity from '../../components/ChartActivity'
import IconCalories from '../../assets/calories-icon.svg?react'
import IconProtein from '../../assets/protein-icon.svg?react'
import IconCarbs from '../../assets/carbs-icon.svg?react'
import IconFat from '../../assets/fat-icon.svg?react'
import ChartSessions from '../../components/ChartSessions'
import ChartPerformance from '../../components/ChartPerformance'
import ChartScore from '../../components/ChartScore'
import Indicator from '../../components/Indicator'

export default function Profil() {
  const { id } = useParams<string>()
  const userData: UserMainData | string = id
    ? apiInstance.getUserData(Number(id))
    : 'Chargement...'

  // console.log(userData)
  return (
    <>
      {typeof userData === 'string' ? (
        <h2>
          <span>{userData}</span>
        </h2>
      ) : (
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
                    <ChartScore score={userData.todayScore ?? userData.score} />
                  </li>
                </ul>
              </div>
              <ul className="profil__indicators">
                <Indicator icon={<IconCalories />}>
                  <span className="profil__indicator--span fontSize-paragraph">{`${userData.keyData.calorieCount}kcal`}</span>{' '}
                  <br /> Calories
                </Indicator>
                <Indicator icon={<IconProtein />}>
                  <span className="profil__indicator--span fontSize-paragraph">{`${userData.keyData.proteinCount}g`}</span>{' '}
                  <br /> Proteines
                </Indicator>
                <Indicator icon={<IconCarbs />}>
                  <span className="profil__indicator--span fontSize-paragraph">{`${userData.keyData.carbohydrateCount}g`}</span>{' '}
                  <br /> Glucides
                </Indicator>
                <Indicator icon={<IconFat />}>
                  <span className="profil__indicator--span fontSize-paragraph">{`${userData.keyData.lipidCount}g`}</span>{' '}
                  <br /> Lipides
                </Indicator>
              </ul>
            </div>
          </article>
        </main>
      )}
    </>
  )
}
