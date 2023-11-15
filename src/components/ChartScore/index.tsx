import './index.scss'
import {
  RadialBarChart,
  RadialBar,
  ResponsiveContainer,
  PolarAngleAxis,
} from 'recharts'

interface ChartScoreProps {
  score?: number
}

interface IData {
  name: string
  value: number
  fill: string
}

export default function ChartScore({ score }: ChartScoreProps) {
  // export default function ChartActivity({ userId }) {
  const userData: number | string = score ? score : 'Chargement...'

  // --> Gérer le cas où userData est une chaîne de caractères
  if (typeof userData === 'string') {
    return <div>{userData}</div>
  }

  const data: IData[] = [
    {
      name: 'score',
      value: userData * 100,
      fill: '#f00',
    },
  ]

  // ==> Data chargée

  return (
    <>
      <div className="chartScore">
        <h3 className="chartScore__title">Score</h3>
        <ResponsiveContainer width="100%" height="100%">
          <RadialBarChart
            cx="50%"
            cy="50%"
            innerRadius="60%" //60
            barSize={10}
            data={data}
            startAngle={90}
            endAngle={450}
            // margin={{
            //   top: 24,
            //   right: 24,
            //   left: 24,
            //   bottom: 24,
            // }}
          >
            {/* r='80' */}
            <circle r="85" cx="50%" cy="50%" fill="white" />
            <PolarAngleAxis type="number" domain={[0, 100]} tick={false} />
            <RadialBar dataKey="value" cornerRadius={30} />
            <text
              x="50%"
              y="100%"
              textAnchor="middle"
              dominantBaseline="middle"
            >
              <tspan
                x="50%"
                y="40%"
                dy="0.22em"
                style={{ fontSize: 26, fontWeight: '700', fill: '#282D30' }}
              >
                {data[0].value}%
              </tspan>
              <tspan
                x="50%"
                y="40%"
                dy="2.22em"
                style={{ fontSize: 16, fontWeight: '500', fill: '#74798C' }}
              >
                de votre
              </tspan>
              <tspan
                x="50%"
                y="40%"
                dy="3.22em"
                style={{ fontSize: 16, fontWeight: '500', fill: '#74798C' }}
              >
                objectif
              </tspan>
            </text>
          </RadialBarChart>
        </ResponsiveContainer>
      </div>
    </>
  )
}
