import './index.scss'
import Navigation from '../Navigation'

import Logo from '../../assets/logo.svg?react'

export default function Header() {
  return (
    <header className="header-main">
      <article className="header-logo">
        <Logo />
        <h1 className="fontSize-subtitle">SportSee</h1>
      </article>
      <Navigation />
    </header>
  )
}
