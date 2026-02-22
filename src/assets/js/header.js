//01. dropdown menu
document.querySelectorAll("[data-dropdown-toggle]")?.forEach((button) => {
  button.addEventListener("click", () => {
    const dropdown = button.nextElementSibling;
    if (dropdown && dropdown.hasAttribute("data-dropdown")) {
      dropdown.classList.toggle("subMenuClose");
      dropdown.classList.toggle("subMenuOpen");
    }
  });
});

//02. mobile menu
const mobileMenu = document.querySelector(".mobile-menu");
const mobileMenuOpenButton = document.querySelector(".mobile-menu-open");
const mobileMenuCloseButton = document.querySelector(".mobile-menu-close");

if (mobileMenu) {
  // Open mobile menu
  mobileMenuOpenButton?.addEventListener("click", () => {
    mobileMenu.classList.remove(
      "-translate-x-full",
      "opacity-0",
      "invisible",
    );
    mobileMenu.classList.add("translate-x-0", "opacity-100", "visible");

    // Add outside click listener
    document.addEventListener("click", handleClickOutside);
  });

  // Close mobile menu
  mobileMenuCloseButton?.addEventListener("click", () => {
    closeMobileMenu();
  });

  function closeMobileMenu() {
    mobileMenu?.classList.remove("translate-x-0", "opacity-100", "visible");
    mobileMenu?.classList.add("-translate-x-full", "opacity-0", "invisible");

    // Remove outside click listener
    document.removeEventListener("click", handleClickOutside);
  }

  function handleClickOutside(event) {
    const isClickInsideMenu = mobileMenu?.contains(event.target);
    const isClickOnOpenBtn = mobileMenuOpenButton?.contains(event.target);

    if (!isClickInsideMenu && !isClickOnOpenBtn) {
      closeMobileMenu();
    }
  }
}

// active menu
const path = location.pathname;
const menuList = document.querySelectorAll(".menu");
const subMenuList = document.querySelectorAll(".subMenuItem");

menuList &&
  menuList.forEach((menu) => {
    const href = menu.getAttribute("href");

    // Extract base URL from href by removing './' and everything after the last '/'
    const newBaseUrl = href?.replace("./", "").replace(/\/[^\/]*$/, "") || "";

    // Check if the current page's pathname ends with the newBaseUrl
    if (
      path.endsWith(newBaseUrl) ||
      (path === "/" && newBaseUrl === "index.html")
    ) {
      menu.classList.add("activeHeaderMenu");
    }
  });

subMenuList &&
  subMenuList.forEach((subMenu) => {
    const href = subMenu.getAttribute("href");
    // Extract base URL from href by removing './' and everything after the last '/'
    const newBaseUrl = href?.replace("./", "").replace(/\/[^\/]*$/, "") || "";


    // Check if the current page's pathname ends with the newBaseUrl
    if (
      path.endsWith(newBaseUrl) ||
      (path === "/" && newBaseUrl === "index.html")
    ) {
      subMenu.classList.add("text-secondary");

      const parentDiv = subMenu.closest("div");

      parentDiv
        ?.querySelector(".subMenuTitle")
        ?.classList.add("text-secondary");
    }
  });
