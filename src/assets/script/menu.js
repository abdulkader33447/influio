// Mobile menu toggle
const mobileToggle = document.getElementById("mobile-menu-toggle");
const mobileMenu = document.getElementById("mobile-menu");

if (mobileToggle) {
  mobileToggle.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
  });
}

// change active menu's color
document.addEventListener("DOMContentLoaded", () => {
  const menuButtons = document.querySelectorAll(".dropdown-toggle");

  menuButtons.forEach((button) => {
    button.addEventListener("click", () => {
      // Remove active color from all
      menuButtons.forEach((btn) => {
        btn.classList.remove("text-secondary");
        btn.classList.add("hover:text-secondary");
      });

      // Add active color to clicked
      button.classList.add("text-secondary");
      button.classList.remove("hover:text-secondary");
    });
  });
});
