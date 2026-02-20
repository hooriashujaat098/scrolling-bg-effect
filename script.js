const imgEl = document.getElementById("bg-img");

window.addEventListener("scroll", () => {
    updateImage();
});

function updateImage(){
    imgEl.style.opacity = 1 - window.pageYOffset / 900;
    imgEl.style.backgroundSize = 160 - window.pageYOffset / 12 + "%";
}