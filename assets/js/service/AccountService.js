import { URL_API } from "../constants/app.js";
import { token } from "../constants/token.js";
import { redirector } from "../utils/redirector.js";
import { showToast } from "../utils/toast.js";

class AccountService {
  async get() {
    const response = await fetch(URL_API + "/account/user", {
      headers: {
        Authorization: token,
      },
    });

    if (!response.ok) {
      return showToast("Ocorreu um erro ao buscar as informações!", "error");
    }

    return await response.json();
  }

  // async create(payload) {
  //   const response = await fetch(URL_API + "/User", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(payload),
  //   });

  //   if (response.ok) {
  //     showToast("Cadastro realizado com sucesso!");
  //     setTimeout(() => redirector("/"), 3000);
  //     return;
  //   }

  //   showToast("Algo deu errado!", "error");
  // }

  // async update(payload) {
  //   const response = await fetch(URL_API + "/user", {
  //     method: "Put",
  //     headers: {
  //       Authorization: token,
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(payload),
  //   });

  //   if (!response.ok) {
  //     return showToast("Ocorreu um erro ao atualizar as informações!", "error");
  //   }

  //   return { status: response.statusCode, data: await response.json() };
  // }

  // async delete() {
  //   const response = await fetch(URL_API + "/user", {
  //     method: "Delete",
  //     headers: {
  //       Authorization: token,
  //     },
  //   });

  //   if (!response.ok) {
  //     showToast("Ocorreu um erro ao excluir a conta!", "error");
  //     throw new Error(
  //       "Erro ao exlucuir usuário",
  //       response.status,
  //       response.statusText
  //     );
  //   }

  //   return await response.json();
  // }
}

export const accountService = new AccountService();
