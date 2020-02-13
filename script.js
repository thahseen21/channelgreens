/* window.onscroll = function() { scrollFunction() };

function scrollFunction() {

    var Nav = document.getElementById('nav-wrapper');

    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        Nav.classList.add("navbar-scrolled");
        Nav.classList.remove("navbar-top");
    } else {
        Nav.classList.add("navbar-top");
        Nav.classList.remove("navbar-scrolled");
    }
};
*/

function navbarresponsive() {
    var x = document.getElementById("dropdownbtn");
    if (x.className === "inactive") {
        console.log("im here");
        x.classList.add("active");
        x.classList.remove("inactive");
    } else {
        x.classList.remove("active");
        x.classList.add("inactive");

    }
};

function dropdown() {
    var y = document.getElementById("ielts");
    if (y.className == "ielts-active") {
        y.classList.remove("ielts-active");
        y.classList.add("ielts-inactive");
    } else {
        y.classList.add("ielts-active");
        y.classList.remove("ielts-inactive");
    }
}

function dropdowngerman() {
    var y = document.getElementById("german");
    if (y.className == "german-active") {
        y.classList.remove("german-active");
        y.classList.add("german-inactive");
    } else {
        y.classList.add("german-active");
        y.classList.remove("german-inactive");
    }
}