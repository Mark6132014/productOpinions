/* Startup */
let intro = document.querySelector(".intro");
setTimeout(() => {
    intro.style.opacity = 0;
    setTimeout(() => {
        intro.style.display = "none";
        document.querySelector("html").setAttribute("class", "scrollEnabled");
    }, 2500);
}, 3000);