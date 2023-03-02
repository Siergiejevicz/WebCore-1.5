let swiperCont = document.querySelector('.swiper');
let button = document.querySelector('.swiper-button');
let swiperBrend = document.querySelector('.main-page');


if (window.screen.width <= 767) { 
  
const swiper = new Swiper('.swiper', {
  
  direction: 'horizontal',
  loop: true,

  
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
    
  },
  freeMode: true,
   clickable: true,
   grabCursor: true,
   slideToClickedSlide: true,
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
 
  mousewheel: {
    invert: true,
  },
  breakpoints: {
   300: {
      slidesPerView: 1.4,
   },
   500: {
      slidesPerView: 2.1,   
   },
   690: {
      slidesPerView: 2.8, 
   }
   }
   
});
}


 if(window.screen.width >= 767) {  
      button.addEventListener('click', function (evt) {
        evt.preventDefault();
        if (button.classList.contains('swiper-button')) {
            button.classList.remove('swiper-button');
            button.classList.add('swiper-button--hide');
           
            button.textContent = 'Скрыть';
            swiperBrend.classList.add('main-page--open')
            swiperCont.classList.add('swiper--open')
        } else if (button.classList.contains('swiper-button--hide')) {
            button.classList.remove('swiper-button--hide');
                button.classList.add('swiper-button');
                button.textContent = 'Показать все';
                swiperBrend.classList.remove('main-page--open')
                swiperCont.classList.remove('swiper--open')
        }
      });
 }
   





