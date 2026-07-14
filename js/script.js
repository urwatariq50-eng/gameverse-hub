// ===========================
// GAMEVERSE HUB MENU
// ===========================

const menu = document.getElementById("navMenu");

function toggleMenu() {
    menu.classList.toggle("show");
}

// Close menu when a link is clicked (mobile only)
document.querySelectorAll("#navMenu a").forEach(link => {
    link.addEventListener("click", () => {
        if (window.innerWidth < 992) {
            menu.classList.remove("show");
        }
    });
});

// Close menu if user taps outside it
document.addEventListener("click", function(e) {

    const menuBtn = document.querySelector(".menu-btn");

    if (
        window.innerWidth < 992 &&
        !menu.contains(e.target) &&
        !menuBtn.contains(e.target)
    ) {
        menu.classList.remove("show");
    }

});
