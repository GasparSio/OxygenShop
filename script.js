//FORM VALIDATION
const nameForm = document.getElementById('name')
const emailForm = document.getElementById('email')
const form = document.getElementById('form')
const inputs = document.querySelectorAll('#form input')

const expresiones = {
    nameUsuario: /^[a-zA-Z0-9\_\-]{2,100}$/,
    email: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
}
const campos = {
    nameUsuario: false,
    email: false
}
const validateForm = (event) => {
    switch(event.target.name){
        case 'name':
            if(expresiones.nameUsuario.test(event.target.value)){
                nameForm.style.borderColor = '#55DFB4';
                campos.nameUsuario = true;
                console.log(event.target.value)
            }else{
                nameForm.style.borderColor = '#EB476E';
                campos.nameUsuario = false;
            }
            break;
        case 'email':
            if(expresiones.email.test(event.target.value)){
                emailForm.style.borderColor = '#55DFB4';
                campos.email = true;
            }else{
                emailForm.style.borderColor = '#EB476E';
                campos.email = false;
            }
            break;
        case 'consent':
        console.log('funciona consent')
        break;
    }
}
inputs.forEach((input) => {
    input.addEventListener('keyup', validateForm);
    input.addEventListener('blur', validateForm);
})
form.addEventListener('submit', (event) => {
    event.preventDefault();

    const consentCheck = document.getElementById('consent');

    if(campos.nameUsuario && campos.email && consentCheck.checked){//.checked comprueba que este marcado
        form.reset();
    }
    
})

//ENVIAR A UN SERVIDOR JSON LOS DATOS DEL FORMULARIO
const url = 'https://jsonplaceholder.typicode.com/posts';
const nameValue = nameForm.value;
const emailValue = emailForm.value;
// const emailSuscriptor = emailInput.value;
const data = {
    name: nameValue,
    email: emailValue, 
    // emailSuscriptor: emailSuscriptor
}
fetch(url, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    }
})
    .then(response => {
        if(response.ok){
            return response.json();
        }else{
            throw new Error ('Request failed')
        }
    })
    .then((json) => {
        console.log(json);
    })
    .catch((error) => {
        console.log(error);
    });                             


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


//MODAL NEWSLETTER
const modal = document.getElementById('modal');
const closeButton = document.getElementById('closeButton');
const subscribeForm = document.getElementById('subscribeForm');
const emailInput = document.getElementById('emailInput');

//MOSTRAR EL MODAL DESPUES DE 5 SEG QUE CARGA LA PAGINA
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        showModal();
    }, 5000);
    console.log('hola')
    console.log(localStorage.getItem('modalClosed'))
})
// Mostrar el modal
function showModal() {
    const localStorageValue = localStorage.getItem('modalClosed');
    if(localStorageValue){
        modal.style.display = 'none';
    }else{
        modal.style.display = 'block';
        console.log('que mierda pasa')
    }
    console.log(localStorageValue);
}

// Cerrar el modal
function closeModal() {
    modal.style.display = 'none';
    localStorage.setItem('modalClosed', true);
}

//Cerrar el modal haciendo clic en el botón X
closeButton.addEventListener('click', () => {
  closeModal();
});

//Cerrar el modal haciendo clic fuera del modal
window.addEventListener('click', (event) => {
  if (event.target == modal) {
    closeModal();
  }
});

//Cerrar el modal presionando la tecla ESC
window.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    closeModal();
  }
});

// Mostrar el modal cuando el usuario baja el 25% de la página
window.addEventListener('scroll', () => {
const scrollPosition = document.documentElement.scrollTop;
const pageHeight = document.documentElement.scrollHeight;

if (scrollPosition > (pageHeight * 0.25)) {
    showModal();
}
});


