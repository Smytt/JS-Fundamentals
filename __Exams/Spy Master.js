function solve(input) {
    let key = input[0]
    let regex = new RegExp('((?:^| )' + key + ' +)([A-Z!%$#]{8,})([ .,]|$)', 'gi')
    let newLine = ''
    let newg2 = ''

    for (let i = 1; i < input.length; i++) {
        newLine =
            input[i].replace(regex, (match, g1, g2, g3) => {
                if (g2 !== g2.toUpperCase()) {
                    return match
                }
                newg2 = g2
                    .replace(/!/g, '1')
                    .replace(/%/g, '2')
                    .replace(/#/g, '3')
                    .replace(/[$]/g, '4')
                    .replace(/[A-Z]/g, (match) => match.toLowerCase())

                return g1+newg2+g3
            })
        console.log(newLine)

    }
}

solve(['specialKey',
    'In this text the specialKey HELLOWORLD! is correct, but',
    'the following specialKey $HelloWorl#d and spEcIaLKEy HOLLOWORLD1 are not, while',
    'SpeCIaLkeY   SOM%%ETH$IN and SPECIALKEY ##$$##$$ are!'])