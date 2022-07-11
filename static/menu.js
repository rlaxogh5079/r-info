const bar = document.querySelector("#bar");
const menu = document.querySelector("#menu");
const arrow = document.querySelector("#arrow");
const home = document.querySelector("#home");
const info = document.querySelector("#info");
const skill = document.querySelector("#skill");
const history = document.querySelector("#history");
const contact = document.querySelector("#contact");

bar.addEventListener("mouseenter", (event) => {
    menu.classList.remove("blind");
    menu.classList.add("intro");
    setTimeout(()=> {
        home.classList.remove("blind");
        info.classList.remove("blind");
        skill.classList.remove("blind");
        history.classList.remove("blind");
        contact.classList.remove("blind");
        menu.classList.remove("intro");
    }, 500)
})

menu.addEventListener("mouseleave", (event) => {
    menu.classList.add("outro")
    home.classList.add("blind");
    info.classList.add("blind");
    skill.classList.add("blind");
    history.classList.add("blind");
    contact.classList.add("blind");
    setTimeout(()=> {
        menu.classList.remove("outro");
        menu.classList.add("blind");
    }, 400)
})
