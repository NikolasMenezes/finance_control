import { defineTheme } from "./utils/theme.js";
import { closeMenu, openMenu } from "./utils/menu.js";
import { authService } from "./service/AuthService.js";
import { accountService } from "./service/AccountService.js";
import { categoriesByType } from "./data/categories-by-type.js";
import { formatCurrency } from "./utils/formatCurrency.js";

const logoutTrigger = document.querySelectorAll(".logout-trigger");
const openMenuBtn = document.querySelector("#menu-trigger");
const closeMenuBtn = document.querySelector("#close-menu-trigger");
const menuMobileContainer = document.querySelector("#menu-mobile");
const transactionTypeSelect = document.querySelector(
  "#transaction-type-select"
);
const categorySelect = document.querySelector("#category-select");
const moneyValueInput = document.querySelector("#value");
const accountSelect = document.querySelector("#accounts-select")

moneyValueInput.addEventListener("input", ({ target }) => {
  target.value = formatCurrency(target.value);
});

defineTheme();

function renderOptions(select, data) {
  while (select.options.length > 1) {
    select.remove(select.options.length - 1);
  }
  for (const category of data) {
    const option = new Option(category.name, category.balance);
    select.add(option);
  }
}

function handleTransactionTypeChange({ target }) {
  categorySelect.disabled = false;

  const type = target.options[target.selectedIndex].value;

  renderOptions(categorySelect, categoriesByType[type]);
}

async function renderAccountsOnSelect(){
  const accounts = await accountService.get()
  
  renderOptions(accountSelect,accounts)
}

transactionTypeSelect.addEventListener("change", handleTransactionTypeChange);
openMenuBtn.addEventListener("click", () => openMenu(menuMobileContainer));
closeMenuBtn.addEventListener("click", () => closeMenu(menuMobileContainer));
logoutTrigger.forEach((trigger) =>
  trigger.addEventListener("click", authService.logout)
);
renderAccountsOnSelect()