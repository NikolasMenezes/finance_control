import { defineTheme } from "./utils/theme.js";
import { showToast } from "./utils/toast.js";
import { validFields } from "./utils/validateFields.js";
import { userService } from "./service/UserService.js";

const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const ageInput = document.querySelector("#age");
const passwordInput = document.querySelector("#password");
const confirmPasswordInput = document.querySelector("#confirm-password");
const registerBtn = document.querySelector("#register-btn");

function passwordsMatches(firstPass, SecondPass) {
  return firstPass === SecondPass;
}

async function registerUser(e) {
  e.preventDefault();

  const userInfo = {
    name: nameInput.value,
    email: emailInput.value,
    password: passwordInput.value,
    age: ageInput.value,
  };

  if (!passwordsMatches(passwordInput.value, confirmPasswordInput.value)) {
    showToast("Senhas não coincidem!", "error");
    return;
  }

  if (!validFields(userInfo)) {
    showToast("Preencha todos os campos!", "error");
    return;
  }
  userService.create(userInfo);
}

defineTheme();
registerBtn.addEventListener("click", registerUser);
