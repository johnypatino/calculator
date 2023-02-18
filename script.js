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

console.log(operate('+',3,7));