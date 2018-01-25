function processOdd(arr) {

    console.log(arr.filter((v, i) => i % 2 !== 0).reverse().map(a => a * 2))

}

processOdd([10, 15, 20, 25])