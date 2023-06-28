const container = document.createElement('section');
const field = document.createElement('div');
const timer = document.createElement('div');
const select = document.createElement('select');
const inputRange = document.createElement('input');
const optionsAll = document.createElement('div');
const inputOutputValue = document.createElement('output');
const blockInputRange = document.createElement('div');
const startButton = document.createElement('button');
const listGameButton = document.createElement('button');
const gameOverModal = document.createElement('div');
const countClickGame = document.createElement('h2');
const countFlagUse = document.createElement('h2');
const listLastsGame = document.createElement('div');
const themeAndMute = document.createElement('div');

function createContainer() {
  container.classList.add('container');
  document.body.append(container);
}
function createField() {
  field.classList.add('field');
  container.append(field);
}
function createTimer() {
  timer.classList.add('timer');
  timer.innerText = '00:00.00';
  optionsAll.append(timer);
  countClickGame.classList.add('count-click-live');
  countClickGame.innerText = '0';
  optionsAll.append(countClickGame);
  countFlagUse.classList.add('count-flag-use');
  countFlagUse.innerText = '0';
  optionsAll.append(countFlagUse);
}
function createSelect() {
  const options10 = document.createElement('option');
  const options15 = document.createElement('option');
  const options25 = document.createElement('option');
  select.classList.add('field-size');
  options10.innerText = 'Easy(10x10)';
  options10.value = '10';
  options15.innerText = 'Medium(15x15)';
  options15.value = '15';
  options25.innerText = 'Hard(25x25)';
  options25.value = '25';
  optionsAll.append(select);
  select.append(options10);
  select.append(options15);
  select.append(options25);
}
function createRange() {
  inputRange.classList.add('input-range');
  inputRange.type = 'range';
  inputRange.min = '10';
  inputRange.max = '99';
  inputRange.value = 10;
  blockInputRange.classList.add('block-input-range');
  optionsAll.append(blockInputRange);
  blockInputRange.append(inputRange);
  inputOutputValue.id = 'value';
  blockInputRange.append(inputOutputValue);
  inputOutputValue.textContent = inputRange.value;
  inputRange.addEventListener('input', (event) => {
    inputOutputValue.textContent = event.target.value;
  });
}
function createStartButton() {
  startButton.classList.add('start-game');
  startButton.innerText = 'New game';
  optionsAll.append(startButton);
}
function createOptoonsAll() {
  optionsAll.classList.add('options-all');
  container.append(optionsAll);
}
function createGameOverModal() {
  const time = document.createElement('h2');
  const resultGame = document.createElement('h2');
  const countClick = document.createElement('h2');
  time.classList.add('time-game');
  resultGame.classList.add('result-game');
  countClick.classList.add('count-click');
  gameOverModal.classList.add('over-window');
  container.append(gameOverModal);
  gameOverModal.append(resultGame);
  gameOverModal.append(time);
  gameOverModal.append(countClick);
}
function createModalList() {
  listGameButton.classList.add('list-button');
  listGameButton.innerText = 'Lasts game';
  optionsAll.append(listGameButton);
  listLastsGame.classList.add('modal-lasts-list');
  container.append(listLastsGame);
  const listGame = document.createElement('ul');
  listGame.classList.add('list-game');
  listLastsGame.append(listGame);
  document.addEventListener('click', (element) => {
    if (element.target.classList.value === 'list-button' && listLastsGame.style.display === 'none') {
      listLastsGame.style.display = 'block';
      const lastGameArr = JSON.parse(localStorage.getItem('storyGame'));
      lastGameArr.forEach((elem) => {
        const oneGame = `<li class="game"> Click: ${elem.countClick}, Time: ${elem.stopwatch}, Result: ${elem.results} </li>`;
        listGame.innerHTML += oneGame;
      });
    } else if (element.target.classList.value !== 'modal-lasts-list') {
      listLastsGame.style.display = 'none';
      listGame.innerHTML = '';
    }
  });
}
function createThemeAndMute() {
  themeAndMute.classList.add('theme-mute');
  optionsAll.append(themeAndMute);
  const themeButton = document.createElement('button');
  const muteButton = document.createElement('button');
  themeButton.classList.add('theme-button');
  themeButton.innerText = 'Dark';
  muteButton.classList.add('mute-button');
  muteButton.innerText = 'Mute';
  themeAndMute.append(muteButton);
  themeAndMute.append(themeButton);
  muteButton.addEventListener('click', () => {
    muteButton.classList.toggle('mute');
  });
}

function createElemets() {
  createContainer();
  createOptoonsAll();
  createTimer();
  createSelect();
  createRange();
  createStartButton();
  createThemeAndMute();
  createModalList();
  createField();
  createGameOverModal();
}

export default createElemets;
