import './index.scss'
// import PropTypes from 'prop-types'
import GetUserPerformance from '../../api/GetUserPerformance'
import { Post } from '../../api/GetUserPerformance'

// ChartActivity.propTypes = {
//   userId: PropTypes.string.isRequired,
// }

interface ChartPerformanceProps {
  userId?: string
}

export default function ChartPerformance({ userId }: ChartPerformanceProps) {
  // export default function ChartActivity({ userId }) {
  const userData: Post | string = userId
    ? GetUserPerformance(userId)
    : 'Chargement...'

  // --> Gérer le cas où userData est une chaîne de caractères
  if (typeof userData === 'string') {
    return <div>{userData}</div>
  }

  // ==> Data chargée

  return (
    <>
      <div className="chartPerformance">
        <h3 className="chartPerformance__title">Activité quotidienne</h3>
      </div>
    </>
  )
}
