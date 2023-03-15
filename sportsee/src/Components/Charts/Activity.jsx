import React from 'react'
import {
  BarChart,
  Bar,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts'
import PropTypes from 'prop-types'

/**
 *
 * @param {boolean}  [Props.active='true']
 * @param {array}   [Props.payload=[]]
 * @returns an activ tooltip or null
 */
const CustomTooltip = ({ active, payload }) => {
  if (active) {
    return (
      <div>
        <p>{`${payload[0].value} `}g</p>
        <p>{`${payload[1].value} `}Kcal</p>
      </div>
    )
  }
  return null
}
/**
 * Display a bar chart with user's daily activity results
 * @component
 * @param {Array} activity - array of activity datas
 * @returns {JSX.Element} ActivityGraph component
 */
const ActivityGraph = ({ userActivity }) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        data={userActivity}
        margin={{
          top: 80,
          right: 50,
          left: 45,
          bottom: 20,
        }}
        barSize={7}
        barGap={8}
      >
        <CartesianGrid strokeDasharray="4 1" vertical={false} />
        <XAxis
          dataKey="day"
          tickLine={false}
          stroke="#DEDEDE"
          tick={{ fill: '#9B9EAC', fontWeight: 500, fontSize: 14 }}
          padding={{ left: -47, right: -48 }}
          tickMargin={16}
        />

        <YAxis
          tickLine={false}
          orientation="right"
          axisLine={false}
          tick={{ fill: '#9B9EAC', fontWeight: 500, fontSize: 14 }}
          tickMargin={45}
          minTickGap={27}
        />

        <Tooltip
          content={<CustomTooltip />}
          wrapperStyle={{
            color: '#FFF',
            background: 'red',
            border: 'none',
            outline: 'none',
            width: '70px',
            height: '85px',
            textAlign: 'center',
            lineHeight: '2.5',
          }}
        />

        <Legend
          verticalAlign="top"
          align="right"
          iconType={'circle'}
          iconSize={8}
          width={277}
          height={25}
          wrapperStyle={{ top: 35, right: 20 }}
          formatter={(value) => {
            return (
              <span style={{ color: '#74798C', fontSize: 14, fontWeight: 500 }}>
                {value}
              </span>
            )
          }}
        />

        <Bar
          dataKey="kilogram"
          name="Poids (kg)"
          fill="#282D30"
          radius={[3, 3, 0, 0]}
        />

        <Bar
          dataKey="calories"
          name="Calories brulées (kCal)"
          fill="#E60000"
          radius={[3, 3, 0, 0]}
        />

        <text x="4%" y="15%" style={{ fontWeight: 500 }}>
          Activité quotidienne
        </text>
      </BarChart>
    </ResponsiveContainer>
  )
}

export default ActivityGraph

//Proptypes
ActivityGraph.propTypes = {
  userActivity: PropTypes.array.isRequired,
}
