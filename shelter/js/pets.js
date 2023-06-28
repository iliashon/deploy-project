import burgerNav from "./modules/burger";
import modal from "./modules/popap";
import pag from "./modules/pagination";

window.addEventListener('DOMContentLoaded', () =>{

    burgerNav('hdm');
    modal(".our-friends__slider-card", ".modal");
    pag();

  });