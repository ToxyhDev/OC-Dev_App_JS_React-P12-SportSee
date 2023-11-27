import { Link } from 'react-router-dom'
import './index.scss'

export default function Navigation() {
  return (
    <nav className="nav-main">
      <ul className="nav-main__list">
        <li className="nav-main__element">
          <Link to="/home" className={'fontSize-subtitle'}>
            Accueil
          </Link>
        </li>
        <li className="nav-main__element">
          <Link to="/user/12" className={'fontSize-subtitle'}>
            Profil
          </Link>
        </li>
        <li className="nav-main__element">
          <Link to="#" className={'fontSize-subtitle'}>
            Réglage
          </Link>
        </li>
        <li className="nav-main__element">
          <Link to="#" className={'fontSize-subtitle'}>
            Communauté
          </Link>
        </li>
      </ul>
    </nav>
  )
}
