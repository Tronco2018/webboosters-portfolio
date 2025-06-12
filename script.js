function toggleHamburger(){
    const hamburger = document.getElementById("menuButton");
    const menu = document.getElementById("menu");

    hamburger.addEventListener("click", () =>{
        menu.classList.toggle("overlayHidden");
    });
}