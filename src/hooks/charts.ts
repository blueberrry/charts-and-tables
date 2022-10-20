import { useMemo } from 'react';
import { ChartColumn } from '../types/types';

// TODO: rows arg type and func return type
// TODO: Test
// TODO: Can potentially be separata node package (requires react)/integrate in component (bad for SOC)

// Converts chart data rows from multidim array to array of objects with key/val pairs
export const useChartData = (columns: ChartColumn[], rows: Array<any>): any => {
  // compute if columns/rows changes
  useMemo(() => {
    if (!columns) console.error('no columns supplied');

    let columnIds: string[] = [];

    // creates array of column ids
    columns.forEach((column, index) => {
      columnIds = [...columnIds, column.id];
    });

    if (!rows) console.error('no rows supplied');

    let convertedRows = [] as any;

    if (rows) {
      rows.forEach((row) => {
        let newRowObj = {} as any;
        row.forEach((cellValue: any, i: number) => {
          // iterates through row values and create an object of key(columnId): value(rowValue) pair
          newRowObj = { ...newRowObj, [columnIds[i]]: cellValue };
        });
        // immutably copies row to new array
        convertedRows = [...convertedRows, newRowObj];
      });
    }

    // no adjustment to columns, just returning it for readability
    return { rechartColumns: columns, rechartRows: convertedRows };
  }, [columns, rows]);
};
