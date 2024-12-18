const item=document.getElementById('item')
const add=document.getElementById('add')

let myList=[]
add.addEventListener("click",()=>{
    addeditem=item.value
    myList.push(addeditem)
    alert(addeditem)
    console.log(addeditem)
})

console.log(myList)