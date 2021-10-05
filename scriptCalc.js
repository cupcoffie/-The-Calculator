// calculating function
function appendNumber(number){
   if (number == '.' && currentOperand.includes('.')) return;
   if( currentOperand == undefined){
        currentOperand = number.toString();
    } else{
        currentOperand = currentOperand.toString() + number. toString();
    };
};
 function chooseOperation(operation){
     if(currentOperand === '') return;
     if(previousOperand != null){
     compute();
     };
     previousOperand = currentOperand;
     currentOperand = '';
     currentOperation = operation;
          
 }
function compute() {
  let  computation;
   const previous = parseFloat(previousOperand);
   const current = parseFloat(currentOperand);
   if(isNaN (previous) ||isNaN (current))return;
switch (currentOperation){
    case '+':
       computation = previous + current;
        break;
    case '-':
        computation = previous - current;
        break;
    case '÷':
        computation = previous / current;
        break;
    case '*':
        computation = previous * current;
        break; 
        default:
            return;
               
}  
previousOperand ='';
currentOperand = computation;
currentOperation = undefined;
}

function updateDisplay(){
 currentOperandText.innerText = currentOperand;
 if(currentOperation){
   previousOperandText.innerText = `${previousOperand} ${currentOperation}`;
 }else{
   previousOperandText.innerText = '';
 };
};

// accessing to the html tags
const operationButtons = document.querySelectorAll('[operation]');
const numberButtons = document.querySelectorAll ('[number]');
const currentOperandText = document.querySelector('[current-operand]');
const previousOperandText = document.querySelector('[previous-operand]');
let currentOperand;
let previousOperand;
let currentOperation;
 let equalsButton;


//select the number and give them addEventListener to them 
 numberButtons.forEach(function (button) {
    button.addEventListener('click', function(){
    appendNumber(button.innerText);
    updateDisplay();

    });

 });
//select the number and give them addEventListener to them   
operationButtons.forEach(function (button) {
    button.addEventListener('click', function(){
       chooseOperation(button.innerText);
       updateDisplay();
      
   });
});


