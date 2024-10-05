// On page load
const theme = localStorage.getItem("theme")

if (theme !== null) {
  document.body.setAttribute("data-theme", theme);
}
//kalo misal lah ado settingan di browsernyo "prefer dark", langsung didefaultken dark
if (theme === null && window.matchMedia("(prefers-color-scheme: dark)").matches) {
    localStorage.setItem("theme", "dark");
}

document.addEventListener("DOMContentLoaded", () => {
  updateToggle();
});

function updateToggle() {
  const currentTheme = localStorage.getItem("theme");

  document.body.setAttribute("data-theme", currentTheme);
  document.getElementById("theme-toggle").checked = currentTheme === "dark";
}

function toggleTheme() {
  const isLight = localStorage.getItem("theme") === "light";

  localStorage.setItem("theme", isLight ? "dark" : "light");
  updateToggle();
}
