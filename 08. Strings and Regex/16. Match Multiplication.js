function matchMultiplication(string) {

    console.log(string.replace(/\s(-?[1-9]+)\s*\*\s*(-?[0-9]+\.?[0-9]+)\s/g,
        (match, g1, g2) => {
        return ' ' + Number(g1) * Number(g2) + ' ' }
    ))

}

matchMultiplication('My bill: 2*2.50 (beer); 2* 1.20 (kepab); -2  * 0.5 (deposit).')