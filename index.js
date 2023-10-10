let numOne = 0;
let operation = null;
let numTwo = 0;
let displayValue = 0;


function add(numOne, numTwo) {
    return numOne + numTwo;
};

function subtract(numOne, numTwo) {
    return numOne - numTwo;
};

function multiply(numOne, numTwo) {
    return numOne * numTwo;
};

function divide(numOne, numTwo) {
    return numOne / numTwo;
};

function operate(operator, numOne, numTwo) {
    let result = 0;
    switch (operator) {
        case 'add':
            result = add(numOne, numTwo);
            break;
        case 'subtract':
            result = subtract(numOne, numTwo);
            break;
        case 'multiply':
            result = multiply(numOne, numTwo);
            break;
        case 'divide':
            if (numTwo == 0) {
                alert("Snarky error!")
                clearDisplayValue()
            }
            else {
                result = divide(numOne, numTwo);
                break;
            }
    }
    displayValue = result;
    updateDisplay();
};

function updateDisplay() {
    const display = document.querySelector('#display');
    display.textContent = Math.round(displayValue * 100) / 100;
}

function clearDisplayValue() {
    displayValue = 0;
    numOne = 0;
    operation = null;
    numTwo = 0;
}


const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {

    button.addEventListener('click', () => {
        if (button.id == "clear") {
            clearDisplayValue();
            updateDisplay();
        }
        else if (button.id == "equals") {
            numTwo = Number(displayValue);
            operate(operation, numOne, numTwo);
            numOne = Number(displayValue);
            displayValue = 0;

        }
        else if (button.id == "decimal") {
            displayValue = displayValue + ".";
            updateDisplay();
        }
        else if (button.id == "divide" || button.id == "multiply" || button.id == "add" || button.id == "subtract") {
            if (numOne > 0) {
                numTwo = Number(displayValue);
                operate(operation, numOne, numTwo);
                operation = button.id;
                numOne = Number(displayValue);
                displayValue = 0;
            }
            else {
                numOne = Number(displayValue);
                operation = button.id;
                updateDisplay();
                displayValue = 0;
            }


        }
        else {
            updateDisplay();
            displayValue = displayValue + button.id;
            updateDisplay();


        }
        console.log("display: " + displayValue);
        console.log("numOne: " + numOne);

        console.log("operation: " + operation);
        console.log("numTwo: " + numTwo);
    });
});

updateDisplay();