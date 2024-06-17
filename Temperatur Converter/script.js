function convertTemperature() {
    const inputTemp = document.getElementById('inputTemp').value;
    const tempUnit = document.getElementById('tempUnit').value;
    const output = document.getElementById('output');

    if (inputTemp === '') {
        output.textContent = 'Please enter a temperature value.';
        return;
    }

    const temp = parseFloat(inputTemp);
    let convertedTemp;

    if (tempUnit === 'celsius') {
        convertedTemp = (temp * 9/5) + 32;
        output.textContent = `${temp}°C is equal to ${convertedTemp.toFixed(2)}°F`;
    } else if (tempUnit === 'fahrenheit') {
        convertedTemp = (temp - 32) * 5/9;
        output.textContent = `${temp}°F is equal to ${convertedTemp.toFixed(2)}°C`;
    } else {
        output.textContent = 'Invalid unit selection.';
    }
}
