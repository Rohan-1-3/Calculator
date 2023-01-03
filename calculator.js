//Basic Operator Functions
var a = 0;
var b = 0;
var operator = '';
const numberValues = document.querySelectorAll('input');
const divContent = document.getElementById('calc');
const operatorValues = document.querySelectorAll('.button');

function add(a,b){
    return parseInt(a)+parseInt(b);
}

function subtract(a,b){
    return parseInt(a)-parseInt(b);
}

function divide(a,b){
    return parseInt(a)/parseInt(b);
}

function multiply(a,b){
    return parseInt(a)*parseInt(b);
}

//Operator
function operation(operator){ 
    if(operator === '+'){
       return add(a,b);
    }
    else if(operator === '-'){
        return subtract(a,b);
    }
    else if(operator === '*'){
        return multiply(a,b);
    }
    else if(operator === '/'){
        return divide(a,b);
    }
    else{
        return;
    }
    
}

function getOperatorValues(){
    operatorValues.forEach((operatorValue)=>{
        operatorValue.addEventListener('click', (e)=>{
            if(operator === '='){//getting operator after equal button
                operator = e.target.id;
                divContent.textContent = '';
            }
            else{//getting operator and operating
                if(a === 0){
                    a = divContent.textContent;
                    divContent.textContent = operator;
                }
                else if (b === 0){ 
                        b = divContent.textContent;
                        a = operation(operator);
                        b = 0;
                        divContent.textContent = a
                }
                operator = e.target.id;
            }
        })
    })
}

function getNumberValues(){
    numberValues.forEach((numberValue)=>{
        numberValue.addEventListener('click' , (e)=>{
            divContent.textContent === '+' || divContent.textContent === '-' || 
            divContent.textContent === '/' || divContent.textContent === '*' || 
            divContent.textContent === `${a}` ? divContent.textContent = e.target.value :
            divContent.textContent += e.target.value;
        })
    })
}

//Equal button function
function equalButton(){
    if(a === 0){
        alert('No');//when no value is given
    }
    else if(b === 0){
        b = divContent.textContent;
        a = operation(operator);
        b = 0;
        divContent.textContent = a;
        operator = '=';
    }
}
//resetting everything to start
function clearAll(){
    a = 0;
    b = 0;
    operator = '';
    divContent.textContent = '';

}

getNumberValues();
getOperatorValues();