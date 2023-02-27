   var buttonHide =  document.querySelector('.button-hide');
   var buttonShow = document.querySelector('.button-show');
   var swiperCont = document.querySelector('.swiper')
   buttonShow.classList.add('button-none');
   buttonHide.classList.add('button-none');
   

if (window.screen.width <= 767) {  
var swiper = new Swiper('.swiper', {
   pagination: {
      el: '.swiper-pagination',   
      clickable:false,
   },
  freeMode: true,
   breakpoints: {
   300: {
      slidesPerView: 1.3,
   },
   500: {
      slidesPerView: 2.2,   
   },
   690: {
      slidesPerView: 2.7, 
   }
   }
 });
}

   if(window.screen.width >= 767) {  
      buttonShow.classList.remove('button-none');
      buttonShow.addEventListener('click', function (evt) {
      evt.preventDefault();
      buttonHide.classList.remove('button-none');
      buttonShow.classList.add('button-none');
      swiperCont.classList.add('swiper-button-active')
      })

      buttonHide.addEventListener('click', function (evt) {
         evt.preventDefault();
         buttonHide.classList.add('button-none');
         buttonShow.classList.remove('button-none');
         swiperCont.classList.remove('swiper-button-active')
         })
   }

   





