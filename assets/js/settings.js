import { logout } from "./utils/logout.js";
import { defineTheme } from "./utils/theme.js";
import { closeMenu, openMenu } from "./utils/menu.js";

const logoutTrigger = document.querySelectorAll(".logout-trigger");
const openMenuBtn = document.querySelector("#menu-trigger");
const closeMenuBtn = document.querySelector("#close-menu-trigger");
const menuMobileContainer = document.querySelector("#menu-mobile");

defineTheme();
openMenuBtn.addEventListener("click", () => openMenu(menuMobileContainer));
closeMenuBtn.addEventListener("click", () => closeMenu(menuMobileContainer));
logoutTrigger.forEach((trigger) => trigger.addEventListener("click", logout));
