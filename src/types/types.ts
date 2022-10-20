import React from 'react';

export interface ChartColumn {
  label: string;
  id: string;
  type?: string; // TODO: Type unneeded from backend
}

export type PieChartCell = {
  name: string;
  value: number;
};

export type PieChartData = PieChartCell[];

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
  columns: ChartColumn[];
}

export interface StoryWrapperProps {
  fullHeight?: boolean;
  children: React.ReactNode;
}

export type PilotActivityCol = {
  label: string;
  id: string;
  type?: string;
};

export type PilotActivityRow = [string, number];
export interface PilotActivityResponseData {
  cols: PilotActivityCol[];
  rows: PilotActivityRow[];
}

export interface PilotActivityResponse {
  status: string;
  response: PilotActivityResponseData;
  // other fetch fields
}

// ! not reusable if tied to presentation table comp
// export interface PilotActivityProps extends PilotActivityResponseData {
//   title: string;
// }

/**
 * Ideal
 *
 * export type PilotActivityRow = { name: String, hours: number }
 * export type PilotActivityTable = Array<PilotActivityRow>
 */
