// import styles
import '../css/style.scss';
// import modules
import createElemets from './modules/append-elements';
import createWorld from './modules/create-world';
import startGame from './modules/start-game';
import changeTheme from './modules/change-theme';

document.addEventListener('DOMContentLoaded', () => {
  createElemets();
  startGame(createWorld(10));
  document.querySelector('.start-game').addEventListener('click', () => {
    document.querySelector('.field').innerHTML = '';
    document.querySelector('.over-window').style.display = 'none';
    document.querySelector('.count-click-live').innerHTML = 0;
    const fieldSize = document.querySelector('.field-size').value;
    const countMines = document.querySelector('.input-range').value;
    startGame(createWorld(fieldSize), countMines);
  });
  changeTheme();
});
