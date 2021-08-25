
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
    if(operator == '+') {
       return add(x, y);
    }
    else if (operator == '-') {
       return subtract(x, y);
    }
    else if (operator == '*') {
   return multiply(x, y);
    }
    else if (operator == '/') {
   return divide(x, y);
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
const btnEquals = document.querySelector('#btnEquals');
const btnClear = document.querySelector('#btnClear');
const btnAdd = document.querySelector('#btnAdd');
const btnSubtract = document.querySelector('#btnSubtract');
const btnMultiply = document.querySelector('#btnMultiply');
const btnDivide = document.querySelector('#btnDivide');

/* Displays the text contents of a particular button when pushed */
/* function btnPush(button) {
button.addEventListener("click", () => {

let oldDiv = document.getElementById('resultDisplay');
while(oldDiv.firstChild){
     oldDiv.removeChild(oldDiv.firstChild);
}    
const div = document.createElement('div');
div.textContent = button.textContent;
resultDisplay.appendChild(div);
});
};

btnPush(btn1);
btnPush(btn2);
btnPush(btn3);
btnPush(btn4);
btnPush(btn5);
btnPush(btn6);
btnPush(btn7);
btnPush(btn8);
btnPush(btn9);
btnPush(btn0);
btnPush(btnEquals);
btnPush(btnClear);
btnPush(btnAdd);
btnPush(btnSubtract);
btnPush(btnMultiply);
btnPush(btnDivide); */



let array1 = [];
let array2 = [];
let input1 = 0;
let input2 = 0;
let lastOperatorFlag = "input1";



function pushDigit(button) {
    button.addEventListener("click", () => {
    
    
    let oldDiv = document.getElementById('resultDisplay');
    while(oldDiv.firstChild){
     oldDiv.removeChild(oldDiv.firstChild);
    };

    if(lastOperatorFlag == "input1") {
        array1.push(button.textContent);
        let strArray1 = array1.join('');
        input1 = parseInt(strArray1);
        console.log("input1");
        const div = document.createElement('div');
        div.textContent = input1;
        resultDisplay.appendChild(div);
    }
    else if(lastOperatorFlag == "input2") {
        
        array2.push(button.textContent);
        let strArray2 = array2.join('');
        input2 = parseInt(strArray2);
        console.log("input2");
        const div = document.createElement('div');
        div.textContent = input2;
        resultDisplay.appendChild(div);
    };

    });
};

function pushOperator(button) {
    button.addEventListener("click", () => {
    lastOperatorFlag = "input2";
    let oldDiv = document.getElementById('resultDisplay');
    while(oldDiv.firstChild){
        oldDiv.removeChild(oldDiv.firstChild);
    };
    const div = document.createElement('div');
    div.textContent = button.textContent;
    resultDisplay.appendChild(div);
    });
};

function pushEquals(button) {
    lastOperatorFlag = "input1";

};

function pushClear(button) {
    lastOperatorFlag = "input1";

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
pushOperator(btnAdd);
pushOperator(btnSubtract);
pushOperator(btnMultiply);
pushOperator(btnDivide);

