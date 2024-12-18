const mywatch=document.getElementById('num')
const mywatchtext=mywatch.textContent
const watchnum=parseInt(mywatchtext)
const finalnum=watchnum
const start=document.getElementById("start")
const stop=document.getElementById("stop")
const reset=document.getElementById("reset")



let counter=0
let intervalId=null;


start.addEventListener('click',()=>{
    if(!intervalId){intervalId=
    setInterval(()=>{
        counter+=1;
        mywatch.textContent=counter
    },100)}
})


stop.addEventListener("click",()=>{
    clearInterval(intervalId)
    intervalId=null
})

    

reset.addEventListener("click",()=>{
    clearInterval(intervalId)
    intervalId=null
    counter=0;
    mywatch.textContent=counter
})