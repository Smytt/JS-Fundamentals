function rounding(input) {
    let num = input[0]
    let decimalPlaces = input[1]

    if (decimalPlaces > 15) decimalPlaces = 15;

    num = Math.round(num * Math.pow(10, decimalPlaces));
    num = num / Math.pow(10, decimalPlaces);

    return num;
}

console.log(rounding([10.554254, 3]))