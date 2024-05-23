import { defineTheme } from "./utils/theme.js";
import { closeMenu, openMenu } from "./utils/menu.js";
import { authService } from "./service/AuthService.js";
import { accountService } from "./service/AccountService.js";
import { categoriesByType } from "./data/categories-by-type.js";
import { formatCurrency } from "./utils/formatCurrency.js";
import { transactionService } from "./service/TransactionService.js";
import { validFields } from "./utils/validateFields.js";
import { showToast } from "./utils/toast.js";

const logoutTrigger = document.querySelectorAll(".logout-trigger");
const openMenuBtn = document.querySelector("#menu-trigger");
const closeMenuBtn = document.querySelector("#close-menu-trigger");
const menuMobileContainer = document.querySelector("#menu-mobile");
const transactionTypeSelect = document.querySelector(
  "#transaction-type-select"
);
const categorySelect = document.querySelector("#category-select");
const moneyValueInput = document.querySelector("#value");
const accountSelect = document.querySelector("#accounts-select");
const descriptionInput = document.querySelector("#description");
const doneCheckbox = document.querySelector("#done-checkbox");
const dateInput = document.querySelector("#date");
const saveTransactionBtn = document.querySelector("#save-transaction-btn");

moneyValueInput.addEventListener("input", ({ target }) => {
  target.value = formatCurrency(target.value);
});

defineTheme();

function renderOptions(select, data) {
  while (select.options.length > 1) {
    select.remove(select.options.length - 1);
  }
  for (const category of data) {
    const option = new Option(category.name, category.id);
    select.add(option);
  }
}

function handleTransactionTypeChange({ target }) {
  categorySelect.disabled = false;

  const type = target.options[target.selectedIndex].value;

  renderOptions(categorySelect, categoriesByType[type]);
}

async function renderAccountsOnSelect() {
  const accounts = await accountService.get();
  console.log(accounts);
  renderOptions(accountSelect, accounts);
}

async function addTransaction(e) {
  e.preventDefault();

  const payload = {
    date: dateInput.value,
    type:
      transactionTypeSelect.options[transactionTypeSelect.selectedIndex].value,
    description: descriptionInput.value,
    value:
      parseFloat(
        (Number(moneyValueInput.value.replace(/\D/g, "")) / 100).toFixed(2)
      ) ?? 0,
    category: categorySelect.options[categorySelect.selectedIndex].value,
  };

  const account = accountSelect.options[accountSelect.selectedIndex].value;

  console.log(payload);
  if (!validFields(payload)) {
    showToast("Preencha todos os campos corretamente", "error");
    return;
  }

  if (
    payload["category"] == "Selecione ..." ||
    payload["type"] == "Selecione ..." ||
    account == "Selecione ..."
  ) {
    showToast("Preencha todos os campos corretamente", "error");
    return;
  }
  payload["done"] = doneCheckbox.checked;

  transactionService.create(account, payload);
}

transactionTypeSelect.addEventListener("change", handleTransactionTypeChange);
openMenuBtn.addEventListener("click", () => openMenu(menuMobileContainer));
closeMenuBtn.addEventListener("click", () => closeMenu(menuMobileContainer));
logoutTrigger.forEach((trigger) =>
  trigger.addEventListener("click", authService.logout)
);
renderAccountsOnSelect();
saveTransactionBtn.addEventListener("click", addTransaction);
