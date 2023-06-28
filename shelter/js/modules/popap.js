import getResource from "./servise";

function openModal(modalSelector, clickId) {
    const modal = document.querySelector(modalSelector);

    let idPets = [];
    getResource('db.json')
        .then(data => {

        modal.innerHTML = `
        <div class="modal__dialog">
            <div class="modal__content">
                <div data-close class="modal__close">×</div>
                  <img src="${data[clickId].img}" alt="">
                  <div class="modal__pets-info">
                    <h2>${data[clickId].name}</h2>
                    <h3>${data[clickId].type} - ${data[clickId].breed}</h3>
                    <p>${data[clickId].description}</p>
                    <ul>
                      <li><span>Age: ${data[clickId].age}</span></li>
                      <li><span>Inoculations: ${data[clickId].inoculations.join(', ')}</span></li>
                      <li><span>Diseases: ${data[clickId].diseases.join(', ')}</span></li>
                      <li><span>Parasites: ${data[clickId].parasites.join(', ')}</span></li>
                    </ul>
                  </div>
            </div>
        </div>
        `

    document.querySelector('.modal__close').addEventListener("click", () => closeModal(modalSelector));
    
    modal.style.display = "block";
    document.body.style.overflow = "hidden";
    });
  }
  
  function closeModal(modalSelector) {
    const modal = document.querySelector(modalSelector);
  
    modal.style.display = "none";
    document.body.style.overflow = "";
  }
  
  function modal(triggerSelector, modalSelector) {
    // modal
  
    const modal = document.querySelector(modalSelector),
          modalCloseBtn = document.querySelector(".modal__close");

      document.addEventListener('click', (e) => {
        let clickId;
        if(e.target.classList.contains('our-friends__slider-card')) {
            clickId = e.target.dataset.id;
            openModal(modalSelector, clickId);
        } else if (e.target.closest('.our-friends__slider-card')) { 
            clickId = e.target.closest('.our-friends__slider-card').dataset.id;
            openModal(modalSelector, clickId);
        }
      })
  
    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        closeModal(modalSelector);
      }
    });
  }
  
  export default modal;
  export {closeModal};
  export {openModal};
  