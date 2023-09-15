const swiper = new Swiper('.swiper1', {
  // Optional parameters
  loop: true,
  autoplay: {
    delay: 2800,
    disableOnInteraction: false,
  },
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

$(document).ready(function(){
  $('#read').on('click',function(){
    $('.paragraph').toggle(2000);
  });
})
$(document).ready(function(){
  $('#button1').click(function(){
    $('.letter').toggle(1400);
  });
})

var swiper1 = new Swiper(".mySwiper", {
  spaceBetween: 10,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesProgress: true,
});
var swiper2 = new Swiper(".mySwiper2", {
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: swiper,
  },
});



  


