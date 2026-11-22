const div = document.querySelector("div");

window.addEventListener("scroll", () => {
    if (window.scrollY > 10) {
        div.classList.add("animate");
    }
});