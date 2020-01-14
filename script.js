window.onscroll = function() { scrollFunction() };

function scrollFunction() {

    var Nav = document.getElementById('nav-wrapper');

    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        console.log("im scrolling")
        Nav.classList.add("navbar-scrolled");
        Nav.classList.remove("navbar-top");
    } else {
        Nav.classList.add("navbar-top");
        Nav.classList.remove("navbar-scrolled");
    }
};