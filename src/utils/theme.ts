export function setTheme(theme: string) {
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem("theme", theme);
}

export function setAccent(accent: string) {
  document.documentElement.setAttribute("data-accent", accent);
  localStorage.setItem("accent", accent);
}

export function getCurrentTheme() {
  return localStorage.getItem("theme") ?? "main";
}

export function getCurrentAccent() {
  return localStorage.getItem("accent") ?? "pine";
}
