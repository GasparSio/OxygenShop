const mobImg = document.querySelector('.icon-menu--big');
const modal = document.querySelector('.header-section__subtitles');



const clickHamb = mobImg.addEventListener('click', () => {
    modal.style.display = "block";
    mobImg.style.display = "none";
})