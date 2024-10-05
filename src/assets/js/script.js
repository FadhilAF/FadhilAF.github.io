// On page load
const theme = localStorage.getItem("theme")

if (theme !== null) {
  document.body.setAttribute("data-theme", theme);
}
//kalo misal lah ado settingan di browsernyo "prefer dark", langsung didefaultken dark
if (theme === null && window.matchMedia("(prefers-color-scheme: dark)").matches) {
    localStorage.setItem("theme", "dark");
}

document.addEventListener("DOMContentLoaded", (event) => {
  updateToggle();
});

function updateToggle() {
  const themeToggle = document.getElementById("theme-toggle");

  const currentTheme = localStorage.getItem("theme");

  document.body.setAttribute("data-theme", currentTheme);
  themeToggle.checked = currentTheme === "light";
}

function toggleTheme() {
  const isDark = localStorage.getItem("theme") === "dark";

  localStorage.setItem("theme", isDark ? "light" : "dark");
  updateToggle();
}
