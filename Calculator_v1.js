
function add(x, y) {
    return x + y;
}

function subtract(x, y) {
    return x - y;
}

function multiply(x, y) {
    return x * y;
}

function divide(x, y) {
    return x / y;
}

/* This function takes the inputs from the user and executes the calculations using the functions above */
function operate(operator, x, y){  /* Need to enter a string for operator '+', '-', '*', or '/' */
    if (operator == '+') {
       return add(x, y);
    }
    else if (operator == '-') {
       return subtract(x, y);
    }
    else if (operator == '*') {
   return multiply(x, y);
    }
    else if (operator == '/') {
        if (y == 0) { 
        return "Hey not cool man, you can't divide by zero mannnnnnnn."
        }
        else {
         return divide(x, y);

        };
    }
    else {
        return "NOT AN OPERATOR";
    }
};

/* Declare button variables */
const resultDisplay = document.querySelector('#resultDisplay');
const btn1 = document.querySelector('#btn1');
const btn2 = document.querySelector('#btn2');
const btn3 = document.querySelector('#btn3');
const btn4 = document.querySelector('#btn4');
const btn5 = document.querySelector('#btn5');
const btn6 = document.querySelector('#btn6');
const btn7 = document.querySelector('#btn7');
const btn8 = document.querySelector('#btn8');
const btn9 = document.querySelector('#btn9');
const btn0 = document.querySelector('#btn0');
const btnDecimal = document.querySelector('#btnDecimal');
const btnAdd = document.querySelector('#btnAdd');
const btnSubtract = document.querySelector('#btnSubtract');
const btnMultiply = document.querySelector('#btnMultiply');
const btnDivide = document.querySelector('#btnDivide');
const btnEquals = document.querySelector('#btnEquals');
const btnClear = document.querySelector('#btnClear');
const btnDelete = document.querySelector('#btnDelete');


/* Declare Variables */
let myArray1 = [];
let myStr1 = '';
let myNum1 = 0;
let myMem1 = 0;  
let myOperator = '+';
let myResult = 0;
let lastButton = 'Clear';

/*  This function clears the display on the webpage*/
function clearDisplay() {
    let oldDiv = document.getElementById('resultDisplay');
    while(oldDiv.firstChild){
     oldDiv.removeChild(oldDiv.firstChild);
    };
}

/* This function updates the display on the webpage*/
function setDisplay(display){
    const div = document.createElement('div');
    div.textContent = display;
    resultDisplay.appendChild(div);
}

/* Function that executes when a Digit button is pressed */
function pushDigit(button) {
    button.addEventListener("click", () => {
        if (lastButton !== 'Equals') {
            clearDisplay();
            myArray1.push(button.textContent);
            myStr1 = myArray1.join('');
            myNum1 = Number(myStr1);
            setDisplay(myNum1);
            lastButton = 'Digit';
        };
    });
};

/* Function that executes when the Decimal button is pressed */
function pushDecimal(button) {
    button.addEventListener("click", () => {
        if (lastButton =='Digit') {
            clearDisplay();
            myArray1.push(button.textContent);
            myStr1 = myArray1.join('');
            myNum1 = Number(myStr1);
            setDisplay(myNum1 + '.');
            lastButton = 'Decimal';
        }
        else if ((lastButton =='Clear') || (lastButton == 'Operator')) {
            clearDisplay();
            myArray1.push('0');
            myArray1.push(button.textContent);
            myStr1 = myArray1.join('');
            myNum1 = Number(myStr1);
            setDisplay(myNum1 + '.');
            lastButton = 'Decimal';
        }
    });
};

/* Function that executes when the Delete button is pressed */
function pushDelete(button) {
    button.addEventListener("click", () => {
        if (lastButton !== 'Equals') {
        clearDisplay();
        myArray1.pop();
        myStr1 = myArray1.join('');
        myNum1 = Number(myStr1);
        setDisplay(myNum1); 
        };
    });
};

/* Function that executes when an Operator button is pressed */
function pushOperator(button) {
    button.addEventListener("click", () => {         
        if ((lastButton == 'Digit') || (lastButton == 'Decimal') || (lastButton == 'Equals'))  {
            myMem1 = operate(myOperator, myMem1, myNum1);
            myOperator = button.textContent;
            myArray1 = [];
            myStr1 = '';
            myNum1 = 0;
            clearDisplay();
            setDisplay(myMem1);
            lastButton = 'Operator';
        }
    });
};

/* Function that executes when the Equals button is pressed */
function pushEquals(button) {
    button.addEventListener("click", () => {
        clearDisplay();
        myResult = operate(myOperator, myMem1, myNum1);
        setDisplay(myResult);
        myOperator = '+';
        myArray1 = [];
        myStr1 = '';
        myNum1 = 0;
        myMem1 = myResult;
        lastButton = 'Equals';
    });
};

/* Function that executes when the Clear button is pressed */
function pushClear(button) {
    button.addEventListener("click", () => {
        clearDisplay();
        myOperator = '+';
        myMem1 = 0;
        myArray1 = [];
        myStr1 = '';
        myNum1 = 0;
        myResult = 0;
        lastButton = 'Clear';
    });
};


/* The below links the above functions to the html button elements */
pushDigit(btn1);
pushDigit(btn2);
pushDigit(btn3);
pushDigit(btn4);
pushDigit(btn5);
pushDigit(btn6);
pushDigit(btn7);
pushDigit(btn8);
pushDigit(btn9);
pushDigit(btn0);
pushDecimal(btnDecimal);
pushOperator(btnAdd);
pushOperator(btnSubtract);
pushOperator(btnMultiply);
pushOperator(btnDivide);
pushEquals(btnEquals);
pushClear(btnClear);
pushDelete(btnDelete);


/* The below links the keyboard to the buttons by simulating a click*/
let keyboardArray = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '.', '+', '-', '*', '/', '=', 'Backspace'];
let buttonArray = [btn1, btn2, btn3, btn4, btn5, btn6, btn7, btn8, btn9, btn0, btnDecimal, btnAdd, btnSubtract, btnMultiply, btnDivide, btnEquals, btnClear, btnDelete];

document.addEventListener('keydown', (event) => {
    let name = event.key;
    let code = event.code;
    if (keyboardArray.includes(name)) {
        let keyboardIndex = keyboardArray.indexOf(name);
        let button = buttonArray[keyboardIndex];
        button.click();
    };
  }, false);