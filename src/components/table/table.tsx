import React, { FC, ReactElement, useMemo } from 'react';
import ReactTableUI from 'react-table-ui';

// TODO: Prop types
export function Table({ title, columns, rows }: any): ReactElement {
  return <ReactTableUI data={rows} title={title} />;
}
