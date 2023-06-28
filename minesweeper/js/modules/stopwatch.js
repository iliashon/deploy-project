function stopwatch() {
  const timerBlock = document.querySelector('.timer');
  const start = Date.now();

  const myTimer = setInterval(() => {
    const timer = new Date(Date.now() - start);
    timerBlock.innerHTML = timer.toISOString().slice(-10, -2);
  });
  return myTimer;
}

export default stopwatch;
