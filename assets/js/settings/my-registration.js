import { userService } from "../service/UserService.js";
import { getNameInitials } from "../utils/getNameInitials.js";
import { redirector } from "../utils/redirector.js";
import { showToast } from "../utils/toast.js";

const userNameSpan = document.querySelector("#user-name");
const userEmailSpan = document.querySelector("#user-email");
const userProfileIcon = document.querySelector("#profile-icon");
const userNameInput = document.querySelector("#name-input");
const emailInput = document.querySelector("#email-input");
const ageInput = document.querySelector("#age-input");

const saveUserModificationBtn = document.querySelector(
  "#save-modification-btn"
);
const deleteAccountBtn = document.querySelector("#delete-account-btn");

async function loadUserInfo() {
  const { name, email, age } = await userService.get();

  userNameSpan.textContent = name;
  userNameInput.value = name;
  userEmailSpan.textContent = email;
  emailInput.value = email;
  ageInput.value = age;
  userProfileIcon.innerHTML = getNameInitials(name) ?? "G";
}

async function updateUser() {
  const payload = {
    name: userNameInput.value,
    age: ageInput.value,
    email: emailInput.value,
  };

  const { status, data } = await userService.update(payload);
}

async function deleteUserAccount() {
  try {
    await userService.delete();

    showToast("Conta excluída com sucesso!");
    setTimeout(() => redirector("/", true), 2500);
  } catch (error) {}
}

loadUserInfo();
saveUserModificationBtn.addEventListener("click", updateUser);
deleteAccountBtn.addEventListener("click", deleteUserAccount);
