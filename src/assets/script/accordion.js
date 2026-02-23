const headers = document.querySelectorAll(".accordion-header");

  headers.forEach(header => {
    header.addEventListener("click", () => {

      const content = header.nextElementSibling;
      const icon = header.querySelector(".accordion-icon");

      // Close all other items
      document.querySelectorAll(".accordion-content").forEach(item => {
        if (item !== content) {
          item.style.maxHeight = null;
          item.previousElementSibling
              .querySelector(".accordion-icon")
              .classList.remove("rotate-180");
        }
      });

      // Toggle current
      if (content.style.maxHeight) {
        content.style.maxHeight = null;
        icon.classList.remove("rotate-180");
      } else {
        content.style.maxHeight = content.scrollHeight + "px";
        icon.classList.add("rotate-180");
      }

    });
  });
