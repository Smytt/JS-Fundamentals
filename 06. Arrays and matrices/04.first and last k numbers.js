function firstAndLastNumbers(arr) {
    let k = arr[0];
    arr.shift();

    console.log(arr.slice(0, k))
    console.log(arr.slice(k * (-1)))
}

firstAndLastNumbers([2,
    7, 8, 9])