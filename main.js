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


btnRangeUpdate.addEventListener('click', updateCorrectRange)
btnSubmit.addEventListener('click', changeName)


function updateRange() {
  outputRangeMin.innerHTML = inputRangeMin.value || 1;
  outputRangeMax.innerHTML = inputRangeMax.value || 100; 
  inputRangeMin.value = "";
  inputRangeMax.value = "";
} 

function changeName() {
  outputNameCh1.innerHTML = inputNameCh1.value;
  outputNameCh2.innerHTML = inputNameCh2.value;
  inputNameCh1 = "";
  inputNameCh2 = "";
}

function genRandomNum() {
  let minRange = parseInt(outputRangeMin.innerHTML)
  let maxRange = parseInt(outputRangeMax.innerHTML)
  var randomNum = Math.floor(Math.random() * (maxRange - minRange +1) + minRange)
  console.log(minRange)
  console.log(maxRange)
  console.log(randomNum)
}

function updateCorrectRange() { 
  updateRange(); 
  genRandomNum();
}

window.onLoad = genRandomNum();