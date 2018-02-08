function solve(array) {

    function calculate([num1, num2, operation]) {
        switch (operation) {
            case '+' :
                return num1 + num2
            case '-' :
                return num1 - num2
            case '*' :
                return num1 * num2
            case '/' :
                return num1 / num2
        }
    }

    outer:
        while (array.length >= 1) {
            for (let i in array) {
                if (/^[-+*\/]$/.test(array[i])) {
                    if (i < 2) {
                        return 'Error: not enough operands!'
                    }
                    else {
                        array.splice(i - 2, 3, calculate(array.slice(i - 2, i + 1)))
                        continue outer
                    }
                }
            }
            if(array.length === 1) break;
            return 'Error: too many operands!'
        }

    return array[0]

}

console.log(solve([
    '+'
    ]
))