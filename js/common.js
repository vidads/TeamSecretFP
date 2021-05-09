//Search bar to work
document.getElementById("desktop-searchbar").onsubmit = function () {
  window.location =
    "http://www.google.com/search?q=https://vidads.github.io/TeamSecretFP/" +
    document.getElementById("search_btn").value;
  return false;
};
