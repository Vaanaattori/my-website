function closePopUp() {
  const body = document.querySelector("body");
  const popup = document.getElementById("popup");

  body.style.overflow = "auto";
  popup.classList.remove("show");
}

window.onload = function () {
  const body = document.querySelector("body");
  const popup = document.getElementById("popup");

  setTimeout(function () {
    body.style.overflow = "hidden";
    popup.classList.add("show");
  }, 5000);
};