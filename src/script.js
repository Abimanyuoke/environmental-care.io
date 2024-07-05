const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector (".menu")
const btn = document.querySelector(".fa-circle-arrow-up");

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle("is-active");

    menu.classList.toggle("menu-active");
});

window.addEventListener('scroll', () => {
    windowPosition = window.scrollY >= 300;
    btn.classList.toggle("btn-active", windowPosition);
});