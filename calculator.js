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

            if(a === 0){
                a = divContent.textContent;
                console.log(a);
                divContent.textContent = operator;
            }
            else if (b === 0){ 
                    b = divContent.textContent;
                    console.log(b)
                    a = operation(operator);
                    console.log(a);
                    b = 0;
                    divContent.textContent = a
            }
            operator = e.target.id;
        })
    })
}

function getNumberValues(){
    numberValues.forEach((numberValue)=>{
        numberValue.addEventListener('click' , (e)=>{
            divContent.textContent === '0' || divContent.textContent === '+' || 
            divContent.textContent === '-' || divContent.textContent === '/' ||
            divContent.textContent === '*' || divContent.textContent === `${a}` ? divContent.textContent = e.target.value :
            divContent.textContent += e.target.value;
        })
    })
}

function equalButton(){
    if(a === 0){
        alert('No');
    }
    else if(b === 0){
        b = divContent.textContent;
        console.log(b)
        a = operation(operator);
        console.log(a);
        b = 0;
        divContent.textContent = a
    }


}

getNumberValues();
getOperatorValues();