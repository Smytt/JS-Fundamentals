function validityChecker(input) {
    let [x1, y1, x2, y2] = input

    isValid(x1, y1, 0, 0);
    isValid(x2, y2, 0, 0);
    isValid(x1, y1, x2, y2);

    function isValid(x1, y1, x2, y2) {
        let distance = Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2)
        let isValid = 'invalid';
        if(distance === Math.floor(distance))
            isValid = 'valid';

        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is ${isValid}`)
    }
}

validityChecker([2,1,1,1])