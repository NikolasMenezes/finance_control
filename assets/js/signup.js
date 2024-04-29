import { URL_API } from "./constants/app.js";
import { defineTheme } from "./utils/theme.js";
import { showToast } from "./utils/toast.js";
import { validFields } from "./utils/validateFields.js";

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

  const response = await fetch(URL_API + "/User", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userInfo),
  });

  if (response.ok) {
    showToast("Cadastro realizado com sucesso!");
    return;
  }

  showToast("Algo deu errado!", "error");
}

defineTheme();
registerBtn.addEventListener("click", registerUser);
