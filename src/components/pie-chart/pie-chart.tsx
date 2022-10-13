import React from 'react';
import Chart, { GoogleChartOptions, ReactGoogleChartProps } from 'react-google-charts';

/**
 * * Pie chart (Presentational component)
 *   Data shape is a two dimensional array with
 *   the first item representing the column data and subsquent
 *   items representing the rows.
 *   See https://www.react-google-charts.com/examples/pie-chart
 */
interface PieChartProps {
  data: ReactGoogleChartProps['data'];
  title?: string;
  extraOptions?: GoogleChartOptions; //TODO: Filter pie chart type options only
}

export function PieChart({ data, title, extraOptions }: PieChartProps) {
  // TODO: Consider options as props
  const options = {
    title,
    // chartArea: { width: '100%', height: '100%' },
    legend: { position: 'right', alignment: 'center' },
    ...extraOptions,
  };

  return <Chart chartType='PieChart' data={data} options={options} />;
}
