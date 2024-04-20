export function defineTheme() {
  const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const userPreferredTheme = localStorage.getItem("theme");

  if (darkThemeMq || userPreferredTheme === "dark") {
    document.body.classList.add("dark");
  } else {
    document.body.classList.remove("dark");
  }
}

export function handleTheme(theme) {
  if (theme === "system") {
    localStorage.removeItem("theme");
    defineTheme();
    return;
  }
  if (theme === "dark") {
    document.body.classList.add("dark");
    localStorage.setItem("theme", "dark");
  } else {
    document.body.classList.remove("dark");
    localStorage.setItem("theme", "light");
  }
}
