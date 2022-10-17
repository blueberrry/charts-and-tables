import React from 'react';
import { PieChart as RechartsPieChart, Pie, Cell, ResponsiveContainer, Legend } from 'recharts';
import { PieChartProps } from '../../types/types';

/**
 * * Pie chart (Presentational component)
 */

// TODO: Import colours from tailwind theme from theme/set up tailwind theme
// TODO: h2/h3 title component
// TODO: Extend tw sizes add xxsm
// TODO: Add transition to text tag on mount - https://tailwindcss.com/blog/utility-friendly-transitions-with-tailwindui-react

//TODO: Responsive - media query for positioning legend

// TODO: Fetch and transform data with wrapper chat about modifying api, investigate integration
// TODO: Build out responsive grid page when complete

// TODO: Accessibility hints/ skip to content in main app - set up accessibility testing

// width: '100%', height: '100vh'
export function PieChart({ data, title, type = 'withKey' }: PieChartProps) {
  // ! temp - border red, REMOVE
  return (
    <div className='border-2 border-red-500 w-full h-[30rem]'>
      <h2 className='text-blue-500'>{title}</h2>
      <ResponsiveContainer width='100%' height='100%'>
        <RechartsPieChart width={400} height={400}>
          {type === 'withKey' && <Legend layout='vertical' verticalAlign='middle' align='right' />}
          <Pie
            data={data}
            cx='50%'
            cy='50%'
            startAngle={-270} // starts at angle 90
            label={(props) => renderCustomizedLabel(props, type)}
            labelLine={type === 'withLabel'}
            outerRadius={120}
            fill='#8884d8'
            dataKey='value'>
            {data.map((entry, index) => {
              return <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />;
            })}
          </Pie>
        </RechartsPieChart>
      </ResponsiveContainer>
    </div>
  );
}

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042']; // todo: from theme

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = (
  { cx, cy, midAngle, innerRadius, outerRadius, percent, index, name, value, ...restProps }: any,
  type: PieChartProps['type']
) => {
  let radiusExploder = 1.35;
  radiusExploder = type === 'withKey' ? 0.5 : 1.35;
  const radius = innerRadius + (outerRadius - innerRadius) * radiusExploder;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  if (type === 'withLabel') {
    // no key, labels digram with name/value
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
  }

  if (type === 'withKey') {
    // has key, shows percentages in pie slices
    return (
      <text x={x} y={y} fill='white' textAnchor={x > cx ? 'start' : 'end'} dominantBaseline='central'>
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  }
};
