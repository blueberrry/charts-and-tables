import React, { FC, ReactElement, useMemo } from 'react';
import ReactTableUI from 'react-table-ui';
import type { DataType, TableInstance } from 'react-table-ui';

export function Table({ title, columns, rows }: any): ReactElement {
  // TODO: Usememo/types

  // const data: User[] = [
  //   { name: 'Abc Xyx', age: 20 },
  //   { name: 'Def Uvw', age: 25 },
  //   { name: 'Ghi Rst', age: 23 },
  //   { name: 'Jklm Nopq', age: 30 },
  // ];

  return <ReactTableUI data={rows} title={title} />;
}
