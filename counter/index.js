const decrease = document.getElementById("decrease")
const reset = document.getElementById("reset")
const increase = document.getElementById("increase")



function updateColor(num,value){
    if(value==0){
        num.style.color = 'black';
    }
    else if(value>0){
        num.style.color = 'green';

    }
    else {
        num.style.color = 'red';
    }
}

increase.addEventListener('click', function () {
    const num = document.getElementById("num")
    const numtext = num.textContent
    let finalNum = parseInt(numtext)
    finalNum+=1
    num.textContent = finalNum 
    updateColor(num, finalNum)

})

reset.addEventListener('click', function () {
    const num = document.getElementById("num");
    num.textContent = '0';
    updateColor(num,0)
});



decrease.addEventListener('click', function () {
    const num = document.getElementById("num")
    const numtext = num.textContent
    let finalNum = parseInt(numtext)
    finalNum-=1
    num.textContent = finalNum
    updateColor(num,finalNum)

})






