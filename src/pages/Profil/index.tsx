import './index.scss'
import { useParams } from 'react-router-dom'
import GetUserMainData from '../../api/GetUserMainData'
import { Post } from '../../api/GetUserMainData'
import NavigationSecond from '../../components/NavigationSecond'

export default function Profil() {
  const { id } = useParams<string>()
  const userData: Post | string = id ? GetUserMainData(id) : 'Chargement...'
  return (
    <>
      {typeof userData === 'string' ? (
        <h2>
          Bonjour <span>{userData}</span>
        </h2>
      ) : (
        <>
          <main className="page__main-container">
            <NavigationSecond />
            <article className="page__container">
              <header className="page__header">
                <h2 className="page__header--title fontSize-title">
                  Bonjour <span>{userData.userInfos.firstName}</span>
                </h2>
                <p className="fontSize-paragraph2">
                  Félicitation ! Vous avez explosé vos objectifs hier 👏
                </p>
              </header>
              <div></div>
            </article>
          </main>
        </>
      )}
    </>
  )
}
