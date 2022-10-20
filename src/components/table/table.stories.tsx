import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Table } from './table';
import { StoryWrapper } from '../../stories/story-wrapper';

const MOCK_DATA = {
  cols: [
    {
      label: 'Pilot Name',
      id: 'name',
      type: 'string',
    },
    {
      label: 'Hours Flown',
      id: 'hours',
      type: 'number',
    },
  ],
  // ! response rows is currently multidim array for charts, use util function to convert
  rows: [
    { name: 'Stuart Powell', value: 4.75 },
    { name: 'Sean Roughton', value: 5.5 },
    { name: 'Jan Domoradzki', value: 10 },
    { name: 'John Smith', value: 2 },
  ],
};

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Table',
  component: Table,
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
} as ComponentMeta<typeof Table>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Table> = (args) => <Table {...args} />;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  title: 'Pilot Activity - Last 30 Days',
  columns: MOCK_DATA['cols'],
  rows: MOCK_DATA['rows'],
};
