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

btnRangeUpdate.addEventListener('click', updateCorrectRange);
btnSubmit.addEventListener('click', changeName);
btnClear.addEventListener('click', clearPlayerForm);
btnReset.addEventListener('click', resetGame)

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
  var minRange = parseInt(outputRangeMin.innerHTML)
  var maxRange = parseInt(outputRangeMax.innerHTML)
  var randomNum= Math.floor(Math.random() * (maxRange - minRange + 1)) + minRange;
  console.log(minRange)
  console.log(maxRange)
  console.log(randomNum)
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

// function enabledBtn() { 
//  .classList.add('.btnEnabled');
// }


window.onload = generateRandomNumber();


























