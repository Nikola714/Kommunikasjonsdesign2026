const div = document.querySelector("div");

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        div.classList.add("animate");
    }
});