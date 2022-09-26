// get digits
const d0 = document.getElementById("d0");
const d1 = document.getElementById("d1");
const d2 = document.getElementById("d2");
const d3 = document.getElementById("d3");
const d4 = document.getElementById("d4");
const d5 = document.getElementById("d5");
const d6 = document.getElementById("d6");
const d7 = document.getElementById("d7");
const d8 = document.getElementById("d8");
const d9 = document.getElementById("d9");
const point = document.getElementById("point");

//get input text
const inputField = document.getElementById("input-text");


//get operations
const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const multiply = document.getElementById("multiply");
const divide = document.getElementById("divide");
const sqrt = document.getElementById("sqrt");
const power = document.getElementById("power");
const log = document.getElementById("log");
const ln =  document.getElementById("ln");
const sin = document.getElementById("sin");
const cos = document.getElementById("cos");
const tan = document.getElementById("tan");
const equals = document.getElementById("equals");
const clear = document.getElementById("clear");

//Variable that stores calculation results
let result = 0
let operator = ''
let operatorClicked = false


//This function will add numbers to the input text
const addDigit = (digit) =>{
    if (inputField.value=="0" || operatorClicked){
        inputField.value = digit
    }else{
        inputField.value = inputField.value + digit;
    }
    operatorClicked=false;
}

//Digit Buttons Event listners

d0.addEventListener('click', ()=>{
    addDigit(0);
});

d1.addEventListener('click', ()=>{
    addDigit(1);
});

d2.addEventListener('click', ()=>{
    addDigit(2);
});

d3.addEventListener('click', ()=>{
    addDigit(3);
});

d4.addEventListener('click', ()=>{
    addDigit(4);
});

d5.addEventListener('click', ()=>{
    addDigit(5);
});

d6.addEventListener('click', ()=>{
    addDigit(6);
});

d7.addEventListener('click', ()=>{
    addDigit(7);
});

d8.addEventListener('click', ()=>{
    addDigit(8);
});

d9.addEventListener('click', ()=>{
    addDigit(9);
});

point.addEventListener('click', ()=>{
    if (!inputField.value.includes(".")){
        addDigit(".");
    }    
});

clear.addEventListener('click',()=>{
    result=0;
    operator='';
    operatorClicked=false;
    inputField.value=0;
})

plus.addEventListener('click',()=>{
    result = Number(inputField.value);
    operator = "+";
    operatorClicked=true;
})

minus.addEventListener('click',()=>{
    result = Number(inputField.value);
    operator = "-";
    operatorClicked=true;
})

multiply.addEventListener('click',()=>{
    result = Number(inputField.value);
    operator = "*";
    operatorClicked=true;
})

divide.addEventListener('click', ()=>{
    result = Number(inputField.value);
    operator = "/";
    operatorClicked=true;
})

power.addEventListener('click', ()=>{
    result = Number(inputField.value);
    operator = "^";
    operatorClicked=true;
})

sqrt.addEventListener('click', ()=>{
    result = Math.sqrt(Number(inputField.value));
    operatorClicked=true;
    inputField.value=result;
})

log.addEventListener('click', ()=>{
    result = Math.log10(Number(inputField.value));
    operatorClicked=true;
    inputField.value=result;
})

ln.addEventListener('click', ()=>{
    result = Math.log(Number(inputField.value));
    operatorClicked=true;
    inputField.value=result;
})

sin.addEventListener('click', ()=>{
    result = Math.sin(Number(inputField.value));
    operatorClicked=true;
    inputField.value=result;
})

cos.addEventListener('click', ()=>{
    result = Math.cos(Number(inputField.value));
    operatorClicked=true;
    inputField.value=result;
})

tan.addEventListener('click', ()=>{
    result = Math.tan(Number(inputField.value));
    operatorClicked=true;
    inputField.value=result;
})


equals.addEventListener('click',()=>{
    if (operator=="+"){
        result += Number(inputField.value);
    }else if(operator=="-"){
        result -= Number(inputField.value)
    }else if(operator=="*"){
        result *= Number(inputField.value)
    }else if(operator=="/"){
        result /= Number(inputField.value)
    }else if(operator=="^"){
        result = Math.pow(result, Number(inputField.value))
    }

    inputField.value=result;
})


