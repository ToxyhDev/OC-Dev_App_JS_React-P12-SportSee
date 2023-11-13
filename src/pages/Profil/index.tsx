import './index.scss'
import { useParams } from 'react-router-dom'
import GetUserMainData from '../../api/GetUserMainData'
import { Post } from '../../api/GetUserMainData'
import NavigationSecond from '../../components/NavigationSecond'
import ChartActivity from '../../components/ChartActivity'

export default function Profil() {
  const { id } = useParams<string>()
  const userData: Post | string = id ? GetUserMainData(id) : 'Chargement...'
  console.log(id)
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
                <ChartActivity userId={id} />
              </div>
            </article>
          </main>
        </>
      )}
    </>
  )
}
