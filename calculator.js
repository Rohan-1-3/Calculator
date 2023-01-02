//Basic Operator Functions
function add(a,b){
    return a+b;
}

function subtract(a,b){
    return a-b;
}

function divide(a,b){
    return a/b;
}

function multiply(a,b){
    return a*b;
}

//Operator
function operation(operator){
    return operator === '+' ? add(a,b) :
    operator === '-' ? subtract(a,b) :
    operator === '*' ? multiply(a,b) :
    operator === '/' ? divide(a,b) : 
    "Not a valid Operator";
}

