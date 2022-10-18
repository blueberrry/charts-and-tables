import React, { useEffect } from 'react';

import { baseTheme } from '../themes/base';
import { darkTheme } from '../themes/dark';
import { applyTheme } from '../themes/utils';
import { StoryWrapperProps } from '../types/types';

// Applies theme on mount just like app.tsx
// Adds default wrapper styles (full width/centered)

// TODO: Delete default storybook stories in this folder and keep just this file

export function StoryWrapper({ children }: StoryWrapperProps) {
  useEffect(() => {
    applyTheme(baseTheme);
  }, []);

  return <div className='w-full justify-center align-center'>{children}</div>;
}
