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

  async create(payload) {
    const response = await fetch(URL_API + "/account", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": token
      },
      body: JSON.stringify(payload),
    });

    if (response.ok) {
      showToast("Cadastro realizado com sucesso!");
      setTimeout(() => location.reload(), 2500)
      return;
    }

    showToast("Algo deu errado!", "error");
  }

  async update(id, payload) {
    const response = await fetch(URL_API + "/account/" + id, {
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

    return { status: response.statusCode, data: await response.json()};
  }

   async delete(id) {
     const response = await fetch(URL_API + "/account/" + id, {
       method: "Delete",
       headers: {
         Authorization: token,
       },
     });

     if (!response.ok) {
       showToast("Ocorreu um erro ao excluir a conta!", "error");
       throw new Error(
         "Erro ao exlucuir conta",
         response.status,
         response.statusText
       );
     }

     showToast("Conta excluída com sucesso!");
     setTimeout(() => location.reload(), 2500)
     return await response.json();
    
   }
}

export const accountService = new AccountService();
