function cookingByNumbers(input) {
    let result = input[0];

    let chop = a => a / 2;
    let dice = a => Math.sqrt(a);
    let spice = a => a + 1;
    let bake = a => a * 3;
    let fillet = a => a * 0.8;

    for (let i = 1; i < input.length; i++) {
        result = calc(result, input[i])
        console.log(result);
    }

    function calc(number, f) {
        switch (f) {
            case 'chop': return chop(number); break;
            case 'dice': return dice(number); break;
            case 'spice': return spice(number); break;
            case 'bake': return bake(number); break;
            case 'fillet': return fillet(number); break;
        }
    }
}

cookingByNumbers([9, 'dice', 'spice', 'chop', 'bake', 'fillet'])