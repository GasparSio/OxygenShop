const mobImg = document.querySelector('.icon-menu--big');
const modal = document.querySelector('.header-section__subtitles');
const header = document.querySelector('.header-section');
const crossImg = document.querySelector('.cross-title');
const logo = document.querySelector('.header-section__title');
const formBtn = document.querySelector('.send-button');

//RELOAD WEB CLICK LOGO
const clickLogo = logo.addEventListener('click', ()=>{
    location.reload();
})

//RELOAD WEB CLICK FORM BUTTON
const clickFormBtn = formBtn.addEventListener('click', ()=>{
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
        // progressBarPer.innerHTML = percentRound + '%';
        progressBarPer.style.width = percentage + '%';
        console.log(percentage)
    })
})

//CLICK HAMBURG MENU
const clickHamb = mobImg.addEventListener('click', () => {
    modal.style.display = "block";
    crossImg.style.display = "block";
    expandirHeader();
    mobImg.style.display = 'none';
})
const clickCross = crossImg.addEventListener('click', () => {
    cerrarHeader();
    modal.style.display = "none";
    crossImg.style.display = 'none';
    mobImg.style.display = 'block';
})

function expandirHeader() {
    header.classList.add('header-expand');
    modal.classList.add('header-section__subtitles');
}
function cerrarHeader() {
    header.classList.remove('header-expand');
}