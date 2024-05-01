const modal = document.getElementById("default-modal");
const openModalButtons = document.querySelectorAll("[data-modal-target]");
const closeModalButtons = document.querySelectorAll("[data-modal-hide]");

openModalButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const targetModal = document.getElementById(button.dataset.modalTarget);
    openModal(targetModal);
  });
});

closeModalButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const targetModal = document.getElementById(button.dataset.modalHide);
    closeModal(targetModal);
  });
});

function openModal(modal) {
  modal.classList.remove("hidden");
  modal.setAttribute("aria-hidden", "false");
}

function closeModal(modal) {
  modal.classList.add("hidden");
  modal.setAttribute("aria-hidden", "true");
}
