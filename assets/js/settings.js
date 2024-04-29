import { defineTheme } from "./utils/theme.js";
import { closeMenu, openMenu } from "./utils/menu.js";
import { userService } from "./service/UserService.js";
import { getNameInitials } from "./utils/getNameInitials.js";
import { authService } from "./service/AuthService.js";

const logoutTrigger = document.querySelectorAll(".logout-trigger");
const openMenuBtn = document.querySelector("#menu-trigger");
const closeMenuBtn = document.querySelector("#close-menu-trigger");
const menuMobileContainer = document.querySelector("#menu-mobile");
const userNameSpan = document.querySelector("#user-name");
const userEmailSpan = document.querySelector("#user-email");
const userProfileIcon = document.querySelector("#profile-icon");

async function loadUserInfo() {
  const { name, email } = await userService.get();

  userNameSpan.textContent = name;
  userEmailSpan.textContent = email;
  userProfileIcon.innerHTML = getNameInitials(name) ?? "G";
}

defineTheme();
loadUserInfo();
openMenuBtn.addEventListener("click", () => openMenu(menuMobileContainer));
closeMenuBtn.addEventListener("click", () => closeMenu(menuMobileContainer));
logoutTrigger.forEach((trigger) =>
  trigger.addEventListener("click", authService.logout)
);
