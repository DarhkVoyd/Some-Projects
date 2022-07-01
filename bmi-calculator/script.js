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

    if (!heightValue || !weightValue || heightValue < 0 || weightValue < 0)
    {
        alert('Enter valid value!!');
        return 1;
    }

    let bmi = (weightValue / (heightValue * heightValue)).toFixed(2);
    let result = '';
    if (bmi < 18.5)
    {
        result = 'Underweight';
    }
    else if (bmi >= 18.5 && bmi < 25)
    {
        result = 'Normal';
    }
    else if (bmi >= 25 && bmi < 30)
    {
        result = 'Overweight';
    }
    else {
        result = 'Obese'
    }
    document.getElementById('result').textContent = `Result: ${bmi} -> ${result}`;
} 