const rangeEl = document.getElementById('percent');
const percentage = document.querySelector('.percentage');
const percentageSpan = document.querySelector('.percentage span');
const tipValue = document.getElementById('tip');
const totalValue = document.getElementById('total');
const calculate = document.getElementById('calculate');

rangeEl.addEventListener('input', range)

function range() {
  console.log(rangeEl.value);
  percentageSpan.innerText = `${rangeEl.value}%`;
}

calculate.addEventListener('click', tip);

function tip() {
  document.getElementById('tip').placeholder = (document.getElementById('bill').value * (rangeEl.value / 100)).toFixed(2);
}

calculate.addEventListener('click', total);

function total() {
  document.getElementById('total').placeholder = (parseFloat(document.getElementById('bill').value) + (parseFloat(document.getElementById('tip').placeholder))).toFixed(2);
}