import { URL_API } from "../constants/app.js";
import { token } from "../constants/token.js";
import { redirector } from "./redirector.js";

export async function logout(e) {
  e.preventDefault();

  fetch(URL_API + "/auth/logout?tokenValue=" + token, {
    method: "POST",
  });

  redirector("/");
  localStorage.removeItem("token");
}
