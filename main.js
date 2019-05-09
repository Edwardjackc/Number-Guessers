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






btnRangeUpdate.addEventListener('click', updateRange)
btnSubmit.addEventListener('click', changeName)






function updateRange() {
  outputRangeMin.innerHTML = inputRangeMin.value || 1;
  outputRangeMax.innerHTML = inputRangeMax.value || 100;
  inputRangeMin.value = "";
  inputRangeMax.value = "";
  generateRandomNumber();
} 

function changeName() {
  outputNameCh1.innerHTML = inputNameCh1.value;
  outputNameCh2.innerHTML = inputNameCh2.value;
  inputNameCh1 = "";
  inputNameCh2 = "";
}

function generateRandomNumber() {
  var correctNumberMin = inputRangeMin.value || 1;
  var correctNumberMax = inputRangeMax.value || 100;
  var correctNumber = Math.floor(Math.random() * (correctNumberMax - correctNumberMin + 1)) + correctNumberMin;
  console.log(correctNumber);
}


window.onload = generateRandomNumber();


























