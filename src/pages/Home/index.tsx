import './index.scss'
// import { useParams } from 'react-router-dom'
import GetUserAllData from '../../api/GetUserAllData'
import { Post } from '../../api/GetUserAllData'
import { Link } from 'react-router-dom'

export default function Home() {
  // const { id } = useParams<string>()
  const userData: Post[] | string = GetUserAllData()
  console.log(userData)
  return (
    <>
      {typeof userData === 'string' ? (
        <h2>
          <span>{userData}</span>
        </h2>
      ) : (
        <>
          <main className="home__main-container">
            <h2 className="home__title fontSize-title">
              Liste des <span>Athlètes</span>:
            </h2>
            <p className="home__p fontSize-paragraph2">
              Cliquer sur un des noms pour afficher leur performance 📊
            </p>
            <ul className="home__list">
              {userData.map((element: Post, index: number) => (
                <li key={index} className="homme__element fontSize-paragraph">
                  {'➡️ '}
                  <Link to={`/user/${element.id}`}>
                    {`${element.userInfos.firstName} ${element.userInfos.lastName}`}
                  </Link>
                </li>
              ))}
            </ul>
          </main>
          <footer className="home__footer">
            <p className="fontSize-paragraph2">Copyright, SportSee 2020</p>
          </footer>
        </>
      )}
    </>
  )
}
