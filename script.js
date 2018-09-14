//process
let word;
let categories = [];
categories[0] = ["S", "H", "I", "B", "A"];
categories[1] = ["C", "A", "R"];
categories[2] = ["H", "U", "T"];

//Category buttorns
//https://stackoverflow.com/questions/4825295/javascript-onclick-to-get-the-id-of-the-clicked-button
function selectCategory() {
  // clearUnderscore();
  if (this.id === "animalsB") {
    word = categories[0];
  } else if (this.id === "vehiclesB") {
    word = categories[1];
  } else if (this.id === "buildingsB") {
    word = categories[2];
  }
  selection();
}
document.getElementById("animalsB").onclick = selectCategory;
document.getElementById("vehiclesB").onclick = selectCategory;
document.getElementById("buildingsB").onclick = selectCategory;
let wordHolder = document.getElementById("hold");
let newArray = [];
let selection = function() {
  var t = document.createElement("span");
  t.id = "spanId";
  for (i = 0; i < word.length; i++) {
    newArray.push("- ");
    t.textContent += newArray[i];
    wordHolder.appendChild(t);
  }
};

let inputLetter = "";
let guessEvent = document.querySelector("#guess");
let checkMatch = function(e) {
  //store userInput in inputLetter
  inputLetter = document.getElementById("userInput");
  console.log(inputLetter.value);
  e.preventDefault();
  //https://stackoverflow.com/questions/7410063/how-can-i-listen-to-the-form-submit-event-in-javascript/7410112#7410112
  let letterIndex = word.indexOf(inputLetter.value.toUpperCase());
  console.log(word);
  console.log(letterIndex);
  //compare newArray to word

  if (letterIndex >= 0) {
    newArray[letterIndex] = word[letterIndex];
    console.log(newArray);
    var t = document.createElement("span");
    t.id = "spanId";
    document.getElementById("spanId").textContent = "";
    t.textContent = newArray;
    wordHolder.appendChild(t);
  } else {
  }
  let counter = 0;
  for (i = 0; i < word.length; i++)
    if (newArray[i] === word[i]) {
      counter++;
      if (counter === newArray.length) {
        alert("You Win");
      }
    }
};

guessEvent.addEventListener("submit", checkMatch);

////https://codepen.io/cathydutton/pen/ldazc
