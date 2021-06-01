console.log("Hola!!!!!");

// Cuando le doy click al botón se muestre la navegación
boton.addEventListener("click", () => {
    // Si se cumple el evento entonces: () => {
    console.log("Hiciste click!");
    // toggle: Prende y Apaga. Se fija si ya esta aplicada y si es así la elimina, sino la agrega (add y remove todo junto)
    nav.classList.toggle("modificar");
    
});