import React from 'react';

interface ChartColumn {
  label: string;
  id: string;
  type?: string; // TODO: Type unneeded from backend
}

export interface ChartColumns extends Array<ChartColumn> {}

export type PieChartCell = {
  name: string;
  value: number;
};

export type PieChartData = Array<PieChartCell>;

export interface PieChartProps {
  data: PieChartData;
  title: string;
  type?: 'withLabel' | 'withLegend';
}

// copied from recharts types
export interface PieRenderLabelProps {
  cx?: number | string;
  cy?: number | string;
  startAngle?: number;
  endAngle?: number;
  paddingAngle?: number;
  innerRadius?: number | string;
  outerRadius?: number | string;
  cornerRadius?: number | string;
  index?: number;
}

// TODO: Error providing unknown property key types
// export interface BiaxialBarLineChartCell {
//   name: string;
//   [key : string]: number;
//   [key2 : string]: number;
// }

export type BiaxialBarLineChartCell = any;

export interface BiaxialBarLineChartData extends Array<BiaxialBarLineChartCell> {}

export interface BiaxialBarLineChartProps {
  title: string;
  data: BiaxialBarLineChartData;
  columns: ChartColumns;
}

export interface StoryWrapperProps {
  children: React.ReactNode;
}
