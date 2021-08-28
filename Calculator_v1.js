
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


document.addEventListener('keydown', (event) => {
    var name = event.key;
    var code = event.code;
    // Alert the key name and key code on keydown
    alert(`Key pressed ${name} \r\n Key code value: ${code}`);
  }, false);


let myArray1 = [];
let myStr1 = '';
let myNum1 = 0;
let myMem1 = 0;  
let myOperator = '+';
let myResult = 0;
let lastButton = 'Clear';



function clearDisplay() {
    let oldDiv = document.getElementById('resultDisplay');
    while(oldDiv.firstChild){
     oldDiv.removeChild(oldDiv.firstChild);
    };
}

function setDisplay(display){
    const div = document.createElement('div');
    div.textContent = display;
    resultDisplay.appendChild(div);
}

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