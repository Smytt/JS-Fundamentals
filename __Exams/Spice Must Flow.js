function solve([yield]) {
    let total = 0;
    let days = 0;

    while (yield >= 100) {
        days++
        total += yield -26
        if (total < 0) total = 0
        yield -= 10
    }

    total = total > 26 ? total - 26 : 0

    console.log(days)
    console.log(total)
}

solve([111])