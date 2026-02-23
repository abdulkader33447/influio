import Swiper from "swiper";
import { Autoplay, Navigation, EffectFade, Pagination } from "swiper/modules";

let testimonialSlider1 = document.querySelectorAll(".testimonial-slider");

testimonialSlider1?.forEach((carousel) => {
  const swiper = new Swiper(carousel, {
    // loop: true,
    spaceBetween: 24,
    speed: 600,
    spaceBetween: 24,
    slidesPerView: 2,

    navigation: {
      nextEl: carousel.querySelector(".swiper-next"),
      prevEl: carousel.querySelector(".swiper-prev"),
    },

    breakpoints: {
      768: {
        slidesPerView: 2,
      },
      1280: {
        slidesPerView: 3,
      },
    },

    modules: [Navigation],
  });
});
