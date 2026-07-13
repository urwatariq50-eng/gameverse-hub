// =========================
// GameVerse Hub Script
// =========================

// Search
const search = document.querySelector(".search");

if (search) {
    search.addEventListener("keyup", function () {

        const value = this.value.toLowerCase();
        const cards = document.querySelectorAll(".card");

        cards.forEach(card => {
            const text = card.innerText.toLowerCase();

            if (text.includes(value)) {
                card.style.display = "";
            } else {
                card.style.display = "none";
            }
        });

    });
}

// Smooth scrolling
document.querySelectorAll("a[href^='#']").forEach(link => {

    link.addEventListener("click", function(e){

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if(target){

            target.scrollIntoView({
                behavior:"smooth"
            });

        }

    });

});

// Card animation
const cards = document.querySelectorAll(".card");

cards.forEach((card,index)=>{

    card.style.opacity="0";
    card.style.transform="translateY(30px)";

    setTimeout(()=>{

        card.style.transition=".5s";
        card.style.opacity="1";
        card.style.transform="translateY(0)";

    },index*120);

});

console.log("🎮 GameVerse Hub Loaded Successfully");
