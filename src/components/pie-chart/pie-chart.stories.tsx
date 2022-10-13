import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { PieChart } from './pie-chart';

const MOCK_DATA = [
  [
    { label: 'Day', id: 'status', type: 'string' },
    { label: 'Num Operations', id: 'count', type: 'number' },
  ],
  ['Oct 1', 7],
  ['Oct 2', 7],
  ['Oct 3', 8],
  ['Oct 4', 7],
  ['Oct 5', 10],
  ['Oct 6', 5],
  ['Oct 7', 5],
  ['Oct 8', 11],
  ['Oct 9', 6],
  ['Oct 10', 15],
  ['Oct 11', 14],
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

export const Secondary = Template.bind({});
Secondary.args = {
  // label: 'Button',
};
