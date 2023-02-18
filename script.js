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
    if (y === 0) {
        return 'bruh';
    }
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
let x = false;
let y = false;
let op = 0;
let reset = true;
const screen = document.querySelector('.ans');
const button = document.querySelectorAll('.button');
const operator = document.querySelectorAll('.operator');
const equal = document.querySelector('.equal');
const clear = document.querySelector('#Clear');
for (let i = 0; i < button.length; i++ ) {
   button[i].addEventListener('click', ()=> {
    if (reset === true) {
        screen.textContent = '';
    }
        reset = false;
        let display = button[i].textContent;
        screen.textContent = screen.textContent + display;
        console.log(button[i].textContent);
        console.log(y);
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
    
        if (x === false) {
            x = num;
        }
        else {
            y = num;
        }
    
};
equal.addEventListener('click', ()=> {
    store(screen.textContent);
    if (y === false) { y = 0;}
        x = parseInt(x);
        y = parseInt(y);
       let ans = operate(op,x,y);
       screen.textContent = ans;
       if (ans === 'bruh') { ans = 0;}
       x = ans;
       y = 0;
});
clear.addEventListener('click',function() {
    screen.textContent = '0';
     x = false;
     y = false;
     op = 0;
     reset = true;
})
