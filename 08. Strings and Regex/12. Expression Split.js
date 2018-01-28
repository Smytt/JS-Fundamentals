function expressionSplit(expression) {
    expression.split(/[\s(),;.]/).filter(x => x!== '').forEach(x => console.log(x))
}

expressionSplit('let sum = 4 * 4,b = "wow";')