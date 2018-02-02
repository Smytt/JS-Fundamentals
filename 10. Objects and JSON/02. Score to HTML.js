function scoreToHtml(json) {
    let data = JSON.parse(json)
    console.log('<table>\n' +
        '  <tr><th>name</th><th>score</th></tr>')
    data.forEach(obj => {
        let name = obj.name.replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;')

        console.log(`  <tr><td>${name}</td><td>${obj.score}</td></tr>`)
    })
    console.log('</table>')
}

scoreToHtml('[{"name":"Pesho","score":479},{"name":"Gosho","score":205}]')