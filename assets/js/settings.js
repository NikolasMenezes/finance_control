import { logout } from "./utils/logout.js";
import { defineTheme, handleTheme } from "./utils/theme.js";
import { closeMenu, openMenu } from "./utils/menu.js";

const logoutTrigger = document.querySelectorAll(".logout-trigger");
const openMenuBtn = document.querySelector("#menu-trigger");
const closeMenuBtn = document.querySelector("#close-menu-trigger");
const menuMobileContainer = document.querySelector("#menu-mobile");
const themeSelect = document.querySelector("#theme-select");

defineTheme();
openMenuBtn.addEventListener("click", () => openMenu(menuMobileContainer));
closeMenuBtn.addEventListener("click", () => closeMenu(menuMobileContainer));
logoutTrigger.forEach((trigger) => trigger.addEventListener("click", logout));
themeSelect.addEventListener("change", ({ target }) =>
  handleTheme(target.options[target.selectedIndex].value)
);
