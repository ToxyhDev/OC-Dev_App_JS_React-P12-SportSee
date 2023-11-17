import './index.scss'
// import GetUserPerformance from '../../api/GetUserPerformance'
import { UserPerformance, PerformanceData } from '../../api/api.interface'
import apiInstance from '../../api/api'
// import { Post } from '../../api/GetUserPerformance'
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
  console.log(userData)
  // --> Handle the case where userData is a string
  if (typeof userData === 'string') {
    return <div>{userData}</div>
  }

  // ==> Data loaded
  // -> Translate kinds
  const listKind: string[] = [
    'Cardio',
    'Énergie',
    'Endurance',
    'Force',
    'Vitesse',
    'Intensité',
  ]
  // -> Formatting data for chart
  const data: PerformanceData[] = userData.data.map((element) => ({
    kind: listKind[Number(element.kind) - 1],
    value: element.value,
  }))

  return (
    <>
      <div className="chartPerformance">
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart cx="50%" cy="50%" outerRadius="60%" data={data}>
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
