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


start.addEventListener("click",()=>{
    setInterval(myfunction,1000)
    function myfunction(){
        for(let i=0;i<61;i++){
            const newnum=i+1
            mywatch.textContent=newnum
        }
    }
})