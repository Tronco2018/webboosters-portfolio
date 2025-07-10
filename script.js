document.addEventListener("DOMContentLoaded", function () {
  const menuBtn = document.getElementById("menuButton");
  const overlayMenu = document.getElementById("overlayMenu");

  const languageButton = document.getElementById("languageButton");
  const overlayLanguage = document.getElementById("overlayLanguage");

  const contactButton = document.getElementById("contactButton");
  const contactMenu = document.getElementById("contactMenu");
  const overlayBlocker = document.getElementById("overlayBlocker");

  // Chiude tutti gli overlay
  function closeAllOverlays() {
    overlayMenu?.classList.remove("show");
    overlayLanguage?.classList.remove("show");
    contactMenu?.classList.remove("show");
    overlayBlocker?.classList.remove("active");
  }

  // Discover
  menuBtn?.addEventListener("click", () => {
    const isOpen = overlayMenu.classList.contains("show");
    closeAllOverlays();
    if (!isOpen) overlayMenu.classList.add("show");
  });

  // Language
  languageButton?.addEventListener("click", () => {
    const isOpen = overlayLanguage.classList.contains("show");
    closeAllOverlays();
    if (!isOpen) overlayLanguage.classList.add("show");
  });

  // Mostra/Nasconde la casella contatti
  function toggleContactMenu() {
    const isOpen = contactMenu.classList.contains("show");
    closeAllOverlays();
    if (!isOpen) {
      contactMenu.classList.add("show");
      overlayBlocker?.classList.add("active");
    }
  }

  contactButton?.addEventListener("click", toggleContactMenu);
  contactButton?.addEventListener("touchstart", toggleContactMenu);

  // Chiudi cliccando sull'overlay invisibile
  overlayBlocker?.addEventListener("click", () => {
    closeAllOverlays();
  });

  // Chiudi cliccando fuori da tutti gli overlay
  document.addEventListener("click", (e) => {
    const isClickInsideOverlay =
      overlayMenu?.contains(e.target) || menuBtn?.contains(e.target) ||
      overlayLanguage?.contains(e.target) || languageButton?.contains(e.target);

    const isClickInsideCasella =
      contactMenu?.contains(e.target) || contactButton?.contains(e.target);

    if (!isClickInsideOverlay && !isClickInsideCasella) {
      closeAllOverlays();
    }
  });

  // Cookie banner
  if (!localStorage.getItem("cookieAccepted")) {
    const banner = document.createElement("div");
    banner.innerHTML = `
      <div style="position: fixed; bottom: 0; width: 100%; background: #222; color: #fff; padding: 1rem; display: flex; justify-content: space-between; align-items: center; z-index: 1000;">
          <span>Questo sito usa cookie tecnici e potenzialmente di terze parti. Continuando accetti la <a href='privacy.html' style='color: #0af;'>privacy policy</a>.</span>
          <button id="acceptCookies" style="margin-right: 5rem; padding: 0.5rem 1rem; background: #0af; border: none; color: white; cursor: pointer;">Accetto</button>
      </div>`;
    document.body.appendChild(banner);
    document.getElementById("acceptCookies").onclick = function () {
      localStorage.setItem("cookieAccepted", "true");
      banner.remove();
    };
  }
});
