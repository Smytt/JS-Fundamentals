function multiplicationTable(num) {
    console.log('<table border="1">');

    for (let j = 0; j <= num; j++) {
        let row = '<tr>';
        for (let i = 0; i <= num; i++) {
            if (j === 0) {
                if (i === 0) {
                    row += '<th>x</th>'
                }
                else {
                    row += `<th>${i}</th>`
                }
            }

            else {
                if (i === 0) {
                    row += `<th>${j}</th>`
                }
                else {
                    row += `<td>${i*j}</td>`
                }
            }
        }
        row += '</tr>';
        console.log(row)
    }

    console.log('</table>')
}

multiplicationTable(5)