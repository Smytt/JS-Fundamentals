function lastNumbers(n, k) {
    let res = [1]

    while (res.length !== n) {
        res.push(res.slice(k*(-1)).reduce((a,b) => a+b, 0))
    }

    console.log(res.join(' '))
}

lastNumbers(6, 3)