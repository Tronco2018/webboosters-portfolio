    const menuBtn = document.getElementById("menuButton");
    const overlay = document.getElementById("overlayMenu");
    const contactButton = document.getElementById("contactButton");
    const contactMenu = document.getElementById("contactMenu");

    menuBtn.addEventListener("click", () => {
      overlay.classList.toggle("show");
    });

    document.querySelectorAll('.linea').forEach(line => {
      line.classList.add('show');
    });

    contactButton.addEventListener("click", () =>{
      contactMenu.classList.toggle("show");
    });
function cambiaLingua() {
  const selLanguage = document.getElementById("seleziona-la-lingua").value;
  localStorage.setItem("lingua", selLanguage); // Salva la lingua selezionata
  if (selLanguage === "it") {
    window.location.href = "indexIt.html";
  } else if (selLanguage === "en") {
    window.location.href = "index.html";
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const savedLanguage = localStorage.getItem("lingua");
  if (savedLanguage) {
    document.getElementById("seleziona-la-lingua").value = savedLanguage;
    if (savedLanguage === "it" && window.location.href.includes("index.html")) {
      window.location.href = "indexIt.html";
    } else if (savedLanguage === "en" && window.location.href.includes("indexIt.html")) {
      window.location.href = "index.html";
    }
  }
});
