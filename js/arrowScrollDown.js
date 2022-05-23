let arrow = document.querySelector("#arrowScrollDown")
let info = document.querySelector(".info")
let scrollToOptions = document.querySelector("#scrollToOptions")
let options = document.querySelector(".options")

arrow.addEventListener("click", ()=> {
    info.scrollIntoView({
        block:"start",
        inline:"nearest",
        behavior: "smooth",
    })
})

scrollToOptions.addEventListener("click",()=> {
    options.scrollIntoView({
        block:"start",
        inline:"nearest",
        behavior: "smooth",
    })
})