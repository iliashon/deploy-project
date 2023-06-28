
function openBurgerNav(burgerSelector, burgerAnim) {
    document.getElementById(burgerSelector).classList.add('activ-nav'),
    document.getElementById('hd-btn').classList.add('activ-nav-span');
    document.body.style.overflow = 'hidden';
    burgerAnim.style.background = 'rgba(0,0,0, 0.3)';
}

function closeBurgerNav(burgerSelector, burgerAnim) {
    document.getElementById(burgerSelector).classList.remove('activ-nav'),
    document.getElementById('hd-btn').classList.remove('activ-nav-span');
    document.body.style.overflow = '';
    burgerAnim.style.background = '';
}

function burgerNav(burgerSelector) {
    const burgerSpan = document.getElementById('hd-btn');
    const burgerLink = document.querySelectorAll('.burger-menu-list');
    const burgerAnim = document.querySelector('.burger-menu-anim');
    const divAnim = document.querySelector('.haeder__burger-menu');
    let activNav = false;
        burgerSpan.onclick = function() {
            if (!activNav) {
                openBurgerNav(burgerSelector, burgerAnim);
                activNav = true;
            } else {
                closeBurgerNav(burgerSelector, burgerAnim);
                activNav = false;
            }
        }
        document.addEventListener('click', (e) => {
            const click = e.composedPath().includes(burgerSpan);
            const clickDiv = e.composedPath().includes(divAnim);
            if (activNav && !click && !clickDiv) {
                closeBurgerNav(burgerSelector, burgerAnim);
                activNav = false;
            }
        });

        burgerLink.forEach((btn) => {
            btn.addEventListener("click", () => {
                document.getElementById(burgerSelector).classList.toggle('activ-nav'),
                document.getElementById('hd-btn').classList.toggle('activ-nav-span');
                document.body.style.overflow = '';
                burgerAnim.style.background = '';
                activNav = false;
            });
          });
    }



export default burgerNav; 