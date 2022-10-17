export type PieChartCell = {
  name: string;
  value: number;
};

export type PieChartData = Array<PieChartCell>;

export interface PieChartProps {
  data: PieChartData;
  title: string;
  type?: 'withLabel' | 'withKey';
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
