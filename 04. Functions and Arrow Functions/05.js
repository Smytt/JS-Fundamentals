function functionalCalculator(a, b, operator) {

    let calc = (a, b, op) => op(a, b);
    let add = (a, b) => a + b;
    let subtract = (a, b) => a - b;
    let multiply = (a, b) => a * b;
    let divide = (a, b) => a / b;

    switch (operator) {
        case '+': return calc(a, b, add)
        case '-': return calc(a, b, subtract)
        case '*': return calc(a, b, multiply)
        case '/': return calc(a, b, divide)
    }
}

functionalCalculator([20,5,'/'])