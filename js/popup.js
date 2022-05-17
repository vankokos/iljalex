let curtain = document.querySelector(".curtain")
let optionOne = document.querySelector(".optionOne")
let optionTwo = document.querySelector(".optionTwo")
let optionOneBtn = document.querySelector("#optionOneBtn")
let optionTwoBtn = document.querySelector("#optionTwoBtn")

let closeOne = document.querySelector("#closeOne")
let closeTwo = document.querySelector("#closeTwo")
let body = document.querySelector("body")

optionOneBtn.addEventListener("click", ()=> {
    if(optionOne.classList.contains("displayNone")) {
        optionOne.classList.remove("displayNone");
        optionOne.classList.add("displayBlock")

        curtain.classList.remove("displayNone")
        curtain.classList.add("displayBlock")

        body.style.overflowY = "hidden"

    } else {
        optionOne.classList.remove("displayBlock")
        optionOne.classList.add("displayNone");
        
        curtain.classList.remove("displayBlock")
        curtain.classList.add("displayNone")
    }

})

closeOne.addEventListener("click", ()=> {
    optionOne.classList.remove("displayBlock")
    optionOne.classList.add("displayNone");
    
    curtain.classList.remove("displayBlock")
    curtain.classList.add("displayNone")

    body.style.overflowY = "visible"
})


optionTwoBtn.addEventListener("click", ()=> {
    if(optionTwo.classList.contains("displayNone")) {
        optionTwo.classList.remove("displayNone");
        optionTwo.classList.add("displayBlock")

        curtain.classList.remove("displayNone")
        curtain.classList.add("displayBlock")

        body.style.overflowY = "hidden"


    } else {
        optionTwo.classList.remove("displayBlock")
        optionTwo.classList.add("displayNone");
        
        curtain.classList.remove("displayBlock")
        curtain.classList.add("displayNone")
    }

})

closeTwo.addEventListener("click", ()=> {
    optionTwo.classList.remove("displayBlock")
    optionTwo.classList.add("displayNone");
    
    curtain.classList.remove("displayBlock")
    curtain.classList.add("displayNone")

    body.style.overflowY = "visible"
})


curtain.addEventListener("click", ()=> {
    optionTwo.classList.remove("displayBlock")
    optionTwo.classList.add("displayNone");

    optionOne.classList.remove("displayBlock")
    optionOne.classList.add("displayNone");
    
    
    curtain.classList.remove("displayBlock")
    curtain.classList.add("displayNone")

    body.style.overflowY = "visible"
})