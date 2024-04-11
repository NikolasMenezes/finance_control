import { URL_API } from "../constants/api.js";

export async function request(endpoint, options) {
  const response = await fetch(`${URL_API}${endpoint}`, options);

  if (response.ok) {
    return await response.json();
  }
}
