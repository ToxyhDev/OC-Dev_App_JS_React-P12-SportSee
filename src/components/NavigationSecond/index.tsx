import { Link } from 'react-router-dom'
import './index.scss'

import Sport1 from '../../assets/sport1.svg?react'
import Sport2 from '../../assets/sport2.svg?react'
import Sport3 from '../../assets/sport3.svg?react'
import Sport4 from '../../assets/sport4.svg?react'

export default function NavigationSecond() {
  return (
    <div className="navSecond">
      <nav className="nav-second">
        <ul className="nav-second__list">
          <li className="nav-second__element">
            <Link to="#" className="nav-second__link">
              <Sport1 />
            </Link>
          </li>
          <li className="nav-second__element">
            <Link to="#" className="nav-second__link">
              <Sport2 />
            </Link>
          </li>
          <li className="nav-second__element">
            <Link to="#" className="nav-second__link">
              <Sport3 />
            </Link>
          </li>
          <li className="nav-second__element">
            <Link to="#" className="nav-second__link">
              <Sport4 />
            </Link>
          </li>
        </ul>
      </nav>
      <p className="copyright">Copyright, SportSee 2020</p>
    </div>
  )
}
