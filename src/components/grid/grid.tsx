import React, { ReactElement, ReactNode } from 'react';

interface GridProps {
  cols: string;
  gap?: string;
  rows?: null | string;
  extraClasses?: string;
  children: ReactNode;
}

export function Grid({ cols = '2', gap = '0', rows = null, extraClasses = '', children }: GridProps): ReactElement {
  if (rows) {
    return (
      <div className={`w-full h-[100%] grid grid-rows-${rows} grid-flow-col gap-${gap} ${extraClasses}`}>
        {children}
      </div>
    );
  }

  if (!cols) {
    console.warn('No columns defined, returning child components');
    return <div>{children}</div>;
  }

  // applies cols at min 640px breakpoint
  return <div className={`w-full grid sm:grid-cols-${cols} gap-${gap}`}>{children}</div>;
}
