import stopwatch from './stopwatch';
import gameEnd from './game-over';
import clickSound from '../../assets/sounds/click.mp3';
import bombSound from '../../assets/sounds/mine.mp3';

let myTimer = null;

function createArr(field, rowNon, columnNon, fieldMine = 10) {
  const pushMine = [];
  for (let i = 0; i < fieldMine; i += 1) {
    const numRandom = Math.floor(Math.random() * (field.length ** 2));
    if (pushMine.indexOf(numRandom) === -1 && numRandom !== Number(`${rowNon}${columnNon}`)) {
      pushMine.push(numRandom);
    } else {
      i -= 1;
    }
  }
  let numCell = 0;
  for (let i = 0; i < field.length; i += 1) {
    for (let j = 0; j < field.length; j += 1) {
      if (pushMine.indexOf(numCell) >= 0) {
        field[i][j].setMine();
      }
      numCell += 1;
    }
  }
  return field;
}

function neighboringCells(field) {
  for (let i = 0; i < field.length; i += 1) {
    for (let j = 0; j < field.length; j += 1) {
      if (field[i][j + 1] !== undefined) {
        field[i][j].setCellRight(field[i][j + 1]);
        if (field[i][j + 1].isMine() && !field[i][j].isMine()) {
          field[i][j].addCountMineAround();
        }
      }
      if (field[i][j - 1] !== undefined) {
        field[i][j].setCellLeft(field[i][j - 1]);
        if (field[i][j - 1].isMine() && !field[i][j].isMine()) {
          field[i][j].addCountMineAround();
        }
      }
      if (i < field.length - 1) {
        if (field[i + 1][j] !== undefined) {
          field[i][j].setCellDown(field[i + 1][j]);
          if (!field[i][j].isMine() && field[i + 1][j].isMine()) {
            field[i][j].addCountMineAround();
          }
        }
        if (field[i + 1][j + 1] !== undefined) {
          field[i][j].setCellDownRight(field[i + 1][j + 1]);
          if (!field[i][j].isMine() && field[i + 1][j + 1].isMine()) {
            field[i][j].addCountMineAround();
          }
        }
        if (field[i + 1][j - 1] !== undefined) {
          field[i][j].setCellDownLeft(field[i + 1][j - 1]);
          if (!field[i][j].isMine() && field[i + 1][j - 1].isMine()) {
            field[i][j].addCountMineAround();
          }
        }
      }
      if (i !== 0) {
        if (field[i - 1][j + 1] !== undefined) {
          field[i][j].setCellUpRight(field[i - 1][j + 1]);
          if (!field[i][j].isMine() && field[i - 1][j + 1].isMine()) {
            field[i][j].addCountMineAround();
          }
        }
        if (field[i - 1][j - 1] !== undefined) {
          field[i][j].setCellUpLeft(field[i - 1][j - 1]);
          if (!field[i][j].isMine() && field[i - 1][j - 1].isMine()) {
            field[i][j].addCountMineAround();
          }
        }
        if (field[i - 1][j] !== undefined) {
          field[i][j].setCellUp(field[i - 1][j]);
          if (field[i - 1][j].isMine() && !field[i][j].isMine()) {
            field[i][j].addCountMineAround();
          }
        }
      }
    }
  }
  return field;
}

function soundOpen() {
  const soundBombs = new Audio(clickSound);
  if (!document.querySelector('.mute-button').classList.contains('mute')) {
    soundBombs.play();
  }
}
function soundBomb() {
  const soundBombs = new Audio(bombSound);
  if (!document.querySelector('.mute-button').classList.contains('mute')) {
    soundBombs.play();
  }
}

function isVictory(field, countMines) {
  const result = true;
  let countOpenCell = 0;
  const cell = document.querySelectorAll('.cell');
  cell.forEach((e) => {
    const currentCell = field[e.getAttribute('row')][e.getAttribute('column')];
    if (currentCell.state === true) {
      countOpenCell += 1;
    }
  });
  if ((field.length * field.length) - countMines === countOpenCell) {
    gameEnd(field, result);
    clearInterval(myTimer);
  }
}

function startGame(field, countMines = 10) {
  const cell = document.querySelectorAll('.cell');
  let firstClick = true;
  let countClick = 0;
  let countFlagUse = 0;
  clearInterval(myTimer);
  document.querySelector('.timer').innerHTML = '00:00.00';

  if (field.length === 15) {
    document.querySelector('.field').style.gridTemplateColumns = `repeat(${field.length}, 24px)`;
    cell.forEach((elem) => {
      // eslint-disable-next-line no-param-reassign
      elem.style.height = '24px';
    });
  } else if (field.length === 25) {
    document.querySelector('.field').style.gridTemplateColumns = `repeat(${field.length}, 15px)`;
    cell.forEach((elem) => {
      // eslint-disable-next-line no-param-reassign
      elem.style.height = '15px';
    });
  } else {
    document.querySelector('.field').style.gridTemplateColumns = `repeat(${field.length}, 30px)`;
  }

  cell.forEach((e) => {
    e.addEventListener('click', (element) => {
      if (firstClick) {
        neighboringCells(createArr(field, element.target.getAttribute('row'), element.target.getAttribute('column'), countMines));
        firstClick = false;
        myTimer = stopwatch();
      }
      const currentCell = field[element.target.getAttribute('row')][element.target.getAttribute('column')];
      if (currentCell.isMine() && currentCell.isFlag === false) {
        currentCell.boom();
        gameEnd(field);
        clearInterval(myTimer);
        soundBomb();
      } else if (currentCell.state === false && currentCell.isFlag === false) {
        currentCell.openCell();
        countClick += 1;
        document.querySelector('.count-click-live').innerHTML = countClick;
        soundOpen();
        isVictory(field, countMines);
      }
    });
    e.addEventListener('contextmenu', (cli) => {
      cli.preventDefault();
      const cellFlag = field[cli.target.getAttribute('row')][cli.target.getAttribute('column')];
      cellFlag.flag();
      if (cellFlag.isFlag === true) {
        countFlagUse += 1;
        document.querySelector('.count-flag-use').innerHTML = countFlagUse;
      } else {
        countFlagUse -= 1;
        document.querySelector('.count-flag-use').innerHTML = countFlagUse;
      }
    });
  });
}

export default startGame;
