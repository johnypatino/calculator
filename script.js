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
        case '*': return multiply(x,y);
        case '/': return divide(x,y);
        case '+': return add(x,y);
        case '-': return subtract(x,y);
        default: break;
    }
}
const screen = document.querySelector('.ans');
const button = document.querySelectorAll('.button');
const operator = document.querySelectorAll('.operator');
for (let i=0; i < button.length; i++ ) {
   button[i].addEventListener('click', ()=> {
    if (screen.textContent === '0') {
        screen.textContent = '';
    }
        let display = button[i].textContent;
        screen.textContent = screen.textContent + display;
        console.log(button[i].textContent);
    })
}
for (let i = 0; i < operator.length; i++) {
    operator[i].addEventListener('click', ()=> {
        let x = screen.textContent;
        let op = operator[i].textContent;
        console.log(op);

    })
}

