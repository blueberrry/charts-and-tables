import React from 'react';
import { PieChart as RechartsPieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import { PieChartProps } from '../../types/types';

/**
 * * Pie chart (Presentational component)
 */

// TODO: Import colours from tailwind theme
// TODO: h2/h3 title component
// TODO:

export function PieChart({ data, title }: PieChartProps) {
  return (
    <div style={{ border: '1px solid red', width: '100%', height: '100vh' }}>
      <h2 className='text-blue-500'>{title}</h2>
      <ResponsiveContainer width='100%' height='100%'>
        <RechartsPieChart width={350} height={350}>
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
  const radius = innerRadius + (outerRadius - innerRadius) * 1.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill={restProps.fill} dominantBaseline='central'>
      <tspan x={x > cx ? x : x - 20} className='text-xs'>
        {name}
      </tspan>
      <tspan x={x > cx ? x : x - 20} y={y + 16}>
        {value}
      </tspan>
    </text>
  );

  //   const anchorClass = x > cx ? '-translate-x-1 -translate-y-1' : '-mx-1';
  // return (
  //   <foreignObject x={x > cx ? x : x - 20} y={y - 15} width='100' height='100'>
  //     <div>
  //       <span style={{ color: restProps.fill }}>{name}</span>
  //     </div>
  //     <div>
  //       <span style={{ color: restProps.fill }}>{value}</span>
  //     </div>
  //   </foreignObject>
  // );
};
