export function addBalanceStyle(element, balance) {
  if (balance >= 0) {
    element.classList.add("text-emerald-500");
    return;
  }
  element.classList.add("text-red-500");
}
