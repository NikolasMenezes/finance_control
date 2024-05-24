import { defineTheme } from "./utils/theme.js";
import { closeMenu, openMenu } from "./utils/menu.js";
import { authService } from "./service/AuthService.js";
import { accountService } from "./service/AccountService.js";
import { addBalanceStyle } from "./utils/addBalanceStyle.js";
import { renderAccountElement } from "./settings/render-account-element.js";
import { formatCurrency } from "./utils/formatCurrency.js";

const logoutTrigger = document.querySelectorAll(".logout-trigger");
const openMenuBtn = document.querySelector("#menu-trigger");
const closeMenuBtn = document.querySelector("#close-menu-trigger");
const menuMobileContainer = document.querySelector("#menu-mobile");

const navigationItems = document.querySelectorAll(".navigation-item");

const totalBalanceSpan = document.querySelector("#balance-span");
const accountsContainer = document.querySelector("#accounts-container");

// acounts screen

const balanceInput = document.querySelector("#balance");
const accountNameInput = document.querySelector("#account-name");
const createAccountBtn = document.querySelector("#create-account-btn");

function deleteAccount(e) {
  const accountId = e.target.getAttribute("account_id");

  accountService.delete(accountId);
}

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
  selectedTab.classList.remove("flex");
  elements.map((element) => {
    if (element !== selectedTab) {
      element.classList.add("hidden");
      element.classList.remove("flex");
    }
  });
}

async function loadAccountInfo() {
  const accounts = await accountService.get();

  let balance = 0;
  accounts.map((account) => {
    balance += account.balance;

    renderAccountElement(accountsContainer, {
      id: account.id,
      name: account.name,
      balance: account.balance,
    });
  });

  totalBalanceSpan.textContent = balance.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
  addBalanceStyle(totalBalanceSpan, balance);
}

defineTheme();
loadAccountInfo();
openMenuBtn.addEventListener("click", () => openMenu(menuMobileContainer));
closeMenuBtn.addEventListener("click", () => closeMenu(menuMobileContainer));

logoutTrigger.forEach((trigger) =>
  trigger.addEventListener("click", authService.logout)
);

function createAccount() {
  const payload = {
    balance:
      parseFloat(
        (Number(balanceInput.value.replace(/\D/g, "")) / 100).toFixed(2)
      ) ?? 0,
    name: accountNameInput.value,
  };

  accountService.create(payload);

  accountNameInput.value = "";
  balanceInput.value = "";
}

balanceInput.addEventListener("input", ({ target }) => {
  target.value = formatCurrency(target.value);
});

createAccountBtn.addEventListener("click", createAccount);

setTimeout(async () => {
  const deleteAccountBtns = document.querySelectorAll(".delete-account-btns");

  deleteAccountBtns.forEach((btn) => {
    btn.addEventListener("click", deleteAccount);
  });

  await import("./utils/popup-modal.js");
}, 3000);
