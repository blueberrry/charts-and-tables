import React from 'react';
import { Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ComposedChart, Bar, ResponsiveContainer } from 'recharts';
import { BiaxialBarLineChartProps } from '../../../types/types';

export function BiaxialBarLineChart({ title, data, columns }: BiaxialBarLineChartProps) {
  // TODO: Make wrapper div reusable ChartWrapper comp
  // TODO: Colours from theme

  const xAxis = columns[0];
  const barYAxis = columns[1];
  const lineYAxis = columns[2];

  const renderLegendText = (value: string) => {
    // default recharts computes legend text as id
    // looks up id in column data and returns label text instead
    if (value === barYAxis['id']) return <span>{barYAxis['label']}</span>;
    if (value === lineYAxis['id']) return <span>{lineYAxis['label']}</span>;
    // else just return id
    return <span>{value}</span>;
  };

  return (
    <div className='max-w-[60rem] justify-center align-center'>
      <h2 className='text-body-400'>{title}</h2>
      <ResponsiveContainer width='100%' height={400}>
        <ComposedChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}>
          <CartesianGrid stroke='#f5f5f5' />
          <XAxis dataKey={xAxis['id']} />
          <YAxis yAxisId='left' />
          <YAxis yAxisId='right' orientation='right' />
          <Tooltip />
          <Legend formatter={renderLegendText} />
          <Bar dataKey={barYAxis['id']} barSize={20} fill='#413ea0' yAxisId='left' />
          <Line dataKey={lineYAxis['id']} type='monotone' stroke='#ff7300' yAxisId='right' />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
}
