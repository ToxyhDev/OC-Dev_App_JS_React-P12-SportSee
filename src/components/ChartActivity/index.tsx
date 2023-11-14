import './index.scss'
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

interface ChartActivityProps {
  userId?: string
}

export default function ChartActivity({ userId }: ChartActivityProps) {
  const userData: Post | string = userId
    ? GetUserActivity(userId)
    : 'Chargement...'

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

  interface CustomToolTipProps {
    active?: boolean
    payload?: Payload[]
  }
  interface Payload {
    value: number
    unit: string
  }

  const CustomTooltip = ({ active, payload }: CustomToolTipProps) => {
    if (active && payload) {
      return (
        <div
          style={{ backgroundColor: '#E60000', color: '#fff', padding: '8px' }}
        >
          <p className="label">{`${payload[0].value} ${payload[0].unit}`}</p>
          <p className="label">{`${payload[1].value} ${payload[1].unit}`}</p>
        </div>
      )
    }

    return null
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
              // formatter={(value, _name, unit) => [value, unit]}
              content={<CustomTooltip />}
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
