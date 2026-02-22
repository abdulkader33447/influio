function dropdownModalAndSelect(trigger, modal, openClasses, closeClasses) {
  if (!trigger || !modal) return;

  const selectedItem = trigger.querySelector(".selectedItem") || null;
  const itemList = modal.querySelectorAll(".item");

  function openDropdown() {
    modal.classList.remove(...closeClasses);
    modal.classList.add(...openClasses);
  }

  function closeDropdown() {
    modal.classList.remove(...openClasses);
    modal.classList.add(...closeClasses);
  }

  // Toggle dropdown on click
  trigger.addEventListener("click", (e) => {
    e.stopPropagation();
    if (modal.classList.contains(openClasses[0])) {
      closeDropdown();
    } else {
      openDropdown();
    }
  });

  // Select an item
  itemList.forEach((item) => {
    item.addEventListener("click", (e) => {
      e.stopPropagation();
      if (selectedItem) selectedItem.textContent = item.textContent;
      closeDropdown();
    });
  });

  // Close when clicking outside
  document.addEventListener("click", (e) => {
    if (!trigger.contains(e.target) && !modal.contains(e.target)) {
      closeDropdown();
    }
  });
}

// Classes for animation
const openSelectModalClasses = ["visible", "opacity-100", "translate-y-0"];
const closeSelectModalClasses = ["invisible", "opacity-0", "translate-y-2"];

// Attach to your component
document.querySelectorAll(".selectItemArea").forEach((trigger) => {
  const modal = trigger.parentElement?.querySelector(".selectItemModal");
  dropdownModalAndSelect(
    trigger,
    modal,
    openSelectModalClasses,
    closeSelectModalClasses,
  );
});
