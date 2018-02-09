function solve(input) {
    let decoderRows = Number(input[0])
    let decoder = []
    let message = []
    let msg = ''

    for (let i = 1; i < 1 + decoderRows; i++) {
        decoder.push(input[i].split(' ').map(Number))
    }

    for (let i = 1 + decoderRows; i < input.length; i++) {
        message.push(input[i].split(' ').map(Number))
    }

    for (let i = 0; i < message.length; i++) {
        for (let j = 0; j < message[i].length; j++) {
            let charCode = (message[i][j] + decoder[i % decoder.length][j % decoder[i % decoder.length].length]) % 27
            if (charCode === 0) {
                msg += ' '
            }
            else
                msg += String.fromCharCode(charCode + 64)
        }
    }

    console.log(msg)
}

solve(['2',
    '59 36',
    '82 52',
    '4 18 25 19 8',
    '4 2 8 2 18',
    '23 14 22 0 22',
    '2 17 13 19 20',
    '0 9 0 22 22'])