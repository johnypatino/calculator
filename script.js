var add = function(x,y) {
    return x + y;
}
var subtract = function(x,y) {
    return x - y;
}
var multiply = function(x,y) {
    return x * y;
}
var divide = function(x,y) {
    return x / y;
}
var operate = function(operator, x, y) {
    switch(operator) {
        case 'x': return multiply(x,y);
        case '÷': return divide(x,y);
        case '+': return add(x,y);
        case '-': return subtract(x,y);
        default: break;
    }
}
let x = 0;
let y = 0;
let op = 0;
let reset = true;
const screen = document.querySelector('.ans');
const button = document.querySelectorAll('.button');
const operator = document.querySelectorAll('.operator');
const equal = document.querySelector('.equal');
for (let i = 0; i < button.length; i++ ) {
   button[i].addEventListener('click', ()=> {
    if (reset === true) {
        screen.textContent = '';
    }
        reset = false;
        let display = button[i].textContent;
        screen.textContent = screen.textContent + display;
        console.log(button[i].textContent);
    })
}
for (let i = 0; i < operator.length; i++) {
    operator[i].addEventListener('click', ()=> {
        store(screen.textContent);
        op = operator[i].textContent;
        reset = true;
        console.log(op);
        console.log(x);
        console.log(y);
    })
}

var store = function(num) {
    if (num != 0) {
        if (x === 0) {
            x = num;
        }
        else {
            y = num;
        }
    }
}
equal.addEventListener('click', ()=> {
    store(screen.textContent);
    if (x != 0 && y !=0) {
        x = parseInt(x);
        y = parseInt(y);
       let ans = operate(op,x,y);
       screen.textContent = ans;
    }
})

