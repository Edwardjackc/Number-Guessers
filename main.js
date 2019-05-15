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

// var rangeError = document.querySelector(".range__div")

var randomNum 

var guessHintCh1 = document.querySelector('#latest-score__output--left');
var guessHintCh2 = document.querySelector('#latest-score__output--right');
var latestScoreErrorCh1 = document.querySelector("#player__guess--ch1");
var latestScoreErrorCh2 = document.querySelector("#player__guess--ch2");
var playerError = document.querySelector("#range__input--error")
var minRange;
var maxRange;

btnRangeUpdate.addEventListener('click', updateCorrectRange);
btnClear.addEventListener('click', clearPlayerForm);
btnReset.addEventListener('click', resetGame);
btnSubmit.addEventListener('click', function(){
  var noSymbolSuccess = onlyAlphaCh1(inputNameCh1) && onlyAlphaCh2(inputNameCh2);
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
    inputRangeMin.classList.add ("error-border");
    inputRangeMax.classList.add ("error-border");
    playerError.classList.toggle("hidden", false);
  } else { 
    outputRangeMin.innerHTML = inputRangeMin.value || 1;
    outputRangeMax.innerHTML = inputRangeMax.value || 100;
    inputRangeMin.value = "";
    inputRangeMax.value = "";
    playerError.classList.toggle("hidden", true)
    inputRangeMin.classList.remove ("error-border");
    inputRangeMax.classList.remove ("error-border");
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


var guessErrorCh1 = document.querySelector ('#ch1__guess--error');
var guessErrorCh2 = document.querySelector ('#ch2__guess--error');

function displayGuess (){

  if (checkLowerLimit(inputGuessCh1.value) && checkUpperLimit(inputGuessCh1.value)) {
    currentGuessCh1.innerHTML = inputGuessCh1.value || 1;
    guessErrorCh1.classList.toggle("hidden", true);
    latestScoreErrorCh1.classList.remove ("error-border");
  } else {
    latestScoreErrorCh1.classList.add ("error-border");
    guessErrorCh1.classList.toggle("hidden", false);
  } 
  
  if (checkLowerLimit(inputGuessCh2.value) && checkUpperLimit(inputGuessCh2.value)) {
    currentGuessCh2.innerHTML = inputGuessCh2.value || 100;
    guessErrorCh2.classList.toggle("hidden", true);
    latestScoreErrorCh2.classList.remove ("error-border");
  } else{
    latestScoreErrorCh2.classList.add ("error-border"); //add toggle to get rid of error message
    guessErrorCh2.classList.toggle("hidden", false);
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

var nameErrorCh1 = document.querySelector ('#ch1__name--error');
var nameErrorCh2 = document.querySelector ('#ch2__name--error');

// function onlyAlphaNumeric (input){
//   onlyAlphaCh1 ();
//   onlyAlphaCh2 ();
// } 

function onlyAlphaCh1 (input){
  var lettersNumbers = /^[0-9a-zA-Z]+$/;
  if (input.value.match(lettersNumbers)){
  inputNameCh1.classList.remove('error-border');
  nameErrorCh1.classList.toggle('hidden', true);
  return true;
} else {
  inputNameCh1.classList.add('error-border')
  nameErrorCh1.classList.toggle('hidden', false)
}
}

function onlyAlphaCh2 (input){
  var lettersNumbers = /^[0-9a-zA-Z]+$/;
  if (input.value.match(lettersNumbers)){
  inputNameCh2.classList.remove('error-border');
  nameErrorCh2.classList.toggle('hidden', true);
  return true;
} else {
  inputNameCh2.classList.add('error-border')
  nameErrorCh2.classList.toggle('hidden', false)
}
}



window.onload = generateRandomNumber();










