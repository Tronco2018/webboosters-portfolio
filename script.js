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
function cambiaLinguaSiamo(){
  const selLanguage = document.getElementById("seleziona-la-lingua").value;
  localStorage.setItem("lingua", selLanguage); // Salva la lingua selezionata
  if (selLanguage === "it") {
    window.location.href = "chi-siamo.html";
  } else if (selLanguage === "en") {
    window.location.href = "Who-we-are.html";
  }
}
function cambiaLinguaWorks(){
  const selLanguage = document.getElementById("seleziona-la-lingua").value;
  localStorage.setItem("lingua", selLanguage); // Salva la lingua selezionata
  if (selLanguage === "it") {
    window.location.href = "i-nostri-lavori.html";
  } else if (selLanguage === "en") {
    window.location.href = "Our-works.html";
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
document.getElementById("menuButton").addEventListener("click", function() {
    let contactUs = document.getElementById("contactMenu"); // Usa "contactMenu" invece di "contactButton"
    
    if (contactUs.classList.contains("show")) {
        contactUs.classList.remove("show");
        contactUs.style.display = "none";
        console.log("Il menu Contact Us è stato chiuso.");
    }
});


document.getElementById("contactButton").addEventListener("click", function() {
    let contactUs = document.getElementById("contactMenu"); // Assicurati che sia "contactMenu"
    
    if (contactUs.style.display === "block") {
        contactUs.style.display = "none";
        contactUs.classList.remove("show");
        console.log("Il menu Contact Us è stato chiuso.");
    } else {
        contactUs.style.display = "block";
        contactUs.classList.add("show");
        console.log("Il menu Contact Us è stato aperto.");
    }
});

document.addEventListener("DOMContentLoaded", function () {
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
