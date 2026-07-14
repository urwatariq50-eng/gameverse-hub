// ===============================
// GAMEVERSE HUB
// JavaScript
// ===============================

const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobileMenu");

// Open / Close Menu
menuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("show");

    if (mobileMenu.classList.contains("show")) {
        menuBtn.innerHTML = "✖";
    } else {
        menuBtn.innerHTML = "☰";
    }
});

// Close menu after clicking a link
document.querySelectorAll("#mobileMenu a").forEach(link => {
    link.addEventListener("click", () => {
        mobileMenu.classList.remove("show");
        menuBtn.innerHTML = "☰";
    });
});

// Close menu when switching to desktop
window.addEventListener("resize", () => {
    if (window.innerWidth >= 992) {
        mobileMenu.classList.remove("show");
        menuBtn.innerHTML = "☰";
    }
});
