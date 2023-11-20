import './index.scss'

import { Link } from 'react-router-dom'
export default function Home() {
  return (
    <>
      <>
        <main className="home__main-container">
          <h2 className="home__title fontSize-title">
            Liste des <span>Athlètes</span>:
          </h2>
          <p className="home__p fontSize-paragraph2">
            Cliquer sur un des noms pour afficher leur performance 📊
          </p>
          <ul className="home__list">
            <li className="home__element fontSize-paragraph">
              <Link to={`/user/12`}>Karl Dovineau</Link>
            </li>
            <li className="home__element fontSize-paragraph">
              <Link to={`/user/18`}>Cecilia Ratorez</Link>
            </li>
          </ul>
        </main>
        <footer className="home__footer">
          <p className="fontSize-paragraph2">Copyright, SportSee 2020</p>
        </footer>
      </>
    </>
  )
}
