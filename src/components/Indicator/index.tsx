import { ReactElement, ReactNode } from 'react'
interface IndicatorProps {
  icon?: ReactElement
  children?: ReactNode
}

export default function Indicator({
  icon,
  children,
}: Readonly<IndicatorProps>) {
  return (
    <li className="profil__indicator">
      {icon}
      <p className="profil__indicator--p fontSize-paragraph3">{children}</p>
    </li>
  )
}
