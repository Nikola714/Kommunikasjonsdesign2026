const div = document.querySelector("div");

window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
        div.classList.add("animate");
    }
});