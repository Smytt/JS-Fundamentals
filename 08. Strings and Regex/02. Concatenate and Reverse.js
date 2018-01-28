function concatenateAndReverse(input) {
    console.log(input.reverse().map(x => x.split('').reverse().join('')).join(''))
}

concatenateAndReverse(['I', 'am', 'student'])