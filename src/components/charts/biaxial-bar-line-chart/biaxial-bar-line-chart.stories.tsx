import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { BiaxialBarLineChart } from './biaxial-bar-line-chart';
import { StoryWrapper } from '../../../stories/story-wrapper';

const MOCK_COLUMNS = [
  {
    label: 'Date',
    id: 'date',
    type: 'string',
  },
  {
    label: 'Num Operations',
    id: 'numops',
    type: 'number',
  },
  {
    label: 'Num Flights',
    id: 'numflights',
    type: 'number',
  },
];

const MOCK_DATA = [
  {
    date: 'Oct 1',
    numops: 0,
    numflights: 0,
  },
  {
    date: 'Oct 2',
    numops: 1,
    numflights: 4,
  },
  {
    date: 'Oct 3',
    numops: 2,
    numflights: 10,
  },
  {
    date: 'Oct 4',
    numops: 1,
    numflights: 7,
  },
  {
    date: 'Oct 5',
    numops: 0,
    numflights: 0,
  },
  {
    date: 'Oct 6',
    numops: 5,
    numflights: 14,
  },
];

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Charts/BiaxialBarLineChart',
  component: BiaxialBarLineChart,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    // backgroundColor: { control: 'color' },
  },
  decorators: [
    (Story) => (
      <StoryWrapper>
        <Story />
      </StoryWrapper>
    ),
  ],
} as ComponentMeta<typeof BiaxialBarLineChart>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof BiaxialBarLineChart> = (args) => <BiaxialBarLineChart {...args} />;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  title: 'Operation and Flight Hours - Last 14 days',
  data: MOCK_DATA,
  columns: MOCK_COLUMNS,
};
