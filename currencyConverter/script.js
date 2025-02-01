const fromcurrency = document.getElementById("fromcurrency");
const tocurrency = document.getElementById("tocurrency");
const convertFrom = document.getElementById("convertFrom");
const convertTo = document.getElementById("convertTo");
const convert = document.getElementById("convert");
const unitConversion=document.getElementById("unitConversion")
console.log(unitConversion)



//api key
const apikey = "fca_live_tCgYwhq2kxflyTboOzNskQehl4hEdqVGYYZpUbJR";

//fetching the all currency and appending to select element
const response = fetch(
  `https://api.freecurrencyapi.com/v1/latest?apikey=${apikey}`
)
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    } else {
      return response.json();
    }
  })
  .then((data) => {
    const currencyCode = Object.keys(data.data);
    for (let i = 0; i < currencyCode.length; i++) {
      const optionTagFrom = document.createElement("option");
      optionTagFrom.setAttribute("value", `${currencyCode[i]}`);
      optionTagFrom.textContent = `${currencyCode[i]}`;
      convertFrom.append(optionTagFrom);
      const optionTagTo = document.createElement("option");
      optionTagTo.setAttribute("value", `${currencyCode[i]}`);
      optionTagTo.textContent = `${currencyCode[i]}`;
      convertTo.append(optionTagTo);
    }
  })
  .catch((error) => {
    console.error("error fetching data:", error);
  });

//change the value of from input
fromcurrency.addEventListener("change", (e) => {
  e.target.value;
});

//performing action when user click

convert.addEventListener("click", () => {
  //capturing the input user
  const userInput = Number(fromcurrency.value);
  //fetching the rate of single unit then multiple by user input and  show to the user
  const response = fetch(
    `https://api.freecurrencyapi.com/v1/latest?apikey=${apikey}&currencies=${convertTo.value}&base_currency=${convertFrom.value}`
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP Error! Status: ${response.status}`);
      } else {
        return response.json();
      }
    })
    .then((data) => {
      const result = data.data;
      const unitRate = result[`${convertTo.value}`];
      //console.log(unitRate*userInput)
      tocurrency.value = (unitRate * userInput).toFixed(2);
      unitConversion.textContent=`1 ${convertFrom.value}= ${unitRate.toFixed(2)} ${convertTo.value}`
    })
    .catch((error) => {
      console.log("error fetching data:", error);
    });
});
