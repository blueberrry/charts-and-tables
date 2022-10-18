import React, { useEffect, useRef } from 'react';
import { PieChart as RechartsPieChart, Pie, Cell, ResponsiveContainer, Legend } from 'recharts';
import { PieChartProps } from '../../../types/types';
import './pie-chart.css';

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

// TODO: Add font to project

// TODO: Storybook should have default container component

// TODO: Resolve tailwind config so we can access it in JavaScript - https://tailwindcss.com/docs/configuration#referencing-in-java-script

// width: '100%', height: '100vh'
export function PieChart({ data, title, type = 'withLegend' }: PieChartProps) {
  return (
    <div className='max-w-[60rem] justify-center align-center'>
      <h2 className='text-body-400'>{title}</h2>
      <ResponsiveContainer width='100%' height={400}>
        <RechartsPieChart>
          {type === 'withLegend' && <Legend layout='vertical' verticalAlign='middle' align='right' />}
          <Pie
            data={data}
            startAngle={-270} // starts at angle 90
            label={(props) => renderCustomizedLabel(props, type)}
            labelLine={type === 'withLabel'}
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
  radiusExploder = type === 'withLegend' ? 0.5 : 1.2;
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

  if (type === 'withLegend') {
    // has key, shows percentages in pie slices
    return (
      <text
        x={x}
        y={y}
        fill='white'
        textAnchor={x > cx ? 'start' : 'end'}
        dominantBaseline='central'
        className='text-xs md:text-md'>
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  }
};
