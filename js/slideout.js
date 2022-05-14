let textBlock = document.querySelectorAll(".info__inner-blocks-block")
let textBlockClick = document.querySelectorAll(".info__inner-blocks-block-click")
let textBlockHide = document.querySelectorAll(".info__inner-blocks-block-hide")


for (let i = 0; i < textBlock.length; i++) {
    textBlock[i].addEventListener("click", ()=> {
        let perm = textBlock[i].querySelector("div:nth-child(2)");
        let arrow = textBlock[i].querySelector("img")


        if(perm.classList.contains("displayNone")) {
            perm.classList.remove("displayNone")
            perm.classList.add("displayBlock")

            arrow.style.transform = "rotate(180deg)"
        } else {
            perm.classList.remove("displayBlock")
            perm.classList.add("displayNone")
            arrow.style.transform = "rotate(0deg)"
        }

    })
    
}