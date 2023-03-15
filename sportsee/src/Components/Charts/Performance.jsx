import React from 'react'
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from 'recharts'
import PropTypes from 'prop-types'
/**
 * Display user's performances chart
 * @component
 * @param {Array} performance - array of performances datas
 * @returns {JSX.Element} Performance component
 */

const Performance = ({ performance }) => {
  return (
    <div>
      <ResponsiveContainer width="100%" aspect={1}>
        <RadarChart
          margin={{ top: 30, right: 30, bottom: 30, left: 30 }}
          style={{ backgroundColor: '#282D30' }}
          data={performance}
        >
          <PolarGrid radialLines={false} />
          <PolarAngleAxis
            dataKey="kind"
            tickLine={false}
            axisLine={false}
            dy={5}
            stroke="#FFF"
            tick={{ fill: '#FFFFFF', fontSize: 12 }}
          />
          <PolarRadiusAxis tick={false} tickCount={6} axisLine={false} />
          <Radar dataKey="value" fill="#FF0101" fillOpacity={0.6} />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Performance
//Proptypes
Performance.propTypes = {
  performance: PropTypes.array.isRequired,
}
