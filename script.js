// You selected 4 out of 5

// Selector all the btns
// Get the value from the number buttons (ratings)
// When clicked on the submit btn change to the submit state

// DECLARING VARIABLES
const rating = document.querySelectorAll(".number");
const mainBtn = document.querySelector(".main-btn");
const normalState = document.querySelector(".normal-state");
const submitState = document.querySelector(".submit-state");
const ratingMessage = document.querySelector(".rating-message");
let score = 0;

mainBtn.addEventListener("click", onSubmit);
rating.forEach((btn) => {
  btn.addEventListener("click", ratingHandler);
});

function onSubmit() {
  normalState.classList.add("state");
  submitState.classList.remove("state");
}

function ratingHandler(e) {
  score = e.target.textContent;
  //   console.log(score);
  ratingMessage.textContent = `You selected ${score} out of 5`;
}

// console.log(rating);
