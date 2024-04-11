export function defineTheme() {
  const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)").matches;

  if (darkThemeMq) {
    document.body.classList.add("dark");
    return;
  }

  document.body.classList.remove("dark");
}
