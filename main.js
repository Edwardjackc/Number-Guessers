var btnRangeUpdate = document.querySelector('#js_range__btn--update');
var inputRangeMin = document.querySelector('#js_range__input--min');
var inputRangeMax = document.querySelector('#js_range__input--max');
var outputRangeMin = document.querySelector('#player__span--min');
var outputRangeMax =  document.querySelector('#player__span--max');

btnRangeUpdate.addEventListener('click', updateRange)




function updateRange() {
outputRangeMin.innerHTML = inputRangeMin.value || 1;
outputRangeMax.innerHTML = inputRangeMax.value || 100;
inputRangeMin.value = "";
inputRangeMax.value = "";

} 


