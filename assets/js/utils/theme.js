export function defineTheme() {
  const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const userPreferredTheme = localStorage.getItem("theme");

  if (darkThemeMq || userPreferredTheme === "dark") {
    document.body.classList.add("dark");
  } else {
    document.body.classList.remove("dark");
  }
}
