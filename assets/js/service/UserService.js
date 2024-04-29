import { URL_API } from "../constants/app.js";
import { token } from "../constants/token.js";
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
}

export const userService = new UserService();
