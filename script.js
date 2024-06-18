// Function to append text to the display input
function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

// Function to clear the display input
function clearDisplay() {
    document.getElementById('display').value = '';
}

// Function to evaluate and calculate the expression
function calculate() {
    try {
        let result = eval(document.getElementById('display').value);
        document.getElementById('display').value = result;
    } catch (e) {
        document.getElementById('display').value = 'Error';
    }
}

// Function to delete the last character from display
function deleteLastChar() {
    let displayValue = document.getElementById('display').value;
    document.getElementById('display').value = displayValue.slice(0, -1);
}
