function saveLastGame(click, time, result) {
  let lastGameArr = null;
  if (localStorage.getItem('storyGame') === null) {
    localStorage.setItem('storyGame', JSON.stringify([]));
  }
  lastGameArr = JSON.parse(localStorage.getItem('storyGame'));
  if (lastGameArr.length < 10) {
    lastGameArr.push({
      countClick: click,
      stopwatch: time,
      results: result,
    });
  } else {
    lastGameArr.shift();
    lastGameArr.push({
      countClick: click,
      stopwatch: time,
      results: result,
    });
  }
  localStorage.setItem('storyGame', JSON.stringify(lastGameArr));
}

export default saveLastGame;
