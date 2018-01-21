function letterOccurances(string, letter) {
    let total = 0;
    for (let char of string) {
        if (char === letter)
            total++;
    }
    console.log(total)
}