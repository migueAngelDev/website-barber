const swiper_hairstyles = new Swiper('.swiper-hairstyles', {
    // Optional parameters
    direction: 'horizontal',
    loop: false,
    //uniqueNavElements: true,
    effect: 'slide',
    slidesPerView: 2,

    breakpoints: {
      576: {
        slidesPerView: 3,
      },
    },

    pagination: {
        el: '.swiper-pagination',
      },


    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });