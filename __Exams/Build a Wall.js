function solve(input) {
    let crews = input.map(Number);
    let dailyIce = [];

    while (crews.filter(x => x < 30).length !== 0) {
        let iceUsedToday = 0;
        crews.map((x, i) => {
            if (x < 30) {
                crews[i]++;
                iceUsedToday += 195;
            }
        });
        dailyIce.push(iceUsedToday);
    }

    console.log(dailyIce.join(', '));
    console.log(dailyIce.reduce((a, b) => a + b, 0) * 1900 + ' pesos')

}

solve([21, 25, 28])