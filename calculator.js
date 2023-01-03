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

const numberValues = document.querySelectorAll('input');
const divContent = document.getElementById('calc');
const operatorValues = document.querySelectorAll('.button');

function getOperatorValues(){
    operatorValues.forEach((operatorValue)=>{
        operatorValue.addEventListener('click', (e)=>{
            console.log(e.target.id)
        })
    })
}

function clearButton(){
    divContent.textContent = '0'
}
function getNumberValues(){
    numberValues.forEach((numberValue)=>{
        numberValue.addEventListener('click' , (e)=>{
            divContent.textContent === '0' ? divContent.textContent = e.target.value :
            divContent.textContent += e.target.value;
        })
    })
} 
getNumberValues();
getOperatorValues();


