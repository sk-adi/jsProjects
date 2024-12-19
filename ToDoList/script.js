const item = document.getElementById('item')
const add = document.getElementById('add')
const clearList=document.getElementById("clearList")
const thelist=document.getElementById("thelist")


const myList = []
add.addEventListener("click", () => {
    addeditem = item.value
    myList.push(addeditem)
    console.log(addeditem)
    addingelement()
})


function addingelement(){

    const parel = document.getElementById('thelist')
    let newel = document.createElement('li')
    newel.textContent=myList.at(-1).trim()
    parel.append(newel)
    item.value=''

}


clearList.addEventListener('click',()=>{
    while (thelist.firstChild){
        thelist.removeChild(thelist.firstChild)
    }

    myList=[]
})


document.addEventListener('keydown',(event)=>{
    if(event.key==='Enter'){
        addeditem = item.value
        myList.push(addeditem)
        console.log(addeditem)
        addingelement()
    }
})

