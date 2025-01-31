const mydice=document.getElementById("mydice")
const rollBtn=document.getElementById("rollBtn")
const result=document.getElementById("result")
const reset=document.getElementById("reset")


const diceList=["&#9856;", "&#9857;" ,"&#9858;" ,"&#9859;", "&#9860;", "&#9861;"]


let i=1;

rollBtn.addEventListener("click",()=>{
    //creating a li to add in history
    const li=document.createElement("li")
    console.log(li)

    //connect animation css to javascript
    mydice.style.animation="rollDice 0.3s ease-in-out"

    //generate randome dice value
    let randomNum=Math.floor(Math.random()*6)

    setTimeout(()=>{
    mydice.innerHTML=`${diceList[randomNum]}`
    mydice.style.animation=''
    },300)

    li.innerHTML=`Roll ${i++}:    <span>${diceList[randomNum]}</span>`
    result.append(li)


})


//reset button function

reset.addEventListener("click",()=>{
    result.innerHTML=''
    mydice.innerHTML=`${diceList[0]}`
    i=1
})

