import mine from '../../assets/svg/naval-mine.svg';
import flag from '../../assets/svg/flag-filled.svg';

class Cell {
  constructor(row, column) {
    this.state = false;
    this.mine = null;
    this.isFlag = false;
    this.countMineAround = 0;
    this.row = row;
    this.column = column;
    this.cell = document.createElement('button');
    this.cellUp = null;
    this.cellUpRight = null;
    this.cellRight = null;
    this.cellDownRight = null;
    this.cellDown = null;
    this.cellDownLeft = null;
    this.cellLeft = null;
    this.cellUpLeft = null;
  }

  render() {
    this.cell.setAttribute('row', `${this.row}`);
    this.cell.setAttribute('column', `${this.column}`);
    this.cell.classList.add('cell');
    return (this.cell);
  }

  flag() {
    if (!this.state && !this.isFlag) {
      this.isFlag = true;
      this.cell.style.backgroundImage = `url(${flag})`;
    } else {
      this.isFlag = false;
      this.state = false;
      this.cell.style.backgroundImage = 'none';
    }
  }

  boom() {
    if (this.mine && !this.isFlag) {
      this.state = true;
      this.cell.innerHTML = `<img class="mine" src="${mine}"/>`;
      this.cell.style.backgroundColor = 'red';
    }
  }

  openCell() {
    this.state = true;
    if (this.countMineAround === 0 && !this.isFlag) {
      this.cell.innerText = '';
      this.cell.style.backgroundColor = '#e5c39f';
      if (this.cellUp !== null && !this.cellUp.state) {
        this.cellUp.openCell();
      }
      if (this.cellUpLeft !== null && !this.cellUpLeft.state) {
        this.cellUpLeft.openCell();
      }
      if (this.cellUpRight !== null && !this.cellUpRight.state) {
        this.cellUpRight.openCell();
      }
      if (this.cellRight !== null && !this.cellRight.state) {
        this.cellRight.openCell();
      }
      if (this.cellLeft !== null && !this.cellLeft.state) {
        this.cellLeft.openCell();
      }
      if (this.cellDown !== null && !this.cellDown.state) {
        this.cellDown.openCell();
      }
      if (this.cellDownLeft !== null && !this.cellDownLeft.state) {
        this.cellDownLeft.openCell();
      }
      if (this.cellDownRight !== null && !this.cellDownRight.state) {
        this.cellDownRight.openCell();
      }
    } else if (this.countMineAround === 1 && !this.isFlag) {
      this.cell.innerText = `${this.countMineAround}`;
      this.cell.style.color = '#2f7ccc';
      this.cell.style.backgroundColor = '#e5c39f';
    } else if (this.countMineAround === 2 && !this.isFlag) {
      this.cell.innerText = `${this.countMineAround}`;
      this.cell.style.color = '#ff0000';
      this.cell.style.backgroundColor = '#e5c39f';
    } else if (this.countMineAround === 3 && !this.isFlag) {
      this.cell.innerText = `${this.countMineAround}`;
      this.cell.style.color = '#0aff00';
      this.cell.style.backgroundColor = '#e5c39f';
    } else if (this.countMineAround === 4 && !this.isFlag) {
      this.cell.innerText = `${this.countMineAround}`;
      this.cell.style.color = '#00fff9';
      this.cell.style.backgroundColor = '#e5c39f';
    } else if (this.countMineAround === 5 && !this.isFlag) {
      this.cell.innerText = `${this.countMineAround}`;
      this.cell.style.color = '#ffdd00';
      this.cell.style.backgroundColor = '#e5c39f';
    } else if (this.countMineAround === 6 && !this.isFlag) {
      this.cell.innerText = `${this.countMineAround}`;
      this.cell.style.color = '#ff00df';
      this.cell.style.backgroundColor = '#e5c39f';
    } else if (this.countMineAround === 7 && !this.isFlag) {
      this.cell.innerText = `${this.countMineAround}`;
      this.cell.style.color = '#00c7ff';
      this.cell.style.backgroundColor = '#e5c39f';
    } else if (this.countMineAround === 8 && !this.isFlag) {
      this.cell.innerText = `${this.countMineAround}`;
      this.cell.style.color = '#9aff00';
      this.cell.style.backgroundColor = '#e5c39f';
    }
  }

  setCellRight(cell) {
    this.cellRight = cell;
  }

  setCellUp(cell) {
    this.cellUp = cell;
  }

  setCellDownRight(cell) {
    this.cellDownRight = cell;
  }

  setCellDown(cell) {
    this.cellDown = cell;
  }

  setCellUpLeft(cell) {
    this.cellUpLeft = cell;
  }

  setCellUpRight(cell) {
    this.cellUpRight = cell;
  }

  setCellDownLeft(cell) {
    this.cellDownLeft = cell;
  }

  setCellLeft(cell) {
    this.cellLeft = cell;
  }

  setMine() {
    this.mine = true;
  }

  isMine() {
    return this.mine;
  }

  addCountMineAround() {
    this.countMineAround += 1;
  }
}

export default Cell;
