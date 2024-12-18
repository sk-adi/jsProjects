const menutoggle=document.getElementsByClassName("menutoggle")[0]
const menu=document.getElementsByClassName("rightPart")[0]
const topsection=document.getElementsByClassName("topsection")[0]

menutoggle.addEventListener("click",()=>{
    menu.classList.toggle("mystyle")
    topsection.classList.toggle("topstyle")

})
