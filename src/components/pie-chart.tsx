import React from 'react';
import Chart, { ReactGoogleChartProps } from 'react-google-charts';

interface PieChartProps {
  data: ReactGoogleChartProps['data'];
}

export function PieChart({
  data = [
    ['Task', 'Hours per Day'],
    ['Work', 11],
    ['Eat', 2],
    ['Commute', 2],
    ['Watch TV', 2],
    ['Sleep', 7],
  ],
}) {
  // const pieOptions = {
  //   title: '',
  //   pieHole: 0.6,
  //   slices: [
  //     {
  //       color: '#2BB673',
  //     },
  //     {
  //       color: '#d91e48',
  //     },
  //     {
  //       color: '#007fad',
  //     },
  //     {
  //       color: '#e9a227',
  //     },
  //   ],
  //   legend: {
  //     position: 'bottom',
  //     alignment: 'center',
  //     textStyle: {
  //       color: '233238',
  //       fontSize: 14,
  //     },
  //   },
  //   tooltip: {
  //     showColorCode: true,
  //   },
  //   chartArea: {
  //     left: 0,
  //     top: 0,
  //     width: '100%',
  //     height: '80%',
  //   },
  //   fontName: 'Roboto',
  // };

  const options = {
    title: 'My Daily Activities',
  };

  return <Chart chartType='PieChart' data={data} options={options} />;
}
