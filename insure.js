var nav = document.querySelector("#mobile-menu");
var menu = document.querySelector(".navbar-menu")

nav.addEventListener('click', function() {
    nav.classList.toggle("is-active");
    menu.classList.toggle("active");
})

var width = innerWidth;
var img = document.querySelector("#intro-img");
console.log (width);
if (width <= 450) {
    img.src= "images/image-intro-mobile.jpg";
}
if (width >= 450) {
    img.src= "images/image-intro-desktop.jpg";
}