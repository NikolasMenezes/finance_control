import { APP_URL } from "../constants/app.js";

export function redirector(where, replace = false) {
  if (replace) {
    location.replace(APP_URL + where);
    return;
  }

  location.assign(APP_URL + where);
}
