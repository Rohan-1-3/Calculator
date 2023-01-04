//Basic Operator Functions
var a = 0;
var b = 0;
var operator = '';
const numberValues = document.querySelectorAll('input');
const divContent = document.querySelector('p');
const operatorValues = document.querySelectorAll('.button');
var preDisplay = document.querySelector('span');

function add(a,b){
    return Math.round(((parseFloat(a)+parseFloat(b)) + Number.EPSILON) * 100) / 100;
    // (parseFloat(a)+parseFloat(b)).toFixed(2);
}

function subtract(a,b){
    return Math.round(((parseFloat(a)-parseFloat(b)) + Number.EPSILON) * 100) / 100;
}

function divide(a,b){
    if(b=== '0'){
        alert("A number cannot be divided by 0");
        clearAll();
    }
    else{
        return Math.round(((parseFloat(a)/parseFloat(b)) + Number.EPSILON) * 100) / 100;
        // (parseFloat(a)/parseFloat(b)).toFixed(2);
    }
}

function multiply(a,b){
    return Math.round(((parseFloat(a)*parseFloat(b)) + Number.EPSILON) * 100) / 100;
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
                getPreDisplay();
            }
            else{//getting operator and operating
                if(a === 0){
                    a = divContent.textContent;
                    divContent.textContent = operator;
                    operator = e.target.id;
                    getPreDisplay();
                }
                else if (b === 0){ 
                        b = divContent.textContent;
                        a = operation(operator);
                        b = 0;
                        divContent.textContent = a;
                        operator = e.target.id;
                        getPreDisplay();
                }
                
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
        preDisplay.textContent = 0;
    }
}
//resetting everything to start
function clearAll(){
    a = 0;
    b = 0;
    operator = '';
    divContent.textContent = '';
    preDisplay.textContent = 0;

}
//deletes last number of the display
function deleteButton(){
    const string = divContent.textContent.split('');
    var newString = [];
    for(let i=0;i<string.length-1;i++){
        newString+=string[i];
    }
    divContent.textContent = newString
}

function getPreDisplay(){
    preDisplay.textContent = `${a} ${operator}` ;
}


getNumberValues();
getOperatorValues();