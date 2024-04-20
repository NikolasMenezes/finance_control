import { userService } from "./service/UserService.js";
import { greetingByTime } from "./utils/greeting.js";
import { logout } from "./utils/logout.js";
import { defineTheme } from "./utils/theme.js";

const greetingSpan = document.querySelector("#greeting");
const logoutTrigger = document.querySelector("#logout-trigger");

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
  const user = await userService.get();

  console.log(user);
}

defineTheme();
greetingSpan.textContent = greetingByTime();
loadUserInfo();
logoutTrigger.addEventListener("click", logout);
