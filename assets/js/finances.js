import { logout } from "./utils/logout.js";
import { defineTheme } from "./utils/theme.js";

const logoutTrigger = document.querySelector("#logout-trigger");

defineTheme();
logoutTrigger.addEventListener("click", logout);
