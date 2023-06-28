import modal from "./popap";
import getResource from "./servise";

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function cards(numberCards, slide) {

    class PetsCard {
        constructor(name, img, type, breed, description, age, inoculations, diseases, parasites, id){
            this.id = id;
            this.name = name;
            this.img = img;
            this.type = type;
            this.breed = breed;
            this.description = description;
            this.age = age;
            this.inoculations = inoculations;
            this.diseases = diseases;
            this.parasites = parasites;
        }

        render(active, index) {
            const element = document.createElement('div');
            element.classList.add(`our-friends__slider-card`);
            element.dataset.id = index;
    
            element.innerHTML = `
              <img src="${this.img}" alt="img-${this.name}">
              <h4>${this.name}</h4>
              <button class="our-friends__slider-card-more-btn">
                Learn more
              </button>
            `;
            active.append(element);
        }
    }

    let idPets = [];

    const activeSlide = document.querySelector('#item-active'),
          slides = activeSlide.querySelectorAll('div');

    let activPets = [];

    slides.forEach((item) => {
      activPets.push(+item.dataset.id);
    })
    

    console.log(activPets)

    function creatCard (colc) {
        getResource('db.json')
        .then(data => {
          for(let i = 0; i < data.length; i++){
            idPets.push(i);
          }
            for (let i = 0; i < colc; i++) {
                let randNum = getRandomInt(idPets.length);
                if (!activPets.includes(randNum)) {
                  let img = data[randNum].img;
                  let name = data[randNum].name;
                  new PetsCard(name, img).render(slide, randNum);
                  activPets.push(randNum);
                } else {
                  colc++;
                  continue;
                }
            }
        });
    }
    creatCard(numberCards);
}

export default cards;