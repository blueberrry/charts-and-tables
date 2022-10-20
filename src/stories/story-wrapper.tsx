import React, { useEffect } from 'react';

import { baseTheme } from '../themes/base';
import { darkTheme } from '../themes/dark';
import { applyTheme } from '../themes/utils';
import { StoryWrapperProps } from '../types/types';

// Applies theme on mount just like app.tsx
// Adds default wrapper styles (full width/centered)

// TODO: Delete default storybook stories in this folder and keep just this file

// TODO: Might be better to store in .storybook folder or rename to storycomponents

export function StoryWrapper({ fullHeight = false, children }: StoryWrapperProps) {
  useEffect(() => {
    applyTheme(baseTheme);
  }, []);

  if (fullHeight) return <div className='w-full h-[100vh] justify-center content-center'>{children}</div>;

  return <div className='w-full justify-center content-center'>{children}</div>;
}
