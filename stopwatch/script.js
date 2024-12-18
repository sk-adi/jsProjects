const mywatch=document.getElementById('num')
const mywatchtext=mywatch.textContent
const watchnum=parseInt(mywatchtext)
const finalnum=watchnum
const start=document.getElementById("start")
const stop=document.getElementById("stop")
const reset=document.getElementById("reset")






// start.addEventListener("click",()=>{
//     setInterval(() => {
//         for(let i=0;i<61;i++){
//         let newnum=i
//         mywatch.textContent=newnum}
//     }, 1000);
// })

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
})