import { URL_API } from "../constants/app.js";
import { token } from "../constants/token.js";
import { redirector } from "../utils/redirector.js";
import { showToast } from "../utils/toast.js";

class UserService {
  async get() {
    const response = await fetch(URL_API + "/user", {
      headers: {
        Authorization: token,
      },
    });

    if (!response.ok) {
      return showToast("Ocorreu um erro ao buscar as informações!", "error");
    }

    return await response.json();
  }

  async create(payload) {
    const response = await fetch(URL_API + "/User", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (response.ok) {
      showToast("Cadastro realizado com sucesso!");
      setTimeout(() => redirector("/"), 3000);
      return;
    }

    showToast("Algo deu errado!", "error");
  }

  async update(payload) {
    const response = await fetch(URL_API + "/user", {
      method: "Put",
      headers: {
        Authorization: token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      return showToast("Ocorreu um erro ao atualizar as informações!", "error");
    }

    return { status: response.statusCode, data: await response.json() };
  }
}

export const userService = new UserService();
