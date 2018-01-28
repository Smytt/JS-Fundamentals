function escape(rows) {
    console.log('<ul>')
    rows.forEach( x => {
        x = x
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
        console.log(`  <li>${x}</li>`)
    })
    console.log('</ul>')
}

escape(['<div style=\"color: red;\">Hello, Red!</div>', '<table><tr><td>Cell 1</td><td>Cell 2</td><tr>'])