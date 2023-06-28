import cards from "./creatCard";

function slider (numCards) {
    const slider = document.querySelector('.our-friends-parent-cards'),
          back = document.querySelector('.our-friends__slider-back-btn'),
          next = document.querySelector('.our-friends__slider-next-btn'),
          active = document.querySelector('#item-active'),
          left = document.querySelector('#item-left'),
          right = document.querySelector('#item-right');

          function nextBtn() {
            if (right.innerHTML === ''){
              cards(getNumCards(), right)
            } 
            slider.classList.add('transition-right')
          }

          function backBtn() {
            if(left.innerHTML === ''){
              cards(getNumCards(), left)
            }
            slider.classList.add('transition-left')
          }

          if (back.getAttribute('listenerclick') != 'true') {
            back.addEventListener('click', backBtn, true);
            back.setAttribute('listenerclick', 'true');
          }
          if (next.getAttribute('listenerclick') != 'true') {
            next.addEventListener('click', nextBtn, true);
            next.setAttribute('listenerclick', 'true');
          }

          
          if (active.innerHTML === '') {
            cards(numCards, active);
          }
            if (slider.getAttribute('listeneranimation') != 'true') {
              slider.addEventListener('animationend', (anim) => {
                if (anim.animationName === 'move-left') {
                  slider.classList.remove('transition-left');
                  right.innerHTML = active.innerHTML;
                  active.innerHTML = left.innerHTML;
                  left.innerHTML = '';
                } else {
                  slider.classList.remove('transition-right');
                  left.innerHTML = active.innerHTML;
                  active.innerHTML = right.innerHTML;
                  right.innerHTML = '';
                }
                slider.setAttribute('listeneranimation', 'true');
              })
            }

            
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

}

export default slider;