//odometer in view function
const odometerElements = document.querySelectorAll(".odometer");

if (odometerElements?.length) {
  odometerElements.forEach((el) => {
    const odometerElementHeight = el.clientHeight;

    document.addEventListener("scroll", odometerFunction);

    function inView() {
      const windowHeight = window.innerHeight;
      const scrollY = window.scrollY;
      const scrollPosition = scrollY + windowHeight;
      // get element position (distance from the top of the page to the bottom of the element)
      const elementPosition =
        el.getBoundingClientRect().top + scrollY + odometerElementHeight;

      // is scroll position greater than element position? (is element in view?)
      if (scrollPosition > elementPosition) {
        return true;
      }
      return false;
    }

    function odometerFunction() {
      // is element in view?
      if (inView()) {
        el.textContent = el.getAttribute("data-odometer-final");
      }
    }
  });
}
