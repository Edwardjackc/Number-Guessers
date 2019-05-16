var btnRangeUpdate = document.querySelector('#js_range__btn--update');
var inputRangeMin = document.querySelector('#js_range__input--min');
var inputRangeMax = document.querySelector('#js_range__input--max');
var outputRangeMin = document.querySelector('#player__span--min');
var outputRangeMax =  document.querySelector('#player__span--max');
var inputNameCh1 = document.querySelector('#player__name--ch1');
var inputNameCh2 = document.querySelector('#player__name--ch2');
var outputNameCh1 =document.querySelector('#latest-score__span--ch1');
var outputNameCh2 = document.querySelector('#latest-score__span--ch2');
var btnSubmit = document.querySelector('#player__btn--submit');
var playerForm = document.querySelector('#player__form');
var btnClear = document.querySelector('#player__btn--clear');
var btnReset = document.querySelector('#player__btn--reset');
var cardContainer = document.querySelector('.card__container');
var inputGuessCh1 = document.querySelector('#player__guess--ch1');
var inputGuessCh2 = document.querySelector('#player__guess--ch2');
var currentGuessCh1 = document.querySelector('#latest-score__guess--ch1');
var currentGuessCh2 = document.querySelector('#latest-score__guess--ch2');
var guessHintCh1 = document.querySelector('#latest-score__output--left');
var guessHintCh2 = document.querySelector('#latest-score__output--right');
var winnerBanner = document.querySelector('#card__span--winner');
var rangeForm = document.querySelector('.range__form');
var guessGlobalCount = 0

inputRangeMin.addEventListener('keydown', validateForNumeric);
inputRangeMax.addEventListener('keydown', validateForNumeric);
btnRangeUpdate.addEventListener('click', updateCorrectRange);
cardContainer.addEventListener('click',deleteCard);
inputNameCh1.addEventListener('keydown',validateForAlphaNumeric);
inputNameCh2.addEventListener('keydown',validateForAlphaNumeric);
inputGuessCh1.addEventListener('keydown',validateForNumeric);
inputGuessCh2.addEventListener('keydown',validateForNumeric);
btnClear.addEventListener('click', clickBtnClearEvent)
playerForm.addEventListener('keypress', keyPressPlayerFormEvent)
btnSubmit.addEventListener('click', clickBtnSubmitEvent);
btnReset.addEventListener('click', clickResetGameEvent)

  function clickResetGameEvent() {
    // clearForm(playerForm);
    clearForm(rangeForm);
    generateRandomNumber();
    changeName();
    disableBtn(btnClear)
    disableBtn(btnReset)
    styleBtn(btnClear)
    styleBtn(btnReset)
}

function pageLoad() {
  generateRandomNumber();
}

function updateCorrectRange() {
  updateRange();
  generateRandomNumber();
}

function clickBtnSubmitEvent() {
  changeName();
  displayGuess();
  checkResultsCh(inputGuessCh1, guessHintCh1);
  checkResultsCh(inputGuessCh2, guessHintCh2);
  // clearForm(rangeForm);
  clearForm(playerForm);
  disableBtn(btnSubmit);
  guessCounter(guessGlobalCount)
}

function keyPressPlayerFormEvent() {
  enableBtn(btnClear)
  enableBtn(btnReset)
  styleBtn(btnClear)
  styleBtn(btnReset)
  enableSubmit()
}

function clickBtnClearEvent() {
  clearForm(playerForm)
  clearForm(rangeForm)
  disableBtn(btnSubmit)
  disableBtn(btnClear)
  disableBtn(btnReset)
  styleBtn(btnClear)
  styleBtn(btnReset)
}

function guessCounter() {
  debugger;
  guessesAccumulate = guessGlobalCount +=2;
  return guessesAccumulate
}

function updateRange() {
  outputRangeMin.innerHTML = inputRangeMin.value || 1;
  outputRangeMax.innerHTML = inputRangeMax.value || 100;
} 

function displayGuess() {
  currentGuessCh1.innerHTML = inputGuessCh1.value || "?"
  currentGuessCh2.innerHTML = inputGuessCh2.value || "?"
}

function changeName() {
  outputNameCh1.innerHTML = inputNameCh1.value || "Challenger 1 Name";
  outputNameCh2.innerHTML = inputNameCh2.value || "Challenger 2 Name";
}

function generateRandomNumber() {
  var minRange = parseInt(outputRangeMin.innerHTML)
  var maxRange = parseInt(outputRangeMax.innerHTML)
  randomNum= Math.floor(Math.random() * (maxRange - minRange + 1)) + minRange;
  console.log(randomNum)
  return randomNum
}

function clearForm(object) {
  object.reset();
}

function disableBtn(button) {
  button.disabled = true
}

function enableBtn(button) {
  let inputOnForm = playerForm.value === /[\d\w\t\n\r]/
  button.disabled = inputOnForm  ? true:false
}

function enableSubmit() { 
  condition = inputNameCh1.value && inputNameCh2.value === ""
  btnSubmit.disabled = condition ? true:false
}

function styleBtn(button) {
  button.style.cssText = button.disabled === true 
  ? "background-color:#d0d2d3" 
  : "background-color: #6e6e6e"
}

function checkResultsCh(guess,hint) {
  var playerGuess = parseInt(guess.value);
  if (playerGuess > randomNum) {
    hint.innerText = "That's too high!";
  }else if
    (playerGuess < randomNum) {
    hint.innerText = "That's too low!";
  }else{
    hint.innerText = "BOOM!"
    appendCard()
  }
}

function whoWon() {
  if(currentGuessCh1.innerHTML == randomNum) {
    var winnerName =inputNameCh1.value
  }else{  
    var winnerName =inputNameCh2.value
  }
    return winnerName
}

function validateForAlphaNumeric(e) {
  var acceptableChar = /[\w\t\n\r]/;
  if (e.key === 'Backspace' || acceptableChar.test(e.key)) {
  } else {
    e.preventDefault();
  }
}

function validateForNumeric(e) {
  var acceptableNum = /[\d\t\n\r]/;
  if (e.key === 'Backspace' || acceptableNum.test(e.key)) {
  } else {
    e.preventDefault();
  }
}

function deleteCard(e) { 
  if (e.target.classList.contains('card__btn--delete'))
    e.target.closest('section').remove()
}

// function goClock(timer) {
//   setInterval(() => timer++, 1000)
// }

function appendCard() {
  cardContainer.innerHTML += `<section class="card__section">
    <div class="card__div--ch">
      <span class="card__span--ch1" name="player-one-name">${inputNameCh1.value.toUpperCase() || `Challenger 1`}</span>
      <p>VS</p>
      <span class="card__span--ch2" name="player-two-name>${inputNameCh2.value.toUpperCase() || `Challenger 2`}</span>
      </div>
      <div class="card__div--winner">
      <span class="card__span--name"name="winning-player-name"> ${whoWon().toUpperCase()}
        </span>
      <span class="card__span--winner" id="card__span--winner" >WINNER</span>
      </div>
      <div class="card__div--bottom">
      <span class="card__span--guess">${guessesAccumulate}</span>
      <span class="card__span--minutes">time</span>
      <button class="card__btn--delete" type="button"name="delete-card-button">x</button>
      </div>
    </div>
    </section>`
  increaseRange();
  generateRandomNumber();
  resetCounter();
}

function resetCounter() {
  guessGlobalCount = 0 
}

function increaseRange() {
    outputRangeMin.innerHTML = parseInt(outputRangeMin.innerHTML) -10 || 1 - 10
    outputRangeMax.innerHTML = parseInt(outputRangeMax.innerHTML) +10 || 100 + 10
    clearForm(rangeForm)
} 

// error message in html display:visable  with img and message
// conditional that toggles display property 
this.onload = pageLoad()