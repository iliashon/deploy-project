let state = false;

function changeTheme() {
  const themeButton = document.querySelector('.theme-button');
  themeButton.addEventListener('click', () => {
    if (state === false) {
      themeButton.style.color = '#3e1f47';
      themeButton.innerText = 'Light';
      document.querySelector('.container').style.backgroundColor = '#3e1f47';
      document.querySelector('.options-all').style.backgroundColor = '#144552';
      document.querySelector('.options-all').style.boxShadow = 'rgba(20, 69, 82, 0.4) 0px 5px, rgba(20, 69, 82, 0.3) 0px 10px, rgba(20, 69, 82, 0.2) 0px 15px, rgba(20, 69, 82, 0.1) 0px 20px, rgba(20, 69, 82, 0.05) 0px 25px';
      document.querySelector('.timer').style.color = 'white';
      document.querySelector('.field-size').style.backgroundColor = '#3e1f47';
      document.querySelector('.count-flag-use').style.color = 'white';
      document.querySelector('.count-click-live').style.color = 'white';
      document.querySelector('#value').style.color = 'white';
      document.querySelector('.start-game').style.backgroundColor = '#3e1f47';
      document.querySelector('.list-button').style.backgroundColor = '#3e1f47';
      document.querySelector('.over-window').style.backgroundColor = '#144552';
      document.querySelector('.modal-lasts-list').style.backgroundColor = '#144552';
      document.querySelectorAll('.cell').forEach((elem) => {
        elem.classList.add('cell-dark');
      });
      state = true;
    } else {
      themeButton.style.color = '#E7471D';
      document.querySelector('.container').style.backgroundColor = '#4A752C';
      document.querySelector('.options-all').style.backgroundColor = '#A2D149';
      document.querySelector('.options-all').style.boxShadow = 'rgba(162, 209, 73, 0.4) 0px 5px, rgba(162, 209, 73, 0.3) 0px 10px, rgba(162, 209, 73, 0.2) 0px 15px, rgba(162, 209, 73, 0.1) 0px 20px, rgba(162, 209, 73, 0.05) 0px 25px';
      document.querySelector('.timer').style.color = '#e6461d';
      document.querySelector('.field-size').style.backgroundColor = '#e6461d';
      document.querySelector('.count-flag-use').style.color = '#e6461d';
      document.querySelector('.count-click-live').style.color = '#e6461d';
      document.querySelector('#value').style.color = '#e6461d';
      document.querySelector('.start-game').style.backgroundColor = '#e6461d';
      document.querySelector('.list-button').style.backgroundColor = '#e6461d';
      document.querySelector('.over-window').style.backgroundColor = '#e6461d';
      document.querySelector('.modal-lasts-list').style.backgroundColor = '#e6461d';
      document.querySelectorAll('.cell').forEach((elem) => {
        elem.classList.remove('cell-dark');
      });
      themeButton.innerText = 'Dark';
      state = false;
    }
  });
}

export default changeTheme;
