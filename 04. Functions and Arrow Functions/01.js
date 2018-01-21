function triangleOfStars(num) {
    for (let i = 1; i <= num; i++) {
        row(i);
    }
    for (let i = num - 1; i>=1; i--) {
        row(i);
    }

    function row(times) {
        console.log('*'.repeat(times))
    }
}


triangleOfStars(5)
