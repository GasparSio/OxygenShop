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
          ).toFixed(0);
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
          ).toFixed(0);
      });
    }

    // If the user clicks on EUR
  } else if (newCurrency == "eur.json") {
    // Change from USD to EUR
    if (currentCurrency == "usd") {
      const usdToEur = await getExchangeRate("usd/eur.json");
      pricesToChange.forEach((price) => {
        price.innerText =
        (
          parseFloat(price.innerText.replace(/[^0-9\.-]+/g, "")) *
          usdToEur.eur
        ).toFixed(0) + " €";
      });
      // Change from GBP to EUR
    } else if (currentCurrency == "gbp") {
      const gbpToEur = await getExchangeRate("gbp/eur.json");
      pricesToChange.forEach((price) => {
        price.innerText =
          (
            parseFloat(price.innerText.replace(/[^0-9\.-]+/g, "")) *
            gbpToEur.eur
          ).toFixed(0) +" €";
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
          ).toFixed(0);
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
          ).toFixed(0);
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
