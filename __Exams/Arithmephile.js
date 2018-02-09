function solve(input) {
    let max = Number.MIN_SAFE_INTEGER

    for (let i = 0; i < input.length; i++) {
        if (/^[0-9]$/.test(input[i])) {
            let current = 1
            for (let j = 1; j <= Number(input[i]); j++) {
                current *= Number(input[i + j])
            }
            if (current > max) max = current
        }
    }

    console.log(max)
}

solve(['100',
'200',
'2',
'3',
'2',
'3',
'2',
'1',
'1'])