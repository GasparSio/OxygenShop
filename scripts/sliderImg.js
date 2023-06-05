

//SLIDER IMAGES
class Slider{
    constructor(id){
      this.id = document.getElementById('slider');
      this.contador = 0;
      this.images = [
        'images/slider1.jpg',
        'images/slider2.jpg',
        'images/slider3.jpg',
        'images/slider4.jpg',
        'images/slider5.jpg',
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
  