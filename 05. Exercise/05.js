function modifyAverage(number) {
    number = number.toString();
    let avg = avgDigit(number);

    while (avg <= 5) {
        number += 9;
        avg = avgDigit(number);
    }
    console.log(number);

    function avgDigit(number) {
        return number.split('').map(Number).reduce((a, b) => a + b) / number.length;
    }
}

modifyAverage(101)