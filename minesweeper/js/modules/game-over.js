import gameOverSound from '../../assets/sounds/game-over.mp3';
import gameWinSound from '../../assets/sounds/game-win.mp3';
import saveLastGame from './save-last-game';

function soundGameOver() {
  const gameOver = new Audio(gameOverSound);
  if (!document.querySelector('.mute-button').classList.contains('mute')) {
    gameOver.play();
  }
}
function soundGameWin() {
  const gameOver = new Audio(gameWinSound);
  if (!document.querySelector('.mute-button').classList.contains('mute')) {
    gameOver.play();
  }
}

function openOverWindow() {
  const overWindow = document.querySelector('.over-window');
  const timeGame = document.querySelector('.timer');
  const time = document.querySelector('.time-game');
  const result = document.querySelector('.result-game');
  const click = document.querySelector('.count-click');
  const clickGame = document.querySelector('.count-click-live');
  result.innerHTML = 'Game Over';
  click.innerHTML = clickGame.innerHTML;
  time.innerHTML = timeGame.innerHTML;
  overWindow.style.display = 'flex';
  soundGameOver();
  saveLastGame(click.innerHTML, time.innerHTML, result.innerHTML);
}

function openWinWindow() {
  const overWindow = document.querySelector('.over-window');
  const timeGame = document.querySelector('.timer');
  const time = document.querySelector('.time-game');
  const result = document.querySelector('.result-game');
  const click = document.querySelector('.count-click');
  const clickGame = document.querySelector('.count-click-live');
  result.innerHTML = 'You won';
  click.innerHTML = clickGame.innerHTML;
  time.innerHTML = timeGame.innerHTML;
  overWindow.style.display = 'flex';
  soundGameWin();
  saveLastGame(click.innerHTML, time.innerHTML, result.innerHTML);
}

function gameEnd(field, result = false) {
  const cell = document.querySelectorAll('.cell');
  cell.forEach((e) => {
    e.disabled = true;
  });
  setTimeout(() => {
    if (result === true) {
      openWinWindow();
    } else {
      openOverWindow();
    }
    cell.forEach((e) => {
      const currentCell = field[e.getAttribute('row')][e.getAttribute('column')];
      e.removeEventListener('click', () => {});
      if (currentCell.isMine()) {
        currentCell.boom();
      }
    });
  }, 500);
}

export default gameEnd;
