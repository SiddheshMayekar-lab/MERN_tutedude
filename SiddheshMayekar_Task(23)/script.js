var btn = document.getElementById("menuBtn");
var menu = document.getElementById("mobileMenu");

btn.onclick = function () {
    if (menu.classList.contains("hidden")) {
        menu.classList.remove("hidden");
    } else {
        menu.classList.add("hidden");
    }
};