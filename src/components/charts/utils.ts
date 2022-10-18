// TODO: Types
// TODO: Make more reusable so we can pass arbitrary number of columns/reuse for other charts
export const convertResponseData = (column1Id: string, column2Id: string, column3Id: string, rows: Array<any>): any => {
  let convertedArray = [] as any;

  if (!rows) console.error('no rows supplied');

  if (rows) {
    rows.forEach((row) => {
      convertedArray.push({ [column1Id]: row[0], [column2Id]: row[1], [column3Id]: row[2] });
    });
  }
  return convertedArray;
};

export const convertPieResponseData = (valueColumnId: string, rows: Array<any>) => {
  // recharts pie charts expects data as {name: '', [valKey]: value}
  let convertedArray = [];

  if (!rows) console.error('no rows supplied');

  if (rows) {
    rows.forEach((row) => {
      convertedArray.push({ name: row[0], value: row[1] });
    });
  }
  return rows;
};
