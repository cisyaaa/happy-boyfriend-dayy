const home = document.getElementById("home");
const message = document.getElementById("message");
const openButton = document.getElementById("openButton");
const giftButton = document.getElementById("giftButton");
const againButton = document.getElementById("againButton");

function openGift() {
  home.classList.add("hidden");
  message.classList.remove("hidden");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function showHome() {
  message.classList.add("hidden");
  home.classList.remove("hidden");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

openButton.addEventListener("click", openGift);
giftButton.addEventListener("click", openGift);
againButton.addEventListener("click", showHome);
