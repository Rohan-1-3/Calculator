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

const para = document.querySelector('p');
const numberValues = document.querySelectorAll('input');
// const operatorValues = document.querySelectorAll('button')

function getOperatorValues(){

}

function clear(){
    para.textContent = '1'
}
function getNumberValues(){
    numberValues.forEach((numberValue)=>{
        numberValue.addEventListener('click' , (e)=>{
            para.textContent += e.target.value;
        })
    })
} 
getNumberValues();


