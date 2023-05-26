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


//CURRENCY SELECTOR
const btnUsd = document.querySelector('.section-currency__dolar');
const btnEuro = document.querySelector('.section-currency__euro');
const btnPound = document.querySelector('.section-currency__pound');

const pricesToChange = [
    document.getElementById("price-number__card1"),
    document.getElementById("price-number__card2"),
    document.getElementById("price-number__card3"),
];
    
const priceNumCard1 = document.getElementById("price-number__card1");
const priceNumCard2 = document.getElementById("price-number__card2");
const priceNumCard3 = document.getElementById("price-number__card3");



// Función para obtener el tipo de cambio de la API y actualizar los valores
  const getExchangeRate = async (currency) => {
    const baseURL =
      "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/";
    const urlToFetch = baseURL + currency;
  
    try {
      const response = await fetch(urlToFetch);
      if (response.ok) {
        const jsonResponse = await response.json();
        console.log(jsonResponse);
        return jsonResponse;
      }
    } catch (error) {
      console.log(error);
    }
  };

  
async function exchangeCurrency (currency) {
  //Which is the current currency
  let currentCurrency = '';
  if (priceNumCard1.innerText.includes("$")) {
    currentCurrency = "usd";
  } else if (priceNumCard1.innerText.includes("€")) {
    currentCurrency = "eur";
  } else {
    currentCurrency = "gbp";
  }


  // Getting which is the new currency based on the user click
  let newCurrency = currency;

  // If the user clicks on USD
  if (newCurrency == "usd.json") {
    // Change from EUR to USD
    if (currentCurrency == "eur") {
      // Getting the exchange rate from EUR to USD, getting the current displayed value in the HTML and multiplying it by the exchange rate
      const eurToUsd = await getExchangeRate("eur/usd.json");
      pricesToChange.forEach((price) => {
        price.innerText =
          "$ " +
          (
            parseFloat(price.innerText.replace(/[^0-9\.-]+/g, "")) *
            eurToUsd.usd
          ).toFixed(2);
      });
      // Change from GBP to USD
    } else if (currentCurrency == "gbp") {
      const gbpToUsd = await getExchangeRate("gbp/usd.json");
      pricesToChange.forEach((price) => {
        price.innerText =
          "$ " +
          (
            parseFloat(price.innerText.replace(/[^0-9\.-]+/g, "")) *
            gbpToUsd.usd
          ).toFixed(2);
      });
    }

    // If the user clicks on EUR
  } else if (newCurrency == "eur.json") {
    // Change from USD to EUR
    if (currentCurrency == "usd") {
      const usdToEur = await getExchangeRate("usd/eur.json");
      pricesToChange.forEach((price) => {
        price.innerText =
          "€ " +
          (
            parseFloat(price.innerText.replace(/[^0-9\.-]+/g, "")) *
            usdToEur.eur
          ).toFixed(2);
      });
      // Change from GBP to EUR
    } else if (currentCurrency == "gbp") {
      const gbpToEur = await getExchangeRate("gbp/eur.json");
      pricesToChange.forEach((price) => {
        price.innerText =
          "€ " +
          (
            parseFloat(price.innerText.replace(/[^0-9\.-]+/g, "")) *
            gbpToEur.eur
          ).toFixed(2);
      });
    }

    // If the user clicks on GBP
  } else {
    // Change from USD to GBP
    if (currentCurrency == "usd") {
      const usdToGbp = await getExchangeRate("usd/gbp.json");
      pricesToChange.forEach((price) => {
        price.innerText =
          "£ " +
          (
            parseFloat(price.innerText.replace(/[^0-9\.-]+/g, "")) *
            usdToGbp.gbp
          ).toFixed(2);
      });
      // Change from EUR to GBP
    } else if (currentCurrency == "eur") {
      const eurToGbp = await getExchangeRate("eur/gbp.json");
      pricesToChange.forEach((price) => {
        price.innerText =
          "£ " +
          (
            parseFloat(price.innerText.replace(/[^0-9\.-]+/g, "")) *
            eurToGbp.gbp
          ).toFixed(2);
      });
    }
  }
}

//CLICK TO THE BUTTONS
btnEuro.addEventListener('click', () => {
    btnEuro.classList.add('active');
    btnUsd.classList.remove('active');
    btnPound.classList.remove('active');
    exchangeCurrency("eur.json");
    
})
btnUsd.addEventListener('click', () => {
    btnUsd.classList.add('active');
    btnEuro.classList.remove('active');
    btnPound.classList.remove('active');
    exchangeCurrency("usd.json");
})
btnPound.addEventListener('click', () => {
    btnPound.classList.add('active');
    btnUsd.classList.remove('active');
    btnEuro.classList.remove('active');
    exchangeCurrency("gbp.json");
})


//SLIDER IMAGES
class Slider{
  constructor(id){
    this.id = document.getElementById('slider');
    this.contador = 0;
    this.images = [
      'images/slider-phone.jpg',
      'images/slider-person.jpg',
      '/images/slider-person1.jpg',
      '/images/slider-table.jpg',
      '/images/slider-computer.jpg'
    ];
    this.rightBtn = document.querySelector('.right-arrow');
    this.leftBtn = document.querySelector('.left-arrow');
    this.buttonTag = document.querySelector('.button-container');
    this.buttonDot1 = document.getElementById('1');
    this.buttonDot2 = document.querySelector('.button-dot__2');
    this.buttonDot3 = document.querySelector('.button-dot__3');
    this.buttonDot4 = document.querySelector('.button-dot__4');
    this.buttonDot5 = document.querySelector('.button-dot__5');
  }
  loadFirstImg(){
    document.addEventListener('DOMContentLoaded', () => {
      document.imageSection.src = this.images[0];
      this.buttonDot1.classList.add('slider-button-dot-white');
    })  
  }
  moveRight(){
    this.rightBtn.addEventListener('click', () => {
      this.contador++;
      if(this.contador > this.images.length -1){
        this.contador = 0;
      }
      document.imageSection.src = this.images[this.contador];
      if(this.contador == 0){
        this.addFirstBtn();
      }else if(this.contador == 1){
        this.addSecBtn();
      }else if(this.contador == 2){
        this.addThirBtn();
      }else if(this.contador == 3){
        this.addFortBtn();
      }else if(this.contador == 4){
        this.addFivBtn();
      }
    })
  }
  moveLeft(){
    this.leftBtn.addEventListener('click', () => {
      this.contador--;
      if(this.contador < 0){
        this.contador = this.images.length -1;
      }
      document.imageSection.src = this.images[this.contador];
      if(this.contador == 0){
        this.addFirstBtn();
      }else if(this.contador == 1){
        this.addSecBtn();
      }else if(this.contador == 2){
        this.addThirBtn();
      }else if(this.contador == 3){
        this.addFortBtn();
      }else if(this.contador == 4){
        this.addFivBtn();
      }
    })
  }
  buttonImg(){
    this.buttonTag.addEventListener('click', (e) => {
      if(e.target.id == 1){
        document.imageSection.src = this.images[0];
        this.contador = 0;
        this.addFirstBtn();
      }else if(e.target.id == 2){
        document.imageSection.src = this.images[1];
        this.contador = 1;
        this.addSecBtn();

      }else if(e.target.id == 3){
        document.imageSection.src = this.images[2];
        this.contador = 2;
        this.addThirBtn()
      }else if(e.target.id == 4){
        document.imageSection.src = this.images[3];
        this.contador = 3;
        this.addFortBtn();
      }else if(e.target.id == 5){
        document.imageSection.src = this.images[4];
        this.contador = 4;
        this.addFivBtn()
      }
      })
  }
  addFirstBtn(){
    this.buttonDot1.classList.add('slider-button-dot-white');
    this.buttonDot2.classList.remove('slider-button-dot-white');
    this.buttonDot3.classList.remove('slider-button-dot-white');
    this.buttonDot4.classList.remove('slider-button-dot-white');
    this.buttonDot5.classList.remove('slider-button-dot-white');
  }
  addSecBtn(){
    this.buttonDot1.classList.remove('slider-button-dot-white');
    this.buttonDot2.classList.add('slider-button-dot-white');
    this.buttonDot3.classList.remove('slider-button-dot-white');
    this.buttonDot4.classList.remove('slider-button-dot-white');
    this.buttonDot5.classList.remove('slider-button-dot-white');
  }
  addThirBtn(){
    this.buttonDot1.classList.remove('slider-button-dot-white');
    this.buttonDot2.classList.remove('slider-button-dot-white');
    this.buttonDot3.classList.add('slider-button-dot-white');
    this.buttonDot4.classList.remove('slider-button-dot-white');
    this.buttonDot5.classList.remove('slider-button-dot-white');
  }
  addFortBtn(){
    this.buttonDot1.classList.remove('slider-button-dot-white');
    this.buttonDot2.classList.remove('slider-button-dot-white');
    this.buttonDot3.classList.remove('slider-button-dot-white');
    this.buttonDot4.classList.add('slider-button-dot-white');
    this.buttonDot5.classList.remove('slider-button-dot-white');
  }
  addFivBtn(){
    this.buttonDot1.classList.remove('slider-button-dot-white');
    this.buttonDot2.classList.remove('slider-button-dot-white');
    this.buttonDot3.classList.remove('slider-button-dot-white');
    this.buttonDot4.classList.remove('slider-button-dot-white');
    this.buttonDot5.classList.add('slider-button-dot-white');
  }
}

const sliderClass = new Slider('slider');
sliderClass.loadFirstImg();
sliderClass.moveRight();
sliderClass.moveLeft();
sliderClass.buttonImg();
