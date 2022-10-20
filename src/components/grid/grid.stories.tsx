import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Grid } from './grid';
import { StoryWrapper } from '../../stories/story-wrapper';

// TODO: Test responsiveness
// TODO: Best way to test switching cols/gap? Another instance or an action?
// TODO: Best way to have dummy components like a 20rem height div with bg color

const MockChildComp = (props: any) => {
  const { heightClass, text } = props;
  return (
    <div className={`${heightClass} bg-secondary-400 flex justify-center items-center`}>
      {props.text && <span className='text-xl text-body-inverse'>{text}</span>}
    </div>
  );
};

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Grid',
  component: Grid,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    // backgroundColor: { control: 'color' },
  },
  decorators: [
    (Story) => (
      <StoryWrapper fullHeight>
        <Story />
      </StoryWrapper>
    ),
  ],
} as ComponentMeta<typeof Grid>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Grid> = (args) => <Grid {...args} />;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  cols: '3',
  gap: '4',
  children: (
    <>
      {Array.from(Array(10).keys()).map((item) => (
        <MockChildComp text={item.toString()} heightClass='min-h-[20rem]' />
      ))}
    </>
  ),
};

export const Spans = Template.bind({});

Spans.args = {
  rows: '3',
  gap: '4',
  children: (
    <>
      <div className='row-span-3'>
        <MockChildComp text='1' heightClass='h-full' />
      </div>
      <div className='col-span-2'>
        <MockChildComp text='2' heightClass='h-full' />
      </div>
      <div className='row-span-2 col-span-2'>
        <MockChildComp text='3' heightClass='h-full' />
      </div>
    </>
  ),
};
