//RELOAD WEB CLICK LOGO
const logo = document.querySelector('.header-section__title');

const clickLogo = logo.addEventListener('click', ()=>{
    location.reload();
})


//PERCENTAGE SCROLLER
document.addEventListener('DOMContentLoaded', () => {
    const progressBarPer = document.querySelector('.progress-bar__inner')
    window.addEventListener('scroll', () => {
        let h = document.documentElement;
        let scrollTop = h.scrollTop || document.body.scrollTop;
        let scrollHeight = h.scrollHeight || document.body.scrollHeight;
        let percentage = scrollTop / (scrollHeight - h.clientHeight) * 100;
        let percentRound = Math.round(percentage)
        progressBarPer.style.width = percentage + '%';
    })
})

//CLICK BUTTON RETURN TOP
const btnRetTop = document.querySelector('.btn-return-top')
const clickRetTop = btnRetTop.addEventListener('click', () => {
    setTimeout(scrollToTop, 200);
})
function scrollToTop() {
    let position = document.documentElement.scrollTop; //position actual del desplazamiento
    if (position > 0) {
      window.scroll(0, position - 50); //desplaza 50px hacia arriba
      setTimeout(scrollToTop, 20); // dps de 20 milisegundos vuelve a llamar a la ft para otros 50px hacia arriba
    }
  }


//CLICK HAMBURG MENU
const headerSecIcon = document.querySelector('.header-section__icon')
const mobImg = document.querySelector('.icon-menu--big');
const crossIcon = document.querySelector('.icon-menu--cross');
const header = document.querySelector('.header-section');
const crossImg = document.querySelector('.cross-title');
const menuMovil = document.querySelector('.header-section-mob-menu');

function expandirHeader() {
    header.classList.add('header-expand');
    menuMovil.classList.remove('inactive')
}
function cerrarHeader() {
    header.classList.remove('header-expand');
    menuMovil.classList.add('inactive')
}
const clickHeaderSecIcon = headerSecIcon.addEventListener('click', () => {
    mobImg.classList.toggle('inactive');
    crossIcon.classList.toggle('inactive');
    
    const hambInact = mobImg.classList.contains('inactive');
    const crossInact = crossIcon.classList.contains('inactive');

    if(hambInact){
        expandirHeader()
    }else{
        cerrarHeader()
    }
})



