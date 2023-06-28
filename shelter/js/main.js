import burgerNav from "./modules/burger";
import slider from "./modules/slider";
import modal from "./modules/popap";

let numCards;

window.addEventListener('DOMContentLoaded', () =>{
    const active = document.querySelector('#item-active');
    const left = document.querySelector('#item-left');
    const right = document.querySelector('#item-right');
    active.innerHTML = '';
    left.innerHTML = '';
    right.innerHTML = '';

    burgerNav('hdm');
    slider(getNumCards());
    modal(".our-friends__slider-card", ".modal");

  }, {once: true});

  window.addEventListener('resize', (e) => {
    const active = document.querySelector('#item-active');
    const left = document.querySelector('#item-left');
    const right = document.querySelector('#item-right');
    if (numCards !== getNumCards()) {
      numCards = getNumCards();
      active.innerHTML = '';
      left.innerHTML = '';
      right.innerHTML = '';
      slider(numCards);
    }
  }, false)

  function getNumCards () {
    let countCards;
    let widthWindow = document.body.clientWidth;
    if (widthWindow >= 1280) {
      countCards = 3;
    } else if (widthWindow < 1280 && widthWindow >= 767) {
      countCards = 2;
    } else {
      countCards = 1;
    } 
    return countCards;
  }
  
