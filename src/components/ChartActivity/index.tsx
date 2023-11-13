import './index.scss'
// import PropTypes from 'prop-types'
import GetUserActivity from '../../api/GetUserActivity'
import { Post } from '../../api/GetUserActivity'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts'

// ChartActivity.propTypes = {
//   userId: PropTypes.string.isRequired,
// }

interface ChartActivityProps {
  userId?: string
}

export default function ChartActivity({ userId }: ChartActivityProps) {
  // export default function ChartActivity({ userId }) {
  const userData: Post | string = userId
    ? GetUserActivity(userId)
    : 'Chargement...'
  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
  // const userData = userId ? GetUserActivity(userId) : 'Chargement...'

  // --> Gérer le cas où userData est une chaîne de caractères
  if (typeof userData === 'string') {
    return <div>{userData}</div>
  }

  // ==> Data chargée

  const renderLegend = (text: string) => {
    return (
      <span
        style={{
          lineHeight: '40px',
          fontSize: '14px',
          color: '#74798C',
          fontWeight: 'bold',
        }}
      >
        {text}
      </span>
    )
  }

  return (
    <>
      <div className="chartActivity">
        <h3 className="chartActivity__title">Activité quotidienne</h3>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            margin={{
              top: 24,
              right: 32,
              left: 32,
              bottom: 24,
            }}
            data={userData.sessions}
            barSize={8}
          >
            <CartesianGrid vertical={false} strokeDasharray="2 2" />

            <XAxis
              tickLine={false}
              tick={{ fill: '#9B9EAC', fontSize: 14, fontWeight: 500 }}
            />
            <YAxis
              orientation="right"
              axisLine={false}
              tickLine={false}
              tickSize={20}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: '#E60000',
              }}
              itemStyle={{
                color: 'white',
              }}
              labelStyle={{ display: 'none' }}
              formatter={(value, _name, unit) => [value, unit]}
            />

            <Legend
              verticalAlign="top"
              align="right"
              iconType="circle"
              wrapperStyle={{ paddingBottom: '40px' }}
              formatter={renderLegend}
            />
            <Bar
              unit="Kg"
              name="Poids (kg)"
              dataKey="kilogram"
              fill="#282D30"
              radius={[5, 5, 0, 0]}
            />
            <Bar
              unit="kCal"
              name="Calories brûlées (kCal)"
              dataKey="calories"
              fill="#e60000"
              radius={[5, 5, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </>
  )
}
