function compountInterest(input) {
    let [p, i, n, t] = input;
    i = i/100;
    n = 12 / n;

    console.log(p * Math.pow((1 + i / n), n * t));
}

compountInterest([1500, 4.3, 3, 6])