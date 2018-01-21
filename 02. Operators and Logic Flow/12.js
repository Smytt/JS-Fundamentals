function isPrimer(num) {
    let isPrime = 'true'
    if (num < 2)
        isPrime = 'false';
    let sqrt = Math.sqrt(num)
    for (let i = 2; i <= sqrt; i++) {
        if (num % i === 0) {
            isPrime = 'false'
            break;
        }
    }
    console.log(isPrime)
}