import getResource from "./servise";

function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    while (0 !== currentIndex) {
  
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  }

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

    render(index) {
        const element = document.createElement('li');
        const petsList = document.querySelector('.our-friends-list')
        element.classList.add(`our-friends__slider-card`);
        element.dataset.id = index;

        element.innerHTML = `
          <img src="${this.img}" alt="img-${this.name}">
          <h4>${this.name}</h4>
          <button class="our-friends__slider-card-more-btn">
            Learn more
          </button>
        `;
        petsList.append(element);
    }
}

const numberPage = document.querySelector('.number-page'),
      firstPageBtn = document.querySelector('.btn-full-back'),
      prevPageBtn = document.querySelector('.btn-first-back'),
      nextPageBtn = document.querySelector('.btn-first-next'),
      lastPageBtn = document.querySelector('.btn-full-next');
const petsList = document.querySelector('.our-friends-list');

function pag () {

    getResource('db.json')
    .then(data => {
        let newData = [];
        for(let i = 0; i < 6; i++){
            shuffle(data);
            data.forEach(element => {
                newData.push(element);
            });
        }

        let currentPage = 1;

        let pages = splitArrayIntoPages(newData);
        
        nextPageBtn.addEventListener('click', () => {
            currentPage++;
            petsList.innerHTML = '';
            createPetsList(pages[currentPage - 1]);
            numberPage.innerHTML = `${currentPage}`;
            if (currentPage > 1) {
                firstPageBtn.disabled = false;
                prevPageBtn.disabled = false;
            }
            if (currentPage === pages.length) {
                nextPageBtn.disabled = true;
                lastPageBtn.disabled = true;
            }
        })
        prevPageBtn.addEventListener('click', () => {
            currentPage--;
            petsList.innerHTML = '';
            createPetsList(pages[currentPage - 1]);
            numberPage.innerHTML = `${currentPage}`;
            if (currentPage <= pages.length) {
                nextPageBtn.disabled = false;
                lastPageBtn.disabled = false;
            }
            if (currentPage === 1) {
                prevPageBtn.disabled = true;
                firstPageBtn.disabled = true;
            }
        })
        lastPageBtn.addEventListener('click', () => {
            currentPage = pages.length;
            petsList.innerHTML = '';
            createPetsList(pages[pages.length - 1]);
            numberPage.innerHTML = `${currentPage}`;
            if (currentPage > 1) {
                firstPageBtn.disabled = false;
                prevPageBtn.disabled = false;
            }
            if (currentPage === pages.length) {
                nextPageBtn.disabled = true;
                lastPageBtn.disabled = true;
            }
        })
        firstPageBtn.addEventListener('click', () => {
            currentPage = 1;
            petsList.innerHTML = '';
            createPetsList(pages[0]);
            numberPage.innerHTML = `${currentPage}`;
            if (currentPage <= pages.length) {
                nextPageBtn.disabled = false;
                lastPageBtn.disabled = false;
            }
            if (currentPage === 1) {
                prevPageBtn.disabled = true;
                firstPageBtn.disabled = true;
            }
        })

        createPetsList(pages[0])

        window.addEventListener('resize', (e) => {
            if (pages.length != getNumberOfPages()) {
              pages = splitArrayIntoPages(newData);
              petsList.innerHTML = '';
              currentPage = 1;
              createPetsList(pages[0]);
              numberPage.innerHTML = `${currentPage}`;
              if (currentPage <= pages.length) {
                  nextPageBtn.disabled = false;
                  lastPageBtn.disabled = false;
              }
              if (currentPage === 1) {
                  prevPageBtn.disabled = true;
                  firstPageBtn.disabled = true;
              }
            }
          })

    });
}

function getNumberOfPages () {
    let numPages;
    let widthWindow = document.body.clientWidth;
    if (widthWindow >= 1280) {
        numPages = 6;
    } else if (widthWindow < 1280 && widthWindow >= 767) {
        numPages = 8;
    } else {
        numPages = 16;
    } 
    return numPages;
  }

function splitArrayIntoPages(array) {
    let numPages = getNumberOfPages();
    let sortData = [];
    let colPet = 0;
    let indexJ = 0;
    if (numPages === 6) {
        colPet = 8;
    } else if (numPages === 8) {
        colPet = 6;
    } else {
        colPet = 3;
    }
    for(let i = 0; i < numPages; i++){
        sortData.push([]);
        for(let j = indexJ; j < colPet; j++){
            sortData[i].push(array[j])
        }
        if (numPages === 6) {
            indexJ += 8;
        } else if (numPages === 8) {
            indexJ += 6;
        } else {
            indexJ += 3;
        }
        if (numPages === 6) {
            colPet += 8;
        } else if (numPages === 8) {
            colPet += 6;
        } else {
            colPet += 3;
        }
    }
    return sortData;
}

function createPetsList(page){
    for(let i = 0; i < page.length; i++) { 
        let img = page[i].img;
        let name = page[i].name;
        let id = page[i].id;
        new PetsCard(name, img).render(id);
    }
}

export default pag;


    // let sortData = [];
    // let colPage = 6;
    // let colPet = 8;
    // let indexJ = 0;

    // console.log(newData);

    // for(let i = 0; i < colPage; i++){
    //     sortData.push([]);
    //     for(let j = indexJ; j < colPet; j++){
    //         sortData[i].push(newData[j])
    //     }
    //     indexJ += 8;
    //     colPet += 8;
    // }

    // console.log(sortData)