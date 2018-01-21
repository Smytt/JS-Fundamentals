function squares(num) {

    row(num)

    if (num === 2) return;
    for (let i = 0; i < Math.floor((num - 3) / 2); i++) {
        rowHollow(num)
    }

    row(num)

    for (let i = 0; i < Math.floor((num - 3) / 2); i++) {
        rowHollow(num)
    }

    row(num)

    function row(num) {
        let row = '+';
        for (let i = 0; i < num - 2; i++) {
            row += '-';
        }
        row += '+'
        for (let i = 0; i < num - 2; i++) {
            row += '-';
        }
        row += '+'
        console.log(row)
    }

    function rowHollow(num) {
        let row = '|';
        for (let j = 0; j < num - 2; j++) {
            row += ' ';
        }
        row += '|'
        for (let j = 0; j < num - 2; j++) {
            row += ' ';
        }
        row += '|'
        console.log(row)
    }
}

squares(2)