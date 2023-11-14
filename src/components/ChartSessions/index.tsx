import './index.scss'
// import PropTypes from 'prop-types'
import GetUserSessions from '../../api/GetUserSessions'
import { Post } from '../../api/GetUserSessions'

// ChartActivity.propTypes = {
//   userId: PropTypes.string.isRequired,
// }

interface ChartSessionsProps {
  userId?: string
}

export default function ChartSessions({ userId }: ChartSessionsProps) {
  // export default function ChartActivity({ userId }) {
  const userData: Post | string = userId
    ? GetUserSessions(userId)
    : 'Chargement...'

  // --> Gérer le cas où userData est une chaîne de caractères
  if (typeof userData === 'string') {
    return <div>{userData}</div>
  }

  // ==> Data chargée

  return (
    <>
      <div className="chartSessions">
        <h3 className="chartSessions__title">Activité quotidienne</h3>
      </div>
    </>
  )
}
