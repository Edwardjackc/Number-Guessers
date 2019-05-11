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

var randomNum 

var guessHintCh1 = document.querySelector('#latest-score__output--left');
var guessHintCh2 = document.querySelector('#latest-score__output--right');

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
  } //else
  //error message
});


function updateRange() {
  outputRangeMin.innerHTML = inputRangeMin.value || 1;
  outputRangeMax.innerHTML = inputRangeMax.value || 100;
  inputRangeMin.value = "";
  inputRangeMax.value = "";
} 

function changeName() {
  outputNameCh1.innerHTML = inputNameCh1.value || "Challenger 1";
  outputNameCh2.innerHTML = inputNameCh2.value || "Challenger 2";
}

function generateRandomNumber() {
  var minRange = parseInt(outputRangeMin.innerHTML);
  var maxRange = parseInt(outputRangeMax.innerHTML);
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


//query scorecard number and set to var for each ch
//query each guess from each ch and set to var 
//display each guess on a card


function displayGuess (){
currentGuessCh1.innerHTML = inputGuessCh1.value || 1;
currentGuessCh2.innerHTML = inputGuessCh2.value || 100; 
}

//target the random number
//compare against guess
//conditional on if high or low or correct

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
    changeName ();
    return true;
  } else {
    //remove this alert upon entering error message
    alert ('No symbols please');
    return false;
}
} 


window.onload = generateRandomNumber();










