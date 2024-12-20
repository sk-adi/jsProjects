const btn = document.getElementById("btn")
const tbody = document.getElementById("tbody")
const inputArea = document.getElementById("inputArea");








const listarr = [];

//adding new task to the table
btn.addEventListener("click", () => {
    if (!inputArea.value.trim() == '') {

        const text = inputArea.value
        const newtext = text.replace(/\s+/g, ' ').trim()
        listarr.push(newtext)
        console.log(listarr.at(-1))
        inputArea.value = ''



        const newrow = document.createElement('tr')
        newrow.innerHTML = `
        <th>${listarr.length}</th>
        <th>${listarr.at(-1)}</th>
        <th><input type="checkbox" class='checkbox'></th>
        <th><button class="deleterow"><i class="fa fa-trash-o" style="font-size:24px"></i></button></th>`



        tbody.append(newrow)
    }
})






document.addEventListener("keydown", (event) => {
    if (!inputArea.value.trim() == '') {
        if (event.key === 'Enter') {
            const text = inputArea.value
            const newtext = text.replace(/\s+/g, ' ').trim()
            listarr.push(newtext)
            console.log(listarr.at(-1))
            inputArea.value = ''


            const newrow = document.createElement('tr')
            newrow.innerHTML = `
            <th>${listarr.length}</th>
            <th>${listarr.at(-1)}</th>
            <th><input type="checkbox" class='checkbox'></th>
            <th><button class="deleterow"><i class="fa fa-trash-o"></i></button></th>`



            tbody.append(newrow)


        }
    }
})

tbody.addEventListener("click", (event) => {
    // Check if the clicked element is a delete button
    if (event.target.classList.contains("deleterow") || event.target.closest(".deleterow")) {
        // Find the closest <tr> element (the row containing the button)
        const row = event.target.closest("tr");
        if (row) {
            // Remove the row

            const thesno = row.querySelectorAll("th")[1].textContent
            const index = listarr.indexOf(thesno)
            listarr.splice(index, 1)
            console.log(listarr)
            row.remove();
            updateSerialNumbers();

        }
    }

    if (event.target.classList.contains("checkbox")) {
        const checkbox = event.target
        const row = checkbox.closest('tr')
        if (checkbox.checked) {
            row.classList.add('strikethrough')
            tbody.appendChild(row)
        }

        else {
            
            const uncheckedRows = Array.from(tbody.querySelectorAll("tr:not(.strikethrough)"));
            tbody.insertBefore(row, uncheckedRows[0] || null)
            row.classList.remove('strikethrough')

        }
        updateSerialNumbers()
    }







});





function updateSerialNumbers() {
    // Get all the rows in tbody
    const rows = tbody.querySelectorAll('tr');

    // Loop through each row and update the S.No (first <th>)
    rows.forEach((row, index) => {
        const firstth = row.querySelector('th');  // Find the first <th> in the row
        firstth.textContent = index + 1;  // Set the S.No to the new index (1-based)
    });


}



// const checkbox=document.querySelector('input[type="checkbox"]')


// const checkboxes=document.querySelectorAll(".checkbox")

// checkboxes.forEach(checkbox=>{
//     checkbox.addEventListener('change',function(){
//         const row=checkbox.closest('tr')
//         if(checkbox.checked){
//             row.classList.add('strike')
//         }

//         else{
//             row.classList.remove('strike')
//         }
//     }
//     )
// })



// const checkbox = document.querySelector('input[type="checkbox"]');

// const isChecked = checkbox.checked;  // Returns true if checked, false if unchecked

// console.log(isChecked);



// const checkboxes = document.querySelectorAll('.checkbox');

// checkboxes.forEach(checkbox => {
//     checkbox.addEventListener('change', function() {
//         const row = checkbox.closest('tr');  // Find the parent row (<tr>)
//         if (checkbox.checked) {
//             row.classList.add('strikethrough');  // Add strikethrough class if checked
//         } else {
//             row.classList.remove('strikethrough');  // Remove strikethrough class if unchecked
//         }
//     });
// });
