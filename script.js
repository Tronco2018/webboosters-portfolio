const menuBtn = document.getElementById("menuButton");
const overlay = document.getElementById("overlayMenu");

menuBtn.addEventListener("click", () => {
  overlay.classList.toggle("show");
});
