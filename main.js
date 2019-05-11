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
btnSubmit.addEventListener('click',function() {
  changeName();
});

btnClear.addEventListener('click', clearPlayerForm);

playerForm.addEventListener('keyup',function() {
  enableBtn(btnClear)
  enableBtn(btnReset)
  styleBtn(btnClear)
  styleBtn(btnReset)
});


btnReset.addEventListener('click',function() {
  resetGame()
});


function pageLoad() {
  generateRandomNumber();
  enableBtn(btnClear)
}

function resetGame() {
  clearPlayerForm();
  generateRandomNumber();
  changeName();
}

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

function enableBtn(button) {
  let inputOnForm = playerForm.value === ""
  button.disabled = inputOnForm  ? true : false
  console.log(button.disabled)
}

function styleBtn(button) {
    button.style.cssText = button.disabled === true 
    ? "background-color:#d0d2d3" 
    : "background-color: #6e6e6e"
}



window.onload = pageLoad()


























