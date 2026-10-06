try {
  const theme = localStorage.getItem("hapodTheme") || "dark";
  const language = localStorage.getItem("hapodLanguage") || "uk";
  document.documentElement.dataset.theme = theme;
  document.documentElement.lang = language;
  const page = document.body.dataset.legalPage;
  document.title = `${language === "uk" ? (page === "privacy" ? "Конфіденційність" : "Умови") : (page === "privacy" ? "Privacy" : "Terms")} | HAPOD`;
  document.querySelector('meta[name="theme-color"]')?.setAttribute("content", theme === "dark" ? "#081310" : "#14342b");
} catch {
  // Legal pages remain readable when browser storage is unavailable.
}
