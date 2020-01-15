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

function navbarresponsive() {
    var x = document.getElementById("dropdownbtn");
    console.log(x);
    if (x.className === "inactive") {
        console.log("im here");
        x.classList.add("active");
        x.classList.remove("inactive");
    } else {
        x.classList.remove("active");
        x.classList.add("inactive");

    }
};