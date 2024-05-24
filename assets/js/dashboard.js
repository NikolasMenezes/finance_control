import { userService } from "./service/UserService.js";
import { greetingByTime } from "./utils/greeting.js";
import { defineTheme } from "./utils/theme.js";
import { openMenu, closeMenu } from "./utils/menu.js";
import { authService } from "./service/AuthService.js";
import { transactionService } from "./service/TransactionService.js";
import { renderTransactions } from "./dashboard/render-transaction.js";

const greetingSpan = document.querySelector("#greeting");
const logoutTrigger = document.querySelectorAll(".logout-trigger");
const openMenuBtn = document.querySelector("#menu-trigger");
const closeMenuBtn = document.querySelector("#close-menu-trigger");
const menuMobileContainer = document.querySelector("#menu-mobile");
const userNameSpan = document.querySelector("#user-name");

async function loadUserInfo() {
  const { name } = await userService.get();

  userNameSpan.textContent = await name;
}

async function loadLastTransactions() {
  const transactions = await transactionService.getRecent();
  const transactionsContainer = document.querySelector(
    "#transactions-container"
  );

  if (transactions.length === 0) {
    transactionsContainer.innerHTML += "Nenhum registro foi encontrado!";
    return;
  }

  transactions.map((transaction) =>
    renderTransactions(transactionsContainer, transaction)
  );
}

async function loadChart() {
  const movement = await transactionService.getFinancialMovement();

  const ctx = document.getElementById("myChart");

  new Chart(ctx, {
    type: "pie",
    data: {
      labels: ["Receita"],
      datasets: [
        {
          data: [movement.IncomeTotal, movement.ExpenseTotal],
          borderWidth: 1,
        },
      ],
      colors: ["#ff0000", "#0000ff"],
    },
    options: {
      responsive: false,
    },
  });
}

defineTheme();
loadUserInfo();
loadLastTransactions();
loadChart();
greetingSpan.textContent = greetingByTime();
logoutTrigger.forEach((trigger) =>
  trigger.addEventListener("click", authService.logout)
);
openMenuBtn.addEventListener("click", () => openMenu(menuMobileContainer));
closeMenuBtn.addEventListener("click", () => closeMenu(menuMobileContainer));
