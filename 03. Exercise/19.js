function quadraticEquation(a, b, c) {
    let d = b ** 2 - 4 * a * c;

    if (d < 0) {
        console.log('no')
    }
    else if (d === 0) {
        console.log((0 - b) / (2 * a))
    }
    else {
        let x1 = (0 - b + Math.sqrt(d)) / (a * 2);
        let x2 = (0 - b - Math.sqrt(d)) / (a * 2);

        console.log(Math.min(x1, x2));
        console.log(Math.max(x1, x2))
    }
}

quadraticEquation(6, 11, -35);