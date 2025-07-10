document.addEventListener("DOMContentLoaded", function () {
  const menuBtn = document.getElementById("menuButton");
  const overlayMenu = document.getElementById("overlayMenu");

  const languageButton = document.getElementById("languageButton");
  const overlayLanguage = document.getElementById("overlayLanguage");

  const contactButton = document.getElementById("contactButton");
  const contactMenu = document.getElementById("contactMenu");

  // Funzione per chiudere tutti gli overlay
  function closeAllOverlays() {
    if (overlayMenu) overlayMenu.classList.remove("show");
    if (overlayLanguage) overlayLanguage.classList.remove("show");
    if (contactMenu) contactMenu.classList.remove("show");
  }

  // Discover button
  if (menuBtn && overlayMenu) {
    menuBtn.addEventListener("click", () => {
      const isOpen = overlayMenu.classList.contains("show");
      closeAllOverlays();
      if (!isOpen) overlayMenu.classList.add("show");
    });
  }

  // Language button
  if (languageButton && overlayLanguage) {
    languageButton.addEventListener("click", () => {
      const isOpen = overlayLanguage.classList.contains("show");
      closeAllOverlays();
      if (!isOpen) overlayLanguage.classList.add("show");
    });
  }

  // Get Started button
  if (contactButton && contactMenu) {
    contactButton.addEventListener("click", () => {
      const isOpen = contactMenu.classList.contains("show");
      closeAllOverlays();
      if (!isOpen) contactMenu.classList.add("show");
    });
  }

  // Chiudi overlay se clicchi fuori
  document.addEventListener("click", (e) => {
    if (
      (!overlayMenu || !overlayMenu.contains(e.target)) &&
      (!menuBtn || !menuBtn.contains(e.target)) &&
      (!overlayLanguage || !overlayLanguage.contains(e.target)) &&
      (!languageButton || !languageButton.contains(e.target)) &&
      (!contactMenu || !contactMenu.contains(e.target)) &&
      (!contactButton || !contactButton.contains(e.target))
    ) {
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
