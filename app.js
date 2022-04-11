const wrapper = document.querySelector(".wrapper")
const open = document.querySelector(".open")
const close = document.querySelector(".close")
const circle = document.querySelector(".circle")
const navi = document.querySelector("nav")
 
open.addEventListener("click", () => {
    wrapper.classList.add("show")
    circle.classList.add("show")
    navi.classList.add("show")
})
 
close.addEventListener("click", () => {
    wrapper.classList.remove("show")
    circle.classList.remove("show")
    navi.classList.remove("show")
})