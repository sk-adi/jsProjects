const menutoggle=document.getElementsByClassName("menutoggle")[0]
const menu=document.getElementsByClassName("rightPart")[0]
const top=document.getElementsByClassName("top")[0]

menutoggle.addEventListener("click",()=>{
    menu.classList.toggle("mystyle")
    // top.classList.toggle("topstyle")

})



