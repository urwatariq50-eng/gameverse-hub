// ===============================
// GAMEVERSE HUB
// Main JavaScript
// ===============================

// Mobile Menu Toggle
function toggleMenu() {
    document.getElementById("mobileMenu").classList.toggle("show");
}

// Close menu after clicking a link (mobile)
const navLinks = document.querySelectorAll("#mobileMenu a");

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        document.getElementById("mobileMenu").classList.remove("show");
    });
});

// Close menu when window is resized to desktop
window.addEventListener("resize", () => {
    if (window.innerWidth >= 992) {
        document.getElementById("mobileMenu").classList.remove("show");
    }
});
