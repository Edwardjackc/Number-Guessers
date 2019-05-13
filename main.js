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

var randomNum 

var guessHintCh1 = document.querySelector('#latest-score__output--left');
var guessHintCh2 = document.querySelector('#latest-score__output--right');


btnRangeUpdate.addEventListener('click', updateCorrectRange);
cardContainer.addEventListener('click',deleteCard)
inputNameCh1.addEventListener('keydown', validateForAlphaNumeric)
inputNameCh2.addEventListener('keydown', validateForAlphaNumeric)

btnSubmit.addEventListener('click', function () {
  // var noSymbolSuccess = onlyAlphaNumeric(inputNameCh1) && onlyAlphaNumeric(inputNameCh2);
  // if (noSymbolSuccess) {
  changeName();
  displayGuess();
  checkResultsCh1();
  checkResultsCh2();
  callWinner();
  appendCard();
  }) 
// });

btnClear.addEventListener('click', function() {
  clearPlayerForm()
  disabledBtn(btnSubmit)
  disableBtn(btnClear)
  disableBtn(btnReset)
  styleBtn(btnClear)
  styleBtn(btnReset)
})


playerForm.addEventListener('keyup',function() {
  enableBtn(btnClear)
  enableBtn(btnReset)
  styleBtn(btnClear)
  styleBtn(btnReset)
  enableSubmit()
});


btnReset.addEventListener('click',function() {
  resetGame()
});


function pageLoad() {
  generateRandomNumber();
}

function resetGame() {
  clearPlayerForm();
  generateRandomNumber();
  changeName();
  disableBtn(btnClear)
  disableBtn(btnReset)
}

function callWinner() { 
  if (checkResultsCh1 ===true) {
    appendCard();
  }
}


function updateRange() {
  outputRangeMin.innerHTML = inputRangeMin.value || 1;
  outputRangeMax.innerHTML = inputRangeMax.value || 100;
  inputRangeMin.value = "";
  inputRangeMax.value = "";
} 

function displayGuess() {
  currentGuessCh1.innerHTML = inputGuessCh1.value || "?"
  currentGuessCh2.innerHTML = inputGuessCh2.value || "?"
}

function changeName() {
  outputNameCh1.innerHTML = inputNameCh1.value || "Challenger 1";
  outputNameCh2.innerHTML = inputNameCh2.value || "Challenger 2";
}

function generateRandomNumber() {
  var minRange = parseInt(outputRangeMin.innerHTML)
  var maxRange = parseInt(outputRangeMax.innerHTML)
  var randomNum= Math.floor(Math.random() * (maxRange - minRange + 1)) + minRange;
  console.log(randomNum)
}

function updateCorrectRange() {
  updateRange();
  generateRandomNumber();
}

function clearPlayerForm() {
  playerForm.reset();
  console.log('hi')
}

function disableBtn(button) {
  button.disabled = true
  styleBtn(button)
}

function enableBtn(button) {
  let inputOnForm = playerForm.value === /[\w\t\n\r]/
  button.disabled = inputOnForm  ? true : false
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

function checkResultsCh1() {
  var playerOneGuess = parseInt(inputGuessCh1.value);
  if (playerOneGuess > randomNum) {
    guessHintCh1.innerHTML = "That's too high!";
  } else if
    (playerOneGuess < randomNum) {
    guessHintCh1.innerHTML = "That's too low!";
  } else {
    guessHintCh1.innerHTML = "BOOM!"
    return true 
  }
}

function checkResultsCh2() {
  var playerTwoGuess = parseInt(inputGuessCh2.value);
  if (playerTwoGuess > randomNum) {
    guessHintCh2.innerHTML = "That's too high!";
  } else if
    (playerTwoGuess < randomNum) {
    guessHintCh2.innerHTML = "That's too low!";
  } else {
    guessHintCh2.innerHTML = "BOOM!";
  }
}

function validateForAlphaNumeric(e) {
  var regexChar = /[\w\t\n\r]/;
  if (e.key === 'Backspace' || regexChar.test(e.key)) {
  } else {
    e.preventDefault();
  }
};

function deleteCard(e) { 
  if (e.target.closest('article'))
    e.target.parentNode.parentNode.parentNode.remove('article')
    console.log('hi')
}



function appendCard() {
  cardContainer.innerHTML += `<section class="card__section">
    <article class="card__div--ch">
      <span class="card__span--ch1">${inputNameCh1.value.toUpperCase() || `Challenger 1`}</span>
      <p>VS</p>
      <span class="card__span--ch2">${inputNameCh2.value.toUpperCase() || `Challenger 2`}</span>
      </div>
      <div class="card__div--winner">
      <span class="card__span--name">${'Challenger'.toUpperCase() || 'Challenger'.toUpperCase()}</span>
      <span class="card__span--winner">WINNER</span>
      </div>
      <div class="card__div--bottom">
      <span class="card__span--guess">XX GUESSES</span>
      <span class="card__span--minutes">XX MINUTES</span>
      <button class="card__btn--close" type="button">x</button>
      </div>
    </article>
    </section>`
  generateRandomNumber();
}

window.onload = pageLoad()
