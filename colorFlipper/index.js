function code() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    const finalCode = `rgb(${r},${g},${b})`;
    return finalCode;
  }
  
  const colorButton=document.getElementById("colorButton")
  
  
  colorButton.addEventListener("click", function(){
     document.body.style.backgroundColor = code()});
  

    