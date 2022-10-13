import React from 'react';
import { PieChart as RechartsPieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import { PieChartProps } from '../../types/types';

/**
 * * Pie chart (Presentational component)
 */

// todo: chart container with title comp

export function PieChart({ data, title }: PieChartProps) {
  return (
    <div style={{ border: '1px solid red', width: '100%', height: '100vh' }}>
      <h2>{title}</h2>
      <ResponsiveContainer width='100%' height='100%'>
        <RechartsPieChart width={500} height={500}>
          <Pie
            data={data}
            cx='50%'
            cy='50%'
            // labelLine={true}
            // label
            label={renderCustomizedLabel}
            outerRadius={80}
            fill='#8884d8'
            dataKey='value'>
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </RechartsPieChart>
      </ResponsiveContainer>
    </div>
  );
}

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042']; //todo: from theme

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
  name,
  value,
  ...restProps
}: any) => {
  console.log('🚀 ~ file: pie-chart.tsx ~ line 52 ~ restProps', restProps);
  const radius = innerRadius + (outerRadius - innerRadius) * 1.35;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <>
      <text
        x={x}
        y={y}
        fill={restProps.fill}
        textAnchor={x > cx ? 'start' : 'end'}
        dominantBaseline='central'
        className='flex flex-col'>
        <tspan>{name}</tspan>
        <tspan>{value}</tspan>
      </text>
    </>
  );
};
