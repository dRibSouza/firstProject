// header
window.addEventListener("scroll", function () {
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
    var img_slider = document.querySelector(".img_slider");
    img_slider.classList.toggle("sticky", window.scrollY > 0);
    var logo_animation = document.querySelector(".brand");
    logo_animation.classList.toggle("sticky", window.scrollY > 0);
});

var menu = document.querySelector(".menu");
var menuBtn = document.querySelector(".menu-btn");
var closeBtn = document.querySelector(".close-btn");

menuBtn.addEventListener("click", () => {
    menu.classList.add("ativo");
});

closeBtn.addEventListener("click", () => {
    menu.classList.remove("ativo");
});

function alterarImagem(objeto, caminhoNovaImagem) {
    document.getElementById(objeto).src = caminhoNovaImagem;
}

$(document).on("scroll", function () {

    if ($(document).scrollTop() > 0) {
        alterarImagem("imagem_logo", "./IMG/logo_cima.png");
    } else {
        alterarImagem("imagem_logo", "./IMG/logo.png");
    }
});
//header fim
//banner inicio
var slides = document.querySelectorAll(".slide");
var btns = document.querySelectorAll('.btn');
let currentSlide = 1;

var manualNav = function (manual) {
    slides.forEach((slide) => {
        slide.classList.remove('active');
        btns.forEach((btn) => {
            btn.classList.remove('active');
        });
    });
    slides[manual].classList.add('active');
    btns[manual].classList.add('active');
}
btns.forEach((btn, i) => {
    btn.addEventListener('click', () => {
        manualNav(i);
        currentSlide = i;
    });
});


var repeat = function (activeClass) {
    let active = document.getElementsByClassName('active');
    let i = 1;
    let troca = document.getElementsByClassName('proximo');


    var repeater = () => {

        setTimeout(function () {
            [...active].forEach((activeSlide) => {
                activeSlide.classList.remove("active");
            });
            slides[i].classList.add("active");
            btns[i].classList.add("active");
            i++;
            if (slides.length == i) {
                i = 0;
            }
            if (i >= slides.length) {
                return;
            }
            repeater();
        }, 5000);
    }
    repeater();
}
repeat();
//banner fim

//mostrar equipe inicio
function mostrar(id) {
    if (document.getElementById(id).style.display == 'block') {
        document.getElementById(id).style.display = 'none';
        document.getElementById('veja-botao').value = "VEJA NOSSA EQUIPE ⇓";

    } else {
        document.getElementById(id).style.display = 'block';
        document.getElementById('veja-botao').value = "OCULTAR ⇑";
    }
}

// mostrar equipe fim


