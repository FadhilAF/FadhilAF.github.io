function toggleDarkTheme() {
  const isDark = localStorage.getItem("theme") === "dark";

  localStorage.setItem("theme", isDark ? "light" : "dark");
  document.body.setAttribute("data-theme", isDark ? "light" : "dark");
}

// On page load
document.addEventListener("DOMContentLoaded", (event) => {
  const defaultDark = localStorage.getItem("theme") === null && 
    window.matchMedia("(prefers-color-scheme: dark)").matches; //kalo misal lah ado settingan di browsernyo "prefer dark", langsung didefaultken dark

  if (localStorage.getItem("theme") === "dark" || defaultDark) {
    document.body.setAttribute("data-theme", "dark");
  }
});
