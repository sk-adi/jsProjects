const container = document.querySelector(".container");
const cards = document.querySelector(".cards");
const more = document.querySelector(".more");
const addCard = document.getElementById("addCard");
const theCard = document.querySelector(".theCard");

const newbox = cards;

//new card generator function
function newCardGenerator() {
  //creating new div element for new card
  const newSingleCard = document.createElement("div");
  newSingleCard.setAttribute("class", "singleCard");
  //new text area and setting its attribute
  const newTextArea = document.createElement("textarea");
  newTextArea.setAttribute("class", "theCard");
  newTextArea.setAttribute("wrap", "soft");
  newTextArea.setAttribute("name", "text");

  //new button for new card
  const newButton = document.createElement("button");
  newButton.setAttribute("class", "more");
  newButton.innerHTML = "&#8942";
  //appending element at their respective position
  cards.append(newSingleCard);
  newSingleCard.append(newTextArea, newButton);
}

addCard.addEventListener("click", () => {
  newCardGenerator();
});
