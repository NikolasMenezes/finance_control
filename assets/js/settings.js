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
const userNameInput = document.querySelector("#name-input");
const emailInput = document.querySelector("#email-input");
const ageInput = document.querySelector("#age-input");

const saveUserModificationBtn = document.querySelector(
  "#save-modification-btn"
);

async function loadUserInfo() {
  const { name, email, age } = await userService.get();

  userNameSpan.textContent = name;
  userNameInput.value = name;
  userEmailSpan.textContent = email;
  emailInput.value = email;
  ageInput.value = age;
  userProfileIcon.innerHTML = getNameInitials(name) ?? "G";
}

async function updateUser() {
  const payload = {
    name: userNameInput.value,
    age: ageInput.value,
    email: emailInput.value,
  };

  const { status, data } = await userService.update(payload);

  console.log("status", status);
  console.log("data", data);
}

defineTheme();
loadUserInfo();
openMenuBtn.addEventListener("click", () => openMenu(menuMobileContainer));
closeMenuBtn.addEventListener("click", () => closeMenu(menuMobileContainer));
saveUserModificationBtn.addEventListener("click", updateUser);

logoutTrigger.forEach((trigger) =>
  trigger.addEventListener("click", authService.logout)
);
