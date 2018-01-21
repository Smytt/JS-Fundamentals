function DNAHelix(number) {
    let sequence = 'ATCGTTAGGG';
    let flag = 0;
    for (let i = 0; i < Math.ceil(number / 4); i++) {
        console.log(`**${sequence[flag % 10]}${sequence[(flag + 1) % 10]}**`);
        if (number >= 4 * i + 2)
            console.log(`*${sequence[(flag + 2) % 10]}--${sequence[(flag + 3) % 10]}*`);
        if (number >= 4 * i + 3)
            console.log(`${sequence[(flag + 4) % 10]}----${sequence[(flag + 5) % 10]}`);
        if (number >= 4 * i + 4)
            console.log(`*${sequence[(flag + 6) % 10]}--${sequence[(flag + 7) % 10]}*`);
        flag += 8;
    }
}

DNAHelix(10)