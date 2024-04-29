import { URL_API } from "./constants/app.js";
import { authService } from "./service/AuthService.js";
import { redirector } from "./utils/redirector.js";
import { defineTheme } from "./utils/theme.js";
import { showToast } from "./utils/toast.js";
import { validFields } from "./utils/validateFields.js";

const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const loginForm = document.querySelector("#login-form");

async function handleLogin(e) {
  e.preventDefault();

  const loginPayload = {
    email: emailInput.value,
    password: passwordInput.value,
  };

  if (!validFields(loginPayload)) {
    showToast("Preencha os campos corretamente", "error");
    return;
  }

  const { token } = await authService.login(loginPayload);

  localStorage.setItem("token", token);
  redirector("/views/dashboard.html", true);
}

defineTheme();
loginForm.addEventListener("submit", handleLogin);
