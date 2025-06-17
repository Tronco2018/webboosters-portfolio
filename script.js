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

    function cambiaLingua(){
      const selLanguage = document.getElementById("seleziona-la-lingua").value;
      if (selLanguage === "it"){
        window.location.href = "indexIt.html";
      } else if (selLanguage === "en"){
        window.location.href="index.html";
      }
    }