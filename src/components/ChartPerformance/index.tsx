import './index.scss'
import { UserPerformance } from '../../api/api.interface'
import apiInstance from '../../api/api'
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
} from 'recharts'

interface ChartPerformanceProps {
  userId?: string
}

export default function ChartPerformance({ userId }: ChartPerformanceProps) {
  const userData: UserPerformance | string = userId
    ? apiInstance.getUserPerformanceData(Number(userId))
    : 'Chargement...'

  if (typeof userData === 'string') {
    return <div>{userData}</div>
  }

  return (
    <>
      <div className="chartPerformance">
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart cx="50%" cy="50%" outerRadius="60%" data={userData.data}>
            <PolarGrid radialLines={false} stroke="#fff" />
            <PolarAngleAxis
              dataKey="kind"
              tickLine={false}
              axisLine={false}
              stroke="#fff"
              fontSize={'12px'}
            />
            <Radar dataKey="value" fill="#f00" fillOpacity={0.7} />
          </RadarChart>
        </ResponsiveContainer>
      </div>
    </>
  )
}
