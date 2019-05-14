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

var inputGuessCh1 = document.querySelector('#player__guess--ch1');
var inputGuessCh2 = document.querySelector('#player__guess--ch2');
var currentGuessCh1 = document.querySelector('#latest-score__guess--ch1');
var currentGuessCh2 = document.querySelector('#latest-score__guess--ch2');

var rangeError = document.querySelector(".range__div")

var randomNum 

var guessHintCh1 = document.querySelector('#latest-score__output--left');
var guessHintCh2 = document.querySelector('#latest-score__output--right');
var latestScoreErrorCh1 = document.querySelector("#player__guess--ch1");
var latestScoreErrorCh2 = document.querySelector("#player__guess--ch2");
var playerError = document.querySelector(".player__div")
var errorMessage = 
    `<img src="error-icon.svg" height= 10px width=10px> <p>Please enter a valid range</p>`;
var minRange;
var maxRange;

btnRangeUpdate.addEventListener('click', updateCorrectRange);
btnClear.addEventListener('click', clearPlayerForm);
btnReset.addEventListener('click', resetGame);
btnSubmit.addEventListener('click', function(){
  var noSymbolSuccess = onlyAlphaNumeric(inputNameCh1) && onlyAlphaNumeric(inputNameCh2);
  if (noSymbolSuccess){
    changeName (); 
    displayGuess ();
    checkResultsCh1 ();
    checkResultsCh2 ();
  } 
});

// make room in a div and hide and toggle

function updateRange() {
  if(inputRangeMin.value >= inputRangeMax.value) {
    var errorMessage = 
    `<img src="error-icon.svg" height= 5px width=5px> <p>Please enter a valid range</p>`;
    inputRangeMin.classList.add ("error-border");
    inputRangeMax.classList.add ("error-border");
    rangeError.innerHTML += errorMessage;
  } else { 
      outputRangeMin.innerHTML = inputRangeMin.value || 1;
      outputRangeMax.innerHTML = inputRangeMax.value || 100;
      inputRangeMin.value = "";
      inputRangeMax.value = "";
}
} 

function changeName() {
  outputNameCh1.innerHTML = inputNameCh1.value || "Challenger 1";
  outputNameCh2.innerHTML = inputNameCh2.value || "Challenger 2";
}

function generateRandomNumber() {
  minRange = parseInt(outputRangeMin.innerHTML);
  maxRange = parseInt(outputRangeMax.innerHTML);
  randomNum= Math.floor(Math.random() * (maxRange - minRange + 1)) + minRange;
  console.log(minRange);
  console.log(maxRange);
  console.log(randomNum);
  return randomNum;
}

function updateCorrectRange() {
  updateRange();
  generateRandomNumber();
}

function clearPlayerForm() {
  playerForm.reset();
}

function resetGame() {
  clearPlayerForm();
  generateRandomNumber();
  changeName();
}

function displayGuess (){

  if (checkLowerLimit(inputGuessCh1.value) && checkUpperLimit(inputGuessCh1.value)) {
    currentGuessCh1.innerHTML = inputGuessCh1.value || 1;
  } else {
    latestScoreErrorCh1.classList.add ("error-border");
    playerError.innerHTML += errorMessage;
  } 
  
  if (checkLowerLimit(inputGuessCh2.value) && checkUpperLimit(inputGuessCh2.value)) {
    currentGuessCh2.innerHTML = inputGuessCh2.value || 100;
  } else{
    latestScoreErrorCh2.classList.add ("error-border"); //add toggle to get rid of error message
    playerError.innerHTML += errorMessage;
  }
}

function checkLowerLimit(guess){
  return (guess > minRange);
}

function checkUpperLimit(guess){
  return (guess < maxRange)
}

function checkResultsCh1 () {
  var playerOneGuess = parseInt(inputGuessCh1.value);
 if (playerOneGuess > randomNum){
      guessHintCh1.innerHTML = "That's too high!";
      } else if 
      (playerOneGuess < randomNum){
      guessHintCh1.innerHTML = "That's too low!";
      } else {
      guessHintCh1.innerHTML = "BOOM!"
      }
}

function checkResultsCh2 () {
  var playerTwoGuess = parseInt(inputGuessCh2.value);
 if (playerTwoGuess > randomNum){
      guessHintCh2.innerHTML = "That's too high!";
      } else if 
    (playerTwoGuess < randomNum){
      guessHintCh2.innerHTML = "That's too low!";
      } else {
      guessHintCh2.innerHTML = "BOOM!";
}
}

function onlyAlphaNumeric (input){
  var lettersNumbers = /^[0-9a-zA-Z]+$/;
  if (input.value.match(lettersNumbers)) {
    return true;
  } else {
    //remove this alert upon entering error message
    alert ('No symbols please');
    return false;
}
} 


window.onload = generateRandomNumber();










