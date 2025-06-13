const menuButton = document.getElementById('menuButton');
const overlay = document.getElementById('overlayMenu'); // oppure '.overlay'
const linee = document.querySelectorAll('.linea');

menuButton.addEventListener('click', () => {
  overlay.classList.toggle('show');

  // Rimuove e riapplica la classe per riattivare l’animazione ogni volta
  linee.forEach((linea) => {
    linea.classList.remove('attiva');
    void linea.offsetWidth; // forza il reflow per "resettare" l'animazione
    linea.classList.add('attiva');
  });
});
