import { URL_API } from "../constants/app.js";
import { token } from "../constants/token.js";
import { showToast } from "../utils/toast.js";
import { redirector } from "../utils/redirector.js";

class AuthService {
  async login(payload) {
    const response = await fetch(URL_API + "/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      showToast("Email e/ou senha inválidos", "error");
      return;
    }

    return await response.json();
  }

  async logout() {
    fetch(URL_API + "/auth/logout", {
      method: "POST",
      headers: {
        Authorization: token,
      },
    });

    redirector("/");
    localStorage.removeItem("token");
  }
}

export const authService = new AuthService();
