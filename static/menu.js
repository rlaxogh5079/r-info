const bar = document.querySelector("#bar");
const menu = document.querySelector("#menu");
const arrow = document.querySelector("#arrow");
const home = document.querySelector("#home");
const info = document.querySelector("#info");
const skill = document.querySelector("#skill");
const history = document.querySelector("#history");
const contact = document.querySelector("#contact");
const lists = [home, info, skill, history, contact]

bar.addEventListener("mouseenter", (event) => {
    menu.classList.remove("blind");
    menu.classList.add("intro");
    setTimeout(()=> {
        lists.forEach((list) => {
            list.classList.remove("blind");
        })
        menu.classList.remove("intro");
    }, 500)
})

menu.addEventListener("mouseleave", (event) => {
    menu.classList.add("outro")
    lists.forEach((list) => {
        list.classList.add("blind");
    })
    setTimeout(()=> {
        menu.classList.remove("outro");
        menu.classList.add("blind");
    }, 400)
})

lists.forEach((list) => {
    list.addEventListener("mouseenter", () => {
        list.classList.add("effect")
    })
    list.addEventListener("mouseleave", () => [
        list.classList.remove("effect")
    ])
})