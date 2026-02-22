import AOS from "aos";
import "../css/style.css";
import "./dropdown.js";
import "./swiper-slides.js";
import "./header.js";
import "./SelectItemModal.js";
import "./scroll.js";
import "./odometer.js";
import "./OdometerCounter.js";
import "aos/dist/aos.css";
import "./tab.js";
import "./ShowPassword.js";
import createGlobe from "cobe";

// Initialize AOS
AOS.init();

// Refer section image change on hove
const referItems = document.querySelectorAll(".refer-item");
const referImg = document.querySelector(".refer-img");

referItems.forEach((item) => {
  item.addEventListener("mouseover", () => {
    const imgSrc = item.getAttribute("data-img");
    referImg.src = imgSrc;
    referItems.forEach((item) => {
      item.classList.remove("active");
    });
    item.classList.add("active");
  });
});

// FAQ Item Toggle
let accordionAreas = document.querySelectorAll(".faq-accordion-area");

accordionAreas.forEach((area) => {
  let accordion = area.querySelector(".faq-accordion");
  let faqAnswer = accordion.nextElementSibling;
  let icon = accordion.querySelector("i");

  accordion.addEventListener("click", function () {
    let isOpen = area.classList.contains("active");

    // Close all accordions
    accordionAreas.forEach((item) => {
      item.classList.remove("active");
      let content = item.querySelector(".faq-accordion").nextElementSibling;
      content.style.height = null;
      let itemIcon = item.querySelector("i");
      itemIcon?.classList.remove("ph-minus");
      itemIcon?.classList.add("ph-plus");
    });

    // If this accordion was not already open, open it
    if (!isOpen) {
      area.classList.add("active");
      faqAnswer.style.height = faqAnswer.scrollHeight + "px";
      icon?.classList.remove("ph-plus");
      icon?.classList.add("ph-minus");
    }
  });
});

