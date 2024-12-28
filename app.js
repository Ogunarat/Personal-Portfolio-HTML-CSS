let menuIcon = document.querySelector("#menü-icon");
let navbar = document.querySelector(".navbar");
let body = document.querySelector("body");

menuIcon.onclick = () => {
    if (menuIcon.classList.toggle("bx-x")) {
        navbar.style.display = "block";
    } else {
        navbar.style.display = "none";
    }


}
