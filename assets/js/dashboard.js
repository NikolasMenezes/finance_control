import { userService } from "./service/UserService.js";
import { greetingByTime } from "./utils/greeting.js";
import { logout } from "./utils/logout.js";
import { defineTheme } from "./utils/theme.js";
import { openMenu, closeMenu } from "./utils/menu.js";

const greetingSpan = document.querySelector("#greeting");
const logoutTrigger = document.querySelectorAll(".logout-trigger");
const openMenuBtn = document.querySelector("#menu-trigger");
const closeMenuBtn = document.querySelector("#close-menu-trigger");
const menuMobileContainer = document.querySelector("#menu-mobile");

const ctx = document.getElementById("myChart");

new Chart(ctx, {
  type: "pie",
  data: {
    labels: ["Gastos", "Receita"],
    datasets: [
      {
        data: [90, 10],
        borderWidth: 1,
      },
    ],
    colors: ["#ff0000", "#0000ff"],
  },
  options: {
    responsive: false,
  },
});

async function loadUserInfo() {
  const { name } = await userService.get();

  console.log(name);
}

defineTheme();
greetingSpan.textContent = greetingByTime();
// loadUserInfo();
logoutTrigger.forEach((trigger) => trigger.addEventListener("click", logout));
openMenuBtn.addEventListener("click", () => openMenu(menuMobileContainer));
closeMenuBtn.addEventListener("click", () => closeMenu(menuMobileContainer));
