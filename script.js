const height = document.getElementById('height');
const weight = document.getElementById('weight');
const calculateButton = document.getElementById('calculate');
const clearButton = document.getElementById('clear');

calculateButton.addEventListener('click', calculate);
clearButton.addEventListener('click', clear)

function clear() {
    height.value = null;
    weight.value = null;
    document.getElementById('result').textContent = null;
}

function calculate() {     
    heightValue = parseFloat(height.value);
    weightValue = parseFloat(weight.value);
    document.getElementById('result').textContent = `Result: ${(weightValue / (heightValue * heightValue)).toFixed(2)}`;
} 