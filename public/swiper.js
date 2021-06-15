const filmSwiper = new Swiper('.filmSwiper', {
  slidesPerView: 2,
  spaceBetween: 15,
  freeMode: true,
  edgeSwipeThreshold: 30,
  slidesOffsetBefore: 20,
  slidesPerGroup: 2,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    576: {
      slidesPerView: 4,
      slidesOffsetBefore: 30,
    },
    767: {
      slidesPerView: 6,
      slidesOffsetBefore: 40,
    },
    1000: {
      slidesPerView: 8,
      slidesOffsetBefore: 50,
    },
  },
})

const topSwiper = new Swiper('.topSwiper', {
  loop: true,
  effect: 'fade',
  autoplay: {
    delay: 5000,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
})

$('.tabBtn-random').click(function () {
  $('.filmRandom-searchBar').addClass('show')
})
$('.tabBtn-filter').click(function () {
  $('.filmRandom-searchBar').removeClass('show')
})
