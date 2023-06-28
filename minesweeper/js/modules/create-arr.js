function createArr(fieldSize, fieldMine) {
  const pushMine = [];
  for (let i = 0; i < fieldMine; i += 1) {
    const numRandom = Math.floor(Math.random() * (fieldSize ** 2));
    if (pushMine.indexOf(numRandom) === -1) {
      pushMine.push(numRandom);
    } else {
      i -= 1;
    }
  }
  let numCell = 0;
  const filed = [];
  for (let i = 0; i < fieldSize; i += 1) {
    filed.push([]);
    for (let j = 0; j < fieldSize; j += 1) {
      if (pushMine.indexOf(numCell) >= 0) {
        filed[i].push('x');
        numCell += 1;
      } else {
        filed[i].push(0);
        numCell += 1;
      }
    }
  }
  return filed;
}

function neighboringCells(fieldSize, fieldMine) {
  const field = createArr(fieldSize, fieldMine);
  for (let i = 0; i < field.length; i += 1) {
    for (let j = 0; j < field.length; j += 1) {
      if (field[i][j + 1] === 'x' && field[i][j] !== 'x') {
        field[i][j] += 1;
      }
      if (field[i][j - 1] === 'x' && field[i][j] !== 'x') {
        field[i][j] += 1;
      }
      if (i !== 9) {
        if (field[i + 1][j] === 'x' && field[i][j] !== 'x') {
          field[i][j] += 1;
        }
        if (field[i + 1][j + 1] === 'x' && field[i][j] !== 'x') {
          field[i][j] += 1;
        }
        if (field[i + 1][j - 1] === 'x' && field[i][j] !== 'x') {
          field[i][j] += 1;
        }
      }
      if (i !== 0) {
        if (field[i - 1][j + 1] === 'x' && field[i][j] !== 'x') {
          field[i][j] += 1;
        }
        if (field[i - 1][j - 1] === 'x' && field[i][j] !== 'x') {
          field[i][j] += 1;
        }
        if (field[i - 1][j] === 'x' && field[i][j] !== 'x') {
          field[i][j] += 1;
        }
      }
    }
  }
  return field;
}

export default neighboringCells;
