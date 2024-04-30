import { defineTheme } from "./utils/theme.js";
import { closeMenu, openMenu } from "./utils/menu.js";
import { authService } from "./service/AuthService.js";

const logoutTrigger = document.querySelectorAll(".logout-trigger");
const openMenuBtn = document.querySelector("#menu-trigger");
const closeMenuBtn = document.querySelector("#close-menu-trigger");
const menuMobileContainer = document.querySelector("#menu-mobile");

const navigationItems = document.querySelectorAll(".navigation-item");

navigationItems.forEach((item) =>
  item.addEventListener("click", ({ target }) => {
    const contentId = target.getAttribute("content-id");

    showClickedTab(contentId);
    navigationItems.forEach((element) =>
      element.classList.remove("bg-sky-600")
    );
    target.classList.add("bg-sky-600");
  })
);

function showClickedTab(clicked) {
  const elements = ["my_registration", "cards", "bank_accounts"].map((id) =>
    document.getElementById(id)
  );

  const [selectedTab] = elements.filter((element) => element.id === clicked);
  selectedTab.classList.remove("hidden");
  elements.map((element) => {
    if (element !== selectedTab) {
      element.classList.add("hidden");
    }
  });
}

defineTheme();
openMenuBtn.addEventListener("click", () => openMenu(menuMobileContainer));
closeMenuBtn.addEventListener("click", () => closeMenu(menuMobileContainer));

logoutTrigger.forEach((trigger) =>
  trigger.addEventListener("click", authService.logout)
);
