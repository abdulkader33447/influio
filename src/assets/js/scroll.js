//05. header position set
const scrollButton = document.querySelector(".scrollButton");
window.addEventListener("scroll", function () {
  const mainHeader = document.querySelector(".header");
  const hiddenItems = document.querySelectorAll(".hiddenItem");
  if (mainHeader) {
    if (window.scrollY > 1) {
      mainHeader.classList.add("headerFixed");
      mainHeader.classList.remove("headerAbsolute");

      hiddenItems.forEach((item) => {
        item.classList.add("hidden");
      });
    } else {
      mainHeader.classList.add("headerAbsolute");
      mainHeader.classList.remove("headerFixed");

      hiddenItems.forEach((item) => {
        item.classList.remove("hidden");
      });
    }
  }

  if (scrollButton) {
    if (window.scrollY > 200) {
      scrollButton.classList.remove("scrollButtonShow");
      scrollButton.classList.add("scrollButtonShow");
    } else {
      scrollButton.classList.remove("scrollButtonShow");
      scrollButton.classList.add("scrollButtonHide");
    }
  }
});

// Scroll to top functionality
scrollButton &&
  scrollButton.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
