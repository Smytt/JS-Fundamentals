function squareOfStars(num = 5) {
    for (let i = 1; i <= num; i++) {
        console.log('* '.repeat(num).trim())
    }
}

squareOfStars(3)