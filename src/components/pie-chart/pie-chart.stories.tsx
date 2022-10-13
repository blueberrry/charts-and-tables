import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { PieChart } from './pie-chart';

const MOCK_DATA = [
  { name: 'Oct 1', value: 7 },
  { name: 'Oct 2', value: 7 },
  { name: 'Oct 3', value: 8 },
  { name: 'Oct 4', value: 7 },
  { name: 'Oct 5', value: 10 },
  { name: 'Oct 6', value: 6 },
  { name: 'Oct 7', value: 5 },
];

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Charts/PieChart',
  component: PieChart,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    // backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof PieChart>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof PieChart> = (args) => <PieChart {...args} />;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  title: 'Operation Status',
  data: MOCK_DATA,
  // primary: true,
  // label: 'Button',
};

// export const Secondary = Template.bind({});
// Secondary.args = {
//   // label: 'Button',
// };
