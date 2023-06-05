//FORM VALIDATION & EMAIL SUBMIT
const nameForm = document.getElementById('name');
const emailForm = document.getElementById('email');
const form = document.getElementById('form');
const inputs = document.querySelectorAll('#form input');


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
        location.reload();
    }
    
})

//ENVIAR A UN SERVIDOR JSON LOS DATOS DEL FORMULARIO
const url = 'https://jsonplaceholder.typicode.com/posts';
const nameValue = nameForm.value;
const emailValue = emailForm.value;
const data = {
    name: nameValue,
    email: emailValue, 
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
    })
    .catch((error) => {
        console.log(error);
    });                             


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
})
// Mostrar el modal
function showModal() {
    const localStorageValue = localStorage.getItem('modalClosed');
    if(localStorageValue){
        modal.style.display = 'none';
    }else{
        modal.style.display = 'block';
    }
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
    console.log(event.target);
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


//VALIDATE EMAIL MODAL NEWSLETTER
const emailNewsLetter = document.getElementById('emailInputNews');
const expresionesNews = {
  email: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
}
const camposNews = {
  email: false
}
const validateFormNews = (event) => {
  if(expresionesNews.email.test(emailNewsLetter.value)){
    emailNewsLetter.style.borderColor = '#55DFB4';
    camposNews.email = true;
  }else{
    emailNewsLetter.style.borderColor = '#EB476E';
    camposNews.email = false;
  }
}
emailNewsLetter.addEventListener('keyup', validateFormNews);
emailNewsLetter.addEventListener('blur', validateFormNews);

subscribeForm.addEventListener('submit', (event) => {
  event.preventDefault();

  if(camposNews.email){
    subscribeForm.reset();
    setTimeout(()=>{
      closeModal();
    }, 1000);
  }
})

//ENVIAR A UN SERVIDOR JSON LOS DATOS DEL FORMULARIO
const urlNews = 'https://jsonplaceholder.typicode.com/posts';
const emailSuscriptorValue = emailNewsLetter.value;
const data1 = {
  emailSuscriptor: emailSuscriptorValue
}
fetch(urlNews, {
  method: 'POST',
  body: JSON.stringify(data1),
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
  })
  .catch((error) => {
      console.log(error);
  });  

