//create tab resubale function
function createTab(tabName, activeButtonClassList, inactiveButtonClassList) {
  const tabButtons = tabName?.querySelectorAll(".tab-item");
  if (tabButtons) {
    tabButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const tabNameText = button.innerText
          .toLowerCase()
          .replace(/\s+/g, "-")
          .trim();
        tabButtons.forEach((otherButton) => {
          const otherTabName = otherButton.innerText
            .toLowerCase()
            .replace(/\s+/g, "-")
            .trim();
          activeButtonClassList.forEach((className) => {
            otherButton.classList.toggle(
              className,
              tabNameText === otherTabName,
            );
          });
          inactiveButtonClassList.forEach((className) => {
            otherButton.classList.toggle(
              className,
              tabNameText !== otherTabName,
            );
          });
          const otherTabContent = tabName.querySelector(`#${otherTabName}`);
          otherTabContent.classList.toggle(
            "animationOne",
            tabNameText === otherTabName,
          );
          otherTabContent.classList.toggle(
            "hidden",
            tabNameText !== otherTabName,
          );
          otherTabContent.classList.toggle(
            "animationTwo",
            tabNameText !== otherTabName,
          );
        });
      });
    });
  }
}

// Destination tab
const contactsTab = document.querySelector(".destination-tab");
createTab(contactsTab, ["bg-[#DFF5E8]"], ["bg-transpatent"]);

// Description Tab
// const descriptionTab = document.querySelector(".description-tab");
// createTab(descriptionTab, ["bg-secondary"], ["bg-n20"]);

//create tab resubale function
function createTab2(tabName, activeButtonClassList, inactiveButtonClassList) {
  const tabButtons = tabName?.querySelectorAll("[data-tab-name]");

  if (tabButtons) {
    tabButtons.forEach((item) => {
      item.addEventListener("click", () => {
        tabButtons.forEach((otherItem) => {
          // Toggle button classes
          activeButtonClassList.forEach((className) => {
            otherItem.classList.toggle(className, item === otherItem);
          });

          inactiveButtonClassList.forEach((className) => {
            otherItem.classList.toggle(className, item !== otherItem);
          });

          // Get correct tab content
          const tabId = otherItem.dataset.tabName;
          const otherTabContent = tabName.querySelector(`#${tabId}`);

          if (!otherTabContent) return;

          otherTabContent.classList.toggle("animationOne", item === otherItem);
          otherTabContent.classList.toggle("hidden", item !== otherItem);
          otherTabContent.classList.toggle("animationTwo", item !== otherItem);
        });
      });
    });
  }
}

const descriptionTab2 = document.querySelector(".destination-tab");
createTab2(
  descriptionTab2,
  ["bg-primary", "text-white", "border-primary"],
  ["border-black"],
);
