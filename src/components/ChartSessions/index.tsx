import './index.scss'
import GetUserSessions from '../../api/GetUserSessions'
import { Post } from '../../api/GetUserSessions'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  // CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'

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
  const week = ['L', 'M', 'M', 'J', 'V', 'S', 'D']

  // Mapper les données pour obtenir les jours de la semaine
  const dataWithDaysOfWeek = userData.sessions.map((session) => ({
    ...session,
    dayOfWeek: week[session.day - 1],
  }))

  // Ajouter un point à gauche
  const leftPoint = { day: 0, sessionLength: 30 }
  // Ajouter un point à droite
  const rightPoint = { day: 8, sessionLength: 70 }

  // Concaténer les points ajoutés avec les sessions existantes
  const extendedSessions = [leftPoint, ...dataWithDaysOfWeek, rightPoint]

  interface PointsProps {
    x: number
    y: number
  }

  interface CustomCursorProps {
    points?: PointsProps[]
  }

  function CustomCursor({ points }: CustomCursorProps) {
    // console.log(points)
    if (!points || points.length === 0) {
      return null
    }
    return (
      <rect
        className="widget-sessions__cursor"
        fill="#000000"
        opacity={0.1}
        x={points[0].x}
        height="100%"
        width="100%"
      />
    )
  }

  return (
    <>
      <div className="chartSessions">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={extendedSessions}
            margin={{ top: 10, right: -20, bottom: 10, left: -20 }}
          >
            <text
              style={{ fontSize: 18, fill: 'rgba(255, 255, 255, 0.7)' }}
              x="0"
              y="9"
              dy="0.71em"
            >
              <tspan x="26" y="39" dy="0.71em">
                Durée moyenne des
              </tspan>
              <tspan x="26" y="39" dy="1.81em">
                sessions
              </tspan>
            </text>
            <XAxis
              dataKey="dayOfWeek"
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 14, fill: 'rgba(255, 255, 255, 0.7)' }}
            />
            <YAxis tickLine={false} domain={[0, 'dataMax + 30']} hide={true} />

            <Tooltip
              cursor={<CustomCursor />}
              filterNull={false}
              separator=""
              itemStyle={{
                color: '#000000',
                backgroundColor: '#ffffff',
                fontSize: '12px',
                margin: 8,
                border: 0,
              }}
              formatter={(day) => [' min', day]}
              contentStyle={{
                padding: '4px',
                backgroundColor: '#ffffff',
                border: 0,
              }}
              labelStyle={{
                display: 'none',
              }}
            />
            <Line
              type="monotone"
              dataKey="sessionLength"
              stroke="rgba(255, 255, 255, 0.7)"
              strokeWidth={2}
              dot={false}
              activeDot={{
                r: 5,
                strokeWidth: 12,
                stroke: 'rgba(255, 255, 255, 0.2)',
                fill: 'rgba(255, 255, 255)',
              }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </>
  )
}
