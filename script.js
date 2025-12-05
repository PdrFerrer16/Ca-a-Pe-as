let slides = document.querySelectorAll(".slide");
let indice = 0;

function trocarSlide() {
    slides[indice].classList.remove("ativo");
    indice = (indice + 1) % slides.length;
    slides[indice].classList.add("ativo");
}

setInterval(trocarSlide, 2000);
