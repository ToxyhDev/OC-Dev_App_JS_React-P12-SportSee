import './index.scss'
import GetUserPerformance from '../../api/GetUserPerformance'
import { Post } from '../../api/GetUserPerformance'
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
interface IData {
  kind: string
  value: number
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

  // console.log(userData)

  const data: IData[] = userData.data.map((element) => ({
    kind: Object.values(userData.kind)[element.kind - 1],
    value: element.value,
  }))

  // console.log(data)

  return (
    <>
      <div className="chartPerformance">
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
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
