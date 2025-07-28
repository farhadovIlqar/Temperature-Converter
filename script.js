const input = document.getElementById("temperatureInput");
const toFarenheit = document.getElementById("toFahrenheit");
const toCelsius = document.getElementById("toCelsius");
const result = document.getElementById("result");
let temp;

function converter() {
    if (toFahrenheit.checked) {
        if (input.value == '') {
            result.textContent = 'Please enter a temperature value.';
        }
        else {
            temp = Number(input.value);
            temp = (temp * 9 / 5) + 32;
            result.textContent = 'Temperature in Fahrenheit: ' + temp.toFixed(1) + '°F';
            input.value = '';
        }
    }
    else if (toCelsius.checked) {
        if (input.value == '') {
            result.textContent = 'Please enter a temperature value.';
        }
        else {
            temp = Number(input.value);
            temp = (temp - 32) * 5 / 9;
            result.textContent = 'Temperature in Celsius: ' + temp.toFixed(1) + '°C';
            input.value = '';
        }
    }
    else {
        result.textContent = 'Please select an option.';
    }
}

document.getElementById("convertButton").addEventListener("click", converter);