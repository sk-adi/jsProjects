const billInput = document.getElementById("billinput");
const tipPercentage = document.getElementById("tipinput");
const calculate = document.getElementById("calculate");
const finalAmount = document.getElementById("finalamount");
const billerror = document.getElementById("billerror");
const tiperror = document.getElementById("tiperror");

billInput.addEventListener("change", (e) => {
 const billNum= e.target.value;
});

tipPercentage.addEventListener("change", (e) => {
  e.target.value;
});

calculate.addEventListener("click", () => {
  const billNum = billInput.value;
  const tipNum = tipPercentage.value;
  if (billInput.validity.rangeUnderflow || isNaN(billNum) || billNum <= 0) {
    console.log(billerror);
    billerror.textContent = "Please enter a valid amount";
    billerror.style.display = "block";
    event.preventDefault();
    tiperror.style.display = "none";
    
  } else if (
    tipPercentage.validity.rangeUnderflow ||
    isNaN(tipNum) ||
    tipNum <= 0
  ) {
    tiperror.textContent = "Please enter a valid amount";
    tiperror.style.display = "block";
    event.preventDefault();
    billerror.style.display = "none";
  } else {
    billerror.style.display = "none";
    tiperror.style.display = "none";
    const val = billNum * (tipNum / 100);
    finalAmount.value = `Final Tip: $${val}`;
    tipPercentage.value = "";
    billInput.value = "";
  }
});
