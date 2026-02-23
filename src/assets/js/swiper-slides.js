import Swiper from "swiper";
import { Autoplay, Navigation, EffectFade, Pagination } from "swiper/modules";

// Company Slider
let textSlider = document.querySelectorAll(".company-slider");
textSlider?.forEach((carousel) => {
  const swiper = new Swiper(carousel, {
    loop: true,
    speed: 12000,
    spaceBetween: 40,
    slidesPerView: "auto",
    autoplay: {
      delay: 1,
    },
    modules: [Autoplay],
  });
});

let testimonialSlider1 = document.querySelectorAll(".testimonial-slider-1");
testimonialSlider1?.forEach((carousel) => {
  const swiper = new Swiper(carousel, {
    loop: true,
    speed: 12000,
    spaceBetween: 24,
    slidesPerView: "auto",
    autoplay: {
      delay: 1,
    },
    modules: [Autoplay],
  });
});

let testimonialSlider2 = document.querySelectorAll(".testimonial-slider-2");
testimonialSlider2?.forEach((carousel) => {
  const swiper = new Swiper(carousel, {
    loop: true,
    speed: 12000,
    spaceBetween: 24,
    slidesPerView: "auto",
    autoplay: {
      delay: 1,
      reverseDirection: true,
    },
    modules: [Autoplay],
  });
});

let whychooseus = document.querySelectorAll(".why-choose-us");
whychooseus?.forEach((carousel) => {
  const swiper = new Swiper(carousel, {
    loop: true,
    speed: 12000,
    spaceBetween: 12,
    slidesPerView: "auto",
    autoplay: {
      delay: 1,
    },
    modules: [Autoplay],
  });
});

