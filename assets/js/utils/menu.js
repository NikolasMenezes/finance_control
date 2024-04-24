export function openMenu(menuElement) {
  menuElement.classList.add("right-0");
  menuElement.classList.remove("hidden");
  menuElement.classList.remove("-right-1/2");
  document.body.classList.add("overflow-y-hidden");
}

export function closeMenu(menuElement) {
  menuElement.classList.add("hidden");
  menuElement.classList.add("-right-1/2");
  menuElement.classList.remove("right-0");
  document.body.classList.remove("overflow-y-hidden");
}
