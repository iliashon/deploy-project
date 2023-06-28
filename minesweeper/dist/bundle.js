/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/modules/append-elements.js":
/*!***************************************!*\
  !*** ./js/modules/append-elements.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst container = document.createElement('section');\nconst field = document.createElement('div');\nconst timer = document.createElement('div');\nconst select = document.createElement('select');\nconst inputRange = document.createElement('input');\nconst optionsAll = document.createElement('div');\nconst inputOutputValue = document.createElement('output');\nconst blockInputRange = document.createElement('div');\nconst startButton = document.createElement('button');\nconst listGameButton = document.createElement('button');\nconst gameOverModal = document.createElement('div');\nconst countClickGame = document.createElement('h2');\nconst countFlagUse = document.createElement('h2');\nconst listLastsGame = document.createElement('div');\nconst themeAndMute = document.createElement('div');\n\nfunction createContainer() {\n  container.classList.add('container');\n  document.body.append(container);\n}\nfunction createField() {\n  field.classList.add('field');\n  container.append(field);\n}\nfunction createTimer() {\n  timer.classList.add('timer');\n  timer.innerText = '00:00.00';\n  optionsAll.append(timer);\n  countClickGame.classList.add('count-click-live');\n  countClickGame.innerText = '0';\n  optionsAll.append(countClickGame);\n  countFlagUse.classList.add('count-flag-use');\n  countFlagUse.innerText = '0';\n  optionsAll.append(countFlagUse);\n}\nfunction createSelect() {\n  const options10 = document.createElement('option');\n  const options15 = document.createElement('option');\n  const options25 = document.createElement('option');\n  select.classList.add('field-size');\n  options10.innerText = 'Easy(10x10)';\n  options10.value = '10';\n  options15.innerText = 'Medium(15x15)';\n  options15.value = '15';\n  options25.innerText = 'Hard(25x25)';\n  options25.value = '25';\n  optionsAll.append(select);\n  select.append(options10);\n  select.append(options15);\n  select.append(options25);\n}\nfunction createRange() {\n  inputRange.classList.add('input-range');\n  inputRange.type = 'range';\n  inputRange.min = '10';\n  inputRange.max = '99';\n  inputRange.value = 10;\n  blockInputRange.classList.add('block-input-range');\n  optionsAll.append(blockInputRange);\n  blockInputRange.append(inputRange);\n  inputOutputValue.id = 'value';\n  blockInputRange.append(inputOutputValue);\n  inputOutputValue.textContent = inputRange.value;\n  inputRange.addEventListener('input', (event) => {\n    inputOutputValue.textContent = event.target.value;\n  });\n}\nfunction createStartButton() {\n  startButton.classList.add('start-game');\n  startButton.innerText = 'New game';\n  optionsAll.append(startButton);\n}\nfunction createOptoonsAll() {\n  optionsAll.classList.add('options-all');\n  container.append(optionsAll);\n}\nfunction createGameOverModal() {\n  const time = document.createElement('h2');\n  const resultGame = document.createElement('h2');\n  const countClick = document.createElement('h2');\n  time.classList.add('time-game');\n  resultGame.classList.add('result-game');\n  countClick.classList.add('count-click');\n  gameOverModal.classList.add('over-window');\n  container.append(gameOverModal);\n  gameOverModal.append(resultGame);\n  gameOverModal.append(time);\n  gameOverModal.append(countClick);\n}\nfunction createModalList() {\n  listGameButton.classList.add('list-button');\n  listGameButton.innerText = 'Lasts game';\n  optionsAll.append(listGameButton);\n  listLastsGame.classList.add('modal-lasts-list');\n  container.append(listLastsGame);\n  const listGame = document.createElement('ul');\n  listGame.classList.add('list-game');\n  listLastsGame.append(listGame);\n  document.addEventListener('click', (element) => {\n    if (element.target.classList.value === 'list-button' && listLastsGame.style.display === 'none') {\n      listLastsGame.style.display = 'block';\n      const lastGameArr = JSON.parse(localStorage.getItem('storyGame'));\n      lastGameArr.forEach((elem) => {\n        const oneGame = `<li class=\"game\"> Click: ${elem.countClick}, Time: ${elem.stopwatch}, Result: ${elem.results} </li>`;\n        listGame.innerHTML += oneGame;\n      });\n    } else if (element.target.classList.value !== 'modal-lasts-list') {\n      listLastsGame.style.display = 'none';\n      listGame.innerHTML = '';\n    }\n  });\n}\nfunction createThemeAndMute() {\n  themeAndMute.classList.add('theme-mute');\n  optionsAll.append(themeAndMute);\n  const themeButton = document.createElement('button');\n  const muteButton = document.createElement('button');\n  themeButton.classList.add('theme-button');\n  themeButton.innerText = 'Dark';\n  muteButton.classList.add('mute-button');\n  muteButton.innerText = 'Mute';\n  themeAndMute.append(muteButton);\n  themeAndMute.append(themeButton);\n  muteButton.addEventListener('click', () => {\n    muteButton.classList.toggle('mute');\n  });\n}\n\nfunction createElemets() {\n  createContainer();\n  createOptoonsAll();\n  createTimer();\n  createSelect();\n  createRange();\n  createStartButton();\n  createThemeAndMute();\n  createModalList();\n  createField();\n  createGameOverModal();\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createElemets);\n\n\n//# sourceURL=webpack://minesweeper/./js/modules/append-elements.js?");

/***/ }),

/***/ "./js/modules/change-theme.js":
/*!************************************!*\
  !*** ./js/modules/change-theme.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nlet state = false;\n\nfunction changeTheme() {\n  const themeButton = document.querySelector('.theme-button');\n  themeButton.addEventListener('click', () => {\n    if (state === false) {\n      themeButton.style.color = '#3e1f47';\n      themeButton.innerText = 'Light';\n      document.querySelector('.container').style.backgroundColor = '#3e1f47';\n      document.querySelector('.options-all').style.backgroundColor = '#144552';\n      document.querySelector('.options-all').style.boxShadow = 'rgba(20, 69, 82, 0.4) 0px 5px, rgba(20, 69, 82, 0.3) 0px 10px, rgba(20, 69, 82, 0.2) 0px 15px, rgba(20, 69, 82, 0.1) 0px 20px, rgba(20, 69, 82, 0.05) 0px 25px';\n      document.querySelector('.timer').style.color = 'white';\n      document.querySelector('.field-size').style.backgroundColor = '#3e1f47';\n      document.querySelector('.count-flag-use').style.color = 'white';\n      document.querySelector('.count-click-live').style.color = 'white';\n      document.querySelector('#value').style.color = 'white';\n      document.querySelector('.start-game').style.backgroundColor = '#3e1f47';\n      document.querySelector('.list-button').style.backgroundColor = '#3e1f47';\n      document.querySelector('.over-window').style.backgroundColor = '#144552';\n      document.querySelector('.modal-lasts-list').style.backgroundColor = '#144552';\n      document.querySelectorAll('.cell').forEach((elem) => {\n        elem.classList.add('cell-dark');\n      });\n      state = true;\n    } else {\n      themeButton.style.color = '#E7471D';\n      document.querySelector('.container').style.backgroundColor = '#4A752C';\n      document.querySelector('.options-all').style.backgroundColor = '#A2D149';\n      document.querySelector('.options-all').style.boxShadow = 'rgba(162, 209, 73, 0.4) 0px 5px, rgba(162, 209, 73, 0.3) 0px 10px, rgba(162, 209, 73, 0.2) 0px 15px, rgba(162, 209, 73, 0.1) 0px 20px, rgba(162, 209, 73, 0.05) 0px 25px';\n      document.querySelector('.timer').style.color = '#e6461d';\n      document.querySelector('.field-size').style.backgroundColor = '#e6461d';\n      document.querySelector('.count-flag-use').style.color = '#e6461d';\n      document.querySelector('.count-click-live').style.color = '#e6461d';\n      document.querySelector('#value').style.color = '#e6461d';\n      document.querySelector('.start-game').style.backgroundColor = '#e6461d';\n      document.querySelector('.list-button').style.backgroundColor = '#e6461d';\n      document.querySelector('.over-window').style.backgroundColor = '#e6461d';\n      document.querySelector('.modal-lasts-list').style.backgroundColor = '#e6461d';\n      document.querySelectorAll('.cell').forEach((elem) => {\n        elem.classList.remove('cell-dark');\n      });\n      themeButton.innerText = 'Dark';\n      state = false;\n    }\n  });\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (changeTheme);\n\n\n//# sourceURL=webpack://minesweeper/./js/modules/change-theme.js?");

/***/ }),

/***/ "./js/modules/class-cell.js":
/*!**********************************!*\
  !*** ./js/modules/class-cell.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _assets_svg_naval_mine_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../assets/svg/naval-mine.svg */ \"./assets/svg/naval-mine.svg\");\n/* harmony import */ var _assets_svg_flag_filled_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/svg/flag-filled.svg */ \"./assets/svg/flag-filled.svg\");\n\n\n\nclass Cell {\n  constructor(row, column) {\n    this.state = false;\n    this.mine = null;\n    this.isFlag = false;\n    this.countMineAround = 0;\n    this.row = row;\n    this.column = column;\n    this.cell = document.createElement('button');\n    this.cellUp = null;\n    this.cellUpRight = null;\n    this.cellRight = null;\n    this.cellDownRight = null;\n    this.cellDown = null;\n    this.cellDownLeft = null;\n    this.cellLeft = null;\n    this.cellUpLeft = null;\n  }\n\n  render() {\n    this.cell.setAttribute('row', `${this.row}`);\n    this.cell.setAttribute('column', `${this.column}`);\n    this.cell.classList.add('cell');\n    return (this.cell);\n  }\n\n  flag() {\n    if (!this.state && !this.isFlag) {\n      this.isFlag = true;\n      this.cell.style.backgroundImage = `url(${_assets_svg_flag_filled_svg__WEBPACK_IMPORTED_MODULE_1__})`;\n    } else {\n      this.isFlag = false;\n      this.state = false;\n      this.cell.style.backgroundImage = 'none';\n    }\n  }\n\n  boom() {\n    if (this.mine && !this.isFlag) {\n      this.state = true;\n      this.cell.innerHTML = `<img class=\"mine\" src=\"${_assets_svg_naval_mine_svg__WEBPACK_IMPORTED_MODULE_0__}\"/>`;\n      this.cell.style.backgroundColor = 'red';\n    }\n  }\n\n  openCell() {\n    this.state = true;\n    if (this.countMineAround === 0 && !this.isFlag) {\n      this.cell.innerText = '';\n      this.cell.style.backgroundColor = '#e5c39f';\n      if (this.cellUp !== null && !this.cellUp.state) {\n        this.cellUp.openCell();\n      }\n      if (this.cellUpLeft !== null && !this.cellUpLeft.state) {\n        this.cellUpLeft.openCell();\n      }\n      if (this.cellUpRight !== null && !this.cellUpRight.state) {\n        this.cellUpRight.openCell();\n      }\n      if (this.cellRight !== null && !this.cellRight.state) {\n        this.cellRight.openCell();\n      }\n      if (this.cellLeft !== null && !this.cellLeft.state) {\n        this.cellLeft.openCell();\n      }\n      if (this.cellDown !== null && !this.cellDown.state) {\n        this.cellDown.openCell();\n      }\n      if (this.cellDownLeft !== null && !this.cellDownLeft.state) {\n        this.cellDownLeft.openCell();\n      }\n      if (this.cellDownRight !== null && !this.cellDownRight.state) {\n        this.cellDownRight.openCell();\n      }\n    } else if (this.countMineAround === 1 && !this.isFlag) {\n      this.cell.innerText = `${this.countMineAround}`;\n      this.cell.style.color = '#2f7ccc';\n      this.cell.style.backgroundColor = '#e5c39f';\n    } else if (this.countMineAround === 2 && !this.isFlag) {\n      this.cell.innerText = `${this.countMineAround}`;\n      this.cell.style.color = '#ff0000';\n      this.cell.style.backgroundColor = '#e5c39f';\n    } else if (this.countMineAround === 3 && !this.isFlag) {\n      this.cell.innerText = `${this.countMineAround}`;\n      this.cell.style.color = '#0aff00';\n      this.cell.style.backgroundColor = '#e5c39f';\n    } else if (this.countMineAround === 4 && !this.isFlag) {\n      this.cell.innerText = `${this.countMineAround}`;\n      this.cell.style.color = '#00fff9';\n      this.cell.style.backgroundColor = '#e5c39f';\n    } else if (this.countMineAround === 5 && !this.isFlag) {\n      this.cell.innerText = `${this.countMineAround}`;\n      this.cell.style.color = '#ffdd00';\n      this.cell.style.backgroundColor = '#e5c39f';\n    } else if (this.countMineAround === 6 && !this.isFlag) {\n      this.cell.innerText = `${this.countMineAround}`;\n      this.cell.style.color = '#ff00df';\n      this.cell.style.backgroundColor = '#e5c39f';\n    } else if (this.countMineAround === 7 && !this.isFlag) {\n      this.cell.innerText = `${this.countMineAround}`;\n      this.cell.style.color = '#00c7ff';\n      this.cell.style.backgroundColor = '#e5c39f';\n    } else if (this.countMineAround === 8 && !this.isFlag) {\n      this.cell.innerText = `${this.countMineAround}`;\n      this.cell.style.color = '#9aff00';\n      this.cell.style.backgroundColor = '#e5c39f';\n    }\n  }\n\n  setCellRight(cell) {\n    this.cellRight = cell;\n  }\n\n  setCellUp(cell) {\n    this.cellUp = cell;\n  }\n\n  setCellDownRight(cell) {\n    this.cellDownRight = cell;\n  }\n\n  setCellDown(cell) {\n    this.cellDown = cell;\n  }\n\n  setCellUpLeft(cell) {\n    this.cellUpLeft = cell;\n  }\n\n  setCellUpRight(cell) {\n    this.cellUpRight = cell;\n  }\n\n  setCellDownLeft(cell) {\n    this.cellDownLeft = cell;\n  }\n\n  setCellLeft(cell) {\n    this.cellLeft = cell;\n  }\n\n  setMine() {\n    this.mine = true;\n  }\n\n  isMine() {\n    return this.mine;\n  }\n\n  addCountMineAround() {\n    this.countMineAround += 1;\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Cell);\n\n\n//# sourceURL=webpack://minesweeper/./js/modules/class-cell.js?");

/***/ }),

/***/ "./js/modules/create-world.js":
/*!************************************!*\
  !*** ./js/modules/create-world.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _class_cell__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./class-cell */ \"./js/modules/class-cell.js\");\n\n\nfunction createWorld(size) {\n  const field = document.querySelector('.field');\n  const fieldCellArr = [];\n  for (let i = 0; i < size; i += 1) {\n    fieldCellArr.push([]);\n    for (let j = 0; j < size; j += 1) {\n      fieldCellArr[i][j] = new _class_cell__WEBPACK_IMPORTED_MODULE_0__[\"default\"](i, j);\n      field.append(fieldCellArr[i][j].render());\n    }\n  }\n  return fieldCellArr;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createWorld);\n\n\n//# sourceURL=webpack://minesweeper/./js/modules/create-world.js?");

/***/ }),

/***/ "./js/modules/game-over.js":
/*!*********************************!*\
  !*** ./js/modules/game-over.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _assets_sounds_game_over_mp3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../assets/sounds/game-over.mp3 */ \"./assets/sounds/game-over.mp3\");\n/* harmony import */ var _assets_sounds_game_win_mp3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/sounds/game-win.mp3 */ \"./assets/sounds/game-win.mp3\");\n/* harmony import */ var _save_last_game__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./save-last-game */ \"./js/modules/save-last-game.js\");\n\n\n\n\nfunction soundGameOver() {\n  const gameOver = new Audio(_assets_sounds_game_over_mp3__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n  if (!document.querySelector('.mute-button').classList.contains('mute')) {\n    gameOver.play();\n  }\n}\nfunction soundGameWin() {\n  const gameOver = new Audio(_assets_sounds_game_win_mp3__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n  if (!document.querySelector('.mute-button').classList.contains('mute')) {\n    gameOver.play();\n  }\n}\n\nfunction openOverWindow() {\n  const overWindow = document.querySelector('.over-window');\n  const timeGame = document.querySelector('.timer');\n  const time = document.querySelector('.time-game');\n  const result = document.querySelector('.result-game');\n  const click = document.querySelector('.count-click');\n  const clickGame = document.querySelector('.count-click-live');\n  result.innerHTML = 'Game Over';\n  click.innerHTML = clickGame.innerHTML;\n  time.innerHTML = timeGame.innerHTML;\n  overWindow.style.display = 'flex';\n  soundGameOver();\n  (0,_save_last_game__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(click.innerHTML, time.innerHTML, result.innerHTML);\n}\n\nfunction openWinWindow() {\n  const overWindow = document.querySelector('.over-window');\n  const timeGame = document.querySelector('.timer');\n  const time = document.querySelector('.time-game');\n  const result = document.querySelector('.result-game');\n  const click = document.querySelector('.count-click');\n  const clickGame = document.querySelector('.count-click-live');\n  result.innerHTML = 'You won';\n  click.innerHTML = clickGame.innerHTML;\n  time.innerHTML = timeGame.innerHTML;\n  overWindow.style.display = 'flex';\n  soundGameWin();\n  (0,_save_last_game__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(click.innerHTML, time.innerHTML, result.innerHTML);\n}\n\nfunction gameEnd(field, result = false) {\n  const cell = document.querySelectorAll('.cell');\n  cell.forEach((e) => {\n    e.disabled = true;\n  });\n  setTimeout(() => {\n    if (result === true) {\n      openWinWindow();\n    } else {\n      openOverWindow();\n    }\n    cell.forEach((e) => {\n      const currentCell = field[e.getAttribute('row')][e.getAttribute('column')];\n      e.removeEventListener('click', () => {});\n      if (currentCell.isMine()) {\n        currentCell.boom();\n      }\n    });\n  }, 500);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (gameEnd);\n\n\n//# sourceURL=webpack://minesweeper/./js/modules/game-over.js?");

/***/ }),

/***/ "./js/modules/save-last-game.js":
/*!**************************************!*\
  !*** ./js/modules/save-last-game.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction saveLastGame(click, time, result) {\n  let lastGameArr = null;\n  if (localStorage.getItem('storyGame') === null) {\n    localStorage.setItem('storyGame', JSON.stringify([]));\n  }\n  lastGameArr = JSON.parse(localStorage.getItem('storyGame'));\n  if (lastGameArr.length < 10) {\n    lastGameArr.push({\n      countClick: click,\n      stopwatch: time,\n      results: result,\n    });\n  } else {\n    lastGameArr.shift();\n    lastGameArr.push({\n      countClick: click,\n      stopwatch: time,\n      results: result,\n    });\n  }\n  localStorage.setItem('storyGame', JSON.stringify(lastGameArr));\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (saveLastGame);\n\n\n//# sourceURL=webpack://minesweeper/./js/modules/save-last-game.js?");

/***/ }),

/***/ "./js/modules/start-game.js":
/*!**********************************!*\
  !*** ./js/modules/start-game.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _stopwatch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stopwatch */ \"./js/modules/stopwatch.js\");\n/* harmony import */ var _game_over__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game-over */ \"./js/modules/game-over.js\");\n/* harmony import */ var _assets_sounds_click_mp3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/sounds/click.mp3 */ \"./assets/sounds/click.mp3\");\n/* harmony import */ var _assets_sounds_mine_mp3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assets/sounds/mine.mp3 */ \"./assets/sounds/mine.mp3\");\n\n\n\n\n\nlet myTimer = null;\n\nfunction createArr(field, rowNon, columnNon, fieldMine = 10) {\n  const pushMine = [];\n  for (let i = 0; i < fieldMine; i += 1) {\n    const numRandom = Math.floor(Math.random() * (field.length ** 2));\n    if (pushMine.indexOf(numRandom) === -1 && numRandom !== Number(`${rowNon}${columnNon}`)) {\n      pushMine.push(numRandom);\n    } else {\n      i -= 1;\n    }\n  }\n  let numCell = 0;\n  for (let i = 0; i < field.length; i += 1) {\n    for (let j = 0; j < field.length; j += 1) {\n      if (pushMine.indexOf(numCell) >= 0) {\n        field[i][j].setMine();\n      }\n      numCell += 1;\n    }\n  }\n  return field;\n}\n\nfunction neighboringCells(field) {\n  for (let i = 0; i < field.length; i += 1) {\n    for (let j = 0; j < field.length; j += 1) {\n      if (field[i][j + 1] !== undefined) {\n        field[i][j].setCellRight(field[i][j + 1]);\n        if (field[i][j + 1].isMine() && !field[i][j].isMine()) {\n          field[i][j].addCountMineAround();\n        }\n      }\n      if (field[i][j - 1] !== undefined) {\n        field[i][j].setCellLeft(field[i][j - 1]);\n        if (field[i][j - 1].isMine() && !field[i][j].isMine()) {\n          field[i][j].addCountMineAround();\n        }\n      }\n      if (i < field.length - 1) {\n        if (field[i + 1][j] !== undefined) {\n          field[i][j].setCellDown(field[i + 1][j]);\n          if (!field[i][j].isMine() && field[i + 1][j].isMine()) {\n            field[i][j].addCountMineAround();\n          }\n        }\n        if (field[i + 1][j + 1] !== undefined) {\n          field[i][j].setCellDownRight(field[i + 1][j + 1]);\n          if (!field[i][j].isMine() && field[i + 1][j + 1].isMine()) {\n            field[i][j].addCountMineAround();\n          }\n        }\n        if (field[i + 1][j - 1] !== undefined) {\n          field[i][j].setCellDownLeft(field[i + 1][j - 1]);\n          if (!field[i][j].isMine() && field[i + 1][j - 1].isMine()) {\n            field[i][j].addCountMineAround();\n          }\n        }\n      }\n      if (i !== 0) {\n        if (field[i - 1][j + 1] !== undefined) {\n          field[i][j].setCellUpRight(field[i - 1][j + 1]);\n          if (!field[i][j].isMine() && field[i - 1][j + 1].isMine()) {\n            field[i][j].addCountMineAround();\n          }\n        }\n        if (field[i - 1][j - 1] !== undefined) {\n          field[i][j].setCellUpLeft(field[i - 1][j - 1]);\n          if (!field[i][j].isMine() && field[i - 1][j - 1].isMine()) {\n            field[i][j].addCountMineAround();\n          }\n        }\n        if (field[i - 1][j] !== undefined) {\n          field[i][j].setCellUp(field[i - 1][j]);\n          if (field[i - 1][j].isMine() && !field[i][j].isMine()) {\n            field[i][j].addCountMineAround();\n          }\n        }\n      }\n    }\n  }\n  return field;\n}\n\nfunction soundOpen() {\n  const soundBombs = new Audio(_assets_sounds_click_mp3__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n  if (!document.querySelector('.mute-button').classList.contains('mute')) {\n    soundBombs.play();\n  }\n}\nfunction soundBomb() {\n  const soundBombs = new Audio(_assets_sounds_mine_mp3__WEBPACK_IMPORTED_MODULE_3__[\"default\"]);\n  if (!document.querySelector('.mute-button').classList.contains('mute')) {\n    soundBombs.play();\n  }\n}\n\nfunction isVictory(field, countMines) {\n  const result = true;\n  let countOpenCell = 0;\n  const cell = document.querySelectorAll('.cell');\n  cell.forEach((e) => {\n    const currentCell = field[e.getAttribute('row')][e.getAttribute('column')];\n    if (currentCell.state === true) {\n      countOpenCell += 1;\n    }\n  });\n  if ((field.length * field.length) - countMines === countOpenCell) {\n    (0,_game_over__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(field, result);\n    clearInterval(myTimer);\n  }\n}\n\nfunction startGame(field, countMines = 10) {\n  const cell = document.querySelectorAll('.cell');\n  let firstClick = true;\n  let countClick = 0;\n  let countFlagUse = 0;\n  clearInterval(myTimer);\n  document.querySelector('.timer').innerHTML = '00:00.00';\n\n  if (field.length === 15) {\n    document.querySelector('.field').style.gridTemplateColumns = `repeat(${field.length}, 24px)`;\n    cell.forEach((elem) => {\n      // eslint-disable-next-line no-param-reassign\n      elem.style.height = '24px';\n    });\n  } else if (field.length === 25) {\n    document.querySelector('.field').style.gridTemplateColumns = `repeat(${field.length}, 15px)`;\n    cell.forEach((elem) => {\n      // eslint-disable-next-line no-param-reassign\n      elem.style.height = '15px';\n    });\n  } else {\n    document.querySelector('.field').style.gridTemplateColumns = `repeat(${field.length}, 30px)`;\n  }\n\n  cell.forEach((e) => {\n    e.addEventListener('click', (element) => {\n      if (firstClick) {\n        neighboringCells(createArr(field, element.target.getAttribute('row'), element.target.getAttribute('column'), countMines));\n        firstClick = false;\n        myTimer = (0,_stopwatch__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n      }\n      const currentCell = field[element.target.getAttribute('row')][element.target.getAttribute('column')];\n      if (currentCell.isMine() && currentCell.isFlag === false) {\n        currentCell.boom();\n        (0,_game_over__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(field);\n        clearInterval(myTimer);\n        soundBomb();\n      } else if (currentCell.state === false && currentCell.isFlag === false) {\n        currentCell.openCell();\n        countClick += 1;\n        document.querySelector('.count-click-live').innerHTML = countClick;\n        soundOpen();\n        isVictory(field, countMines);\n      }\n    });\n    e.addEventListener('contextmenu', (cli) => {\n      cli.preventDefault();\n      const cellFlag = field[cli.target.getAttribute('row')][cli.target.getAttribute('column')];\n      cellFlag.flag();\n      if (cellFlag.isFlag === true) {\n        countFlagUse += 1;\n        document.querySelector('.count-flag-use').innerHTML = countFlagUse;\n      } else {\n        countFlagUse -= 1;\n        document.querySelector('.count-flag-use').innerHTML = countFlagUse;\n      }\n    });\n  });\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (startGame);\n\n\n//# sourceURL=webpack://minesweeper/./js/modules/start-game.js?");

/***/ }),

/***/ "./js/modules/stopwatch.js":
/*!*********************************!*\
  !*** ./js/modules/stopwatch.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction stopwatch() {\n  const timerBlock = document.querySelector('.timer');\n  const start = Date.now();\n\n  const myTimer = setInterval(() => {\n    const timer = new Date(Date.now() - start);\n    timerBlock.innerHTML = timer.toISOString().slice(-10, -2);\n  });\n  return myTimer;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (stopwatch);\n\n\n//# sourceURL=webpack://minesweeper/./js/modules/stopwatch.js?");

/***/ }),

/***/ "./js/script.js":
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/style.scss */ \"./css/style.scss\");\n/* harmony import */ var _modules_append_elements__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/append-elements */ \"./js/modules/append-elements.js\");\n/* harmony import */ var _modules_create_world__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/create-world */ \"./js/modules/create-world.js\");\n/* harmony import */ var _modules_start_game__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/start-game */ \"./js/modules/start-game.js\");\n/* harmony import */ var _modules_change_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/change-theme */ \"./js/modules/change-theme.js\");\n// import styles\n\n// import modules\n\n\n\n\n\ndocument.addEventListener('DOMContentLoaded', () => {\n  (0,_modules_append_elements__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n  (0,_modules_start_game__WEBPACK_IMPORTED_MODULE_3__[\"default\"])((0,_modules_create_world__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(10));\n  document.querySelector('.start-game').addEventListener('click', () => {\n    document.querySelector('.field').innerHTML = '';\n    document.querySelector('.over-window').style.display = 'none';\n    document.querySelector('.count-click-live').innerHTML = 0;\n    const fieldSize = document.querySelector('.field-size').value;\n    const countMines = document.querySelector('.input-range').value;\n    (0,_modules_start_game__WEBPACK_IMPORTED_MODULE_3__[\"default\"])((0,_modules_create_world__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(fieldSize), countMines);\n  });\n  (0,_modules_change_theme__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n});\n\n\n//# sourceURL=webpack://minesweeper/./js/script.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./css/style.scss":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./css/style.scss ***!
  \*****************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".field {\\n  margin: auto;\\n  display: grid;\\n  justify-content: center;\\n  position: absolute;\\n  top: 60%;\\n  left: 50%;\\n  transform: translate(-50%, -50%);\\n  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;\\n}\\n\\n.cell {\\n  overflow: hidden;\\n  height: 30px;\\n  background-color: #a2d149;\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  font-weight: bold;\\n  font-family: Arial, Helvetica, sans-serif;\\n  font-size: 20px;\\n  cursor: pointer;\\n  transition: 0.5s;\\n  border: 0.5px solid;\\n  background-size: no-repeat;\\n  background-position: center;\\n  background-size: cover;\\n}\\n\\n.cell-dark {\\n  background-color: #006466;\\n}\\n\\n.cell:hover {\\n  background-color: aliceblue;\\n  opacity: 0.5;\\n}\\n\\n.mine {\\n  width: 25px;\\n  height: 25px;\\n  transition: 0.5s;\\n}\\n\\n.flag {\\n  width: 25px;\\n  height: 25px;\\n  transition: 0.5s;\\n}\\n\\n.options-all {\\n  background-color: #A2D149;\\n  display: flex;\\n  flex-direction: row;\\n  align-items: center;\\n  justify-content: space-around;\\n  flex-wrap: wrap;\\n  margin: auto;\\n  transition: 0.5s;\\n  margin-bottom: 3em;\\n  box-shadow: rgba(162, 209, 73, 0.4) 0px 5px, rgba(162, 209, 73, 0.3) 0px 10px, rgba(162, 209, 73, 0.2) 0px 15px, rgba(162, 209, 73, 0.1) 0px 20px, rgba(162, 209, 73, 0.05) 0px 25px;\\n}\\n\\n.start-game {\\n  margin: 10px 0;\\n  width: 150px;\\n  height: 50px;\\n  font-size: 25px;\\n  border-radius: 10px;\\n  font-weight: bold;\\n  color: white;\\n  border: 0;\\n  background-color: #E7471D;\\n  cursor: pointer;\\n}\\n\\n.timer {\\n  color: #E7471D;\\n  border-radius: 10px;\\n  font-family: Arial, Helvetica, sans-serif;\\n  font-weight: bold;\\n  font-size: 30px;\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n}\\n\\n#value {\\n  font-size: 15px;\\n  font-weight: bold;\\n  color: #E7471D;\\n  font-family: Arial, Helvetica, sans-serif;\\n}\\n\\n#value::before {\\n  content: \\\"Bombs: \\\";\\n}\\n\\n.input-range {\\n  width: 200px;\\n}\\n\\n.field-size {\\n  font-size: 20px;\\n  font-weight: bold;\\n  background-color: #E7471D;\\n  color: white;\\n  border-radius: 5px;\\n  border: 0;\\n}\\n\\n.hours::after {\\n  content: \\\":\\\";\\n}\\n\\n.minute::after {\\n  content: \\\":\\\";\\n}\\n\\n.block-input-range {\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n}\\n\\n.count-click-live {\\n  font-family: Arial, Helvetica, sans-serif;\\n  font-weight: bold;\\n  font-size: 20px;\\n  color: #E7471D;\\n}\\n\\n.count-click-live::before {\\n  content: \\\"Click: \\\";\\n}\\n\\n.list-button {\\n  margin: 10px 0;\\n  width: 150px;\\n  height: 50px;\\n  font-size: 25px;\\n  border-radius: 10px;\\n  font-weight: bold;\\n  color: white;\\n  border: 0;\\n  background-color: #E7471D;\\n  cursor: pointer;\\n}\\n\\n.count-flag-use {\\n  font-family: Arial, Helvetica, sans-serif;\\n  font-weight: bold;\\n  font-size: 20px;\\n  color: #E7471D;\\n}\\n\\n.count-flag-use::before {\\n  content: \\\"Flag use: \\\";\\n}\\n\\n.theme-mute {\\n  display: flex;\\n  flex-direction: column;\\n  gap: 5px;\\n}\\n\\n.mute-button,\\n.theme-button {\\n  width: 50px;\\n  height: 25px;\\n  border-radius: 10px;\\n  border: 0;\\n  cursor: pointer;\\n  font-weight: bold;\\n  color: #E7471D;\\n  transition: 0.5s;\\n}\\n\\n.mute {\\n  background-color: red;\\n  color: white;\\n}\\n\\n.over-window {\\n  color: white;\\n  font-family: Arial, Helvetica, sans-serif;\\n  font-weight: bold;\\n  position: absolute;\\n  top: 85%;\\n  left: 50%;\\n  transform: translate(-50%, -50%);\\n  width: 20%;\\n  height: 20vh;\\n  background-color: #E7471D;\\n  border-radius: 20px;\\n  display: none;\\n  justify-content: space-evenly;\\n  flex-direction: column;\\n  align-items: center;\\n}\\n\\n.time-game::before {\\n  content: \\\"Time: \\\";\\n}\\n\\n.count-click::before {\\n  content: \\\"Click: \\\";\\n}\\n\\n.modal-lasts-list {\\n  overflow: scroll;\\n  color: white;\\n  font-family: Arial, Helvetica, sans-serif;\\n  font-weight: bold;\\n  position: absolute;\\n  z-index: 1;\\n  top: 50%;\\n  left: 50%;\\n  transform: translate(-50%, -50%);\\n  width: 85%;\\n  height: 70vh;\\n  background-color: #E7471D;\\n  border-radius: 20px;\\n  display: none;\\n  justify-content: space-evenly;\\n  flex-direction: column;\\n  align-items: center;\\n}\\n\\n.list-game {\\n  text-align: center;\\n  font-size: 25px;\\n  margin-top: 20px;\\n}\\n\\n.game {\\n  margin-top: 10px;\\n}\\n\\n* {\\n  margin: 0;\\n  padding: 0;\\n}\\n\\nol, ul {\\n  list-style: none;\\n}\\n\\n.container {\\n  margin: 0 auto;\\n  width: 100%;\\n  height: 100vh;\\n  background: #4A752C;\\n  transition: 0.5s;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://minesweeper/./css/style.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://minesweeper/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://minesweeper/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./assets/sounds/click.mp3":
/*!*********************************!*\
  !*** ./assets/sounds/click.mp3 ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"5ef9b767d802fd62438bf6ed0fb18f77.mp3\");\n\n//# sourceURL=webpack://minesweeper/./assets/sounds/click.mp3?");

/***/ }),

/***/ "./assets/sounds/game-over.mp3":
/*!*************************************!*\
  !*** ./assets/sounds/game-over.mp3 ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"9ef9b712c5af15d175db624901393ced.mp3\");\n\n//# sourceURL=webpack://minesweeper/./assets/sounds/game-over.mp3?");

/***/ }),

/***/ "./assets/sounds/game-win.mp3":
/*!************************************!*\
  !*** ./assets/sounds/game-win.mp3 ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"f9ecff09eea7afa5b87394185bdd075e.mp3\");\n\n//# sourceURL=webpack://minesweeper/./assets/sounds/game-win.mp3?");

/***/ }),

/***/ "./assets/sounds/mine.mp3":
/*!********************************!*\
  !*** ./assets/sounds/mine.mp3 ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"8a2ab98ce766aed56ca822b45b4ddb2e.mp3\");\n\n//# sourceURL=webpack://minesweeper/./assets/sounds/mine.mp3?");

/***/ }),

/***/ "./css/style.scss":
/*!************************!*\
  !*** ./css/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./style.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./css/style.scss\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://minesweeper/./css/style.scss?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://minesweeper/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://minesweeper/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://minesweeper/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://minesweeper/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://minesweeper/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://minesweeper/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./assets/svg/flag-filled.svg":
/*!************************************!*\
  !*** ./assets/svg/flag-filled.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"flag-filled.svg\";\n\n//# sourceURL=webpack://minesweeper/./assets/svg/flag-filled.svg?");

/***/ }),

/***/ "./assets/svg/naval-mine.svg":
/*!***********************************!*\
  !*** ./assets/svg/naval-mine.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"naval-mine.svg\";\n\n//# sourceURL=webpack://minesweeper/./assets/svg/naval-mine.svg?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./js/script.js");
/******/ 	
/******/ })()
;