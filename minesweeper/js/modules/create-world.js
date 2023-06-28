import Cell from './class-cell';

function createWorld(size) {
  const field = document.querySelector('.field');
  const fieldCellArr = [];
  for (let i = 0; i < size; i += 1) {
    fieldCellArr.push([]);
    for (let j = 0; j < size; j += 1) {
      fieldCellArr[i][j] = new Cell(i, j);
      field.append(fieldCellArr[i][j].render());
    }
  }
  return fieldCellArr;
}

export default createWorld;
