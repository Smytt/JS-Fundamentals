function scoreToHtml(json) {
    let data = JSON.parse(json)
    let keys = Object.keys(data[0])

    console.log('<table>')
    let headings = '  <tr>'
    keys.forEach(key => {
        headings += `<th>${key}</th>`
    })
    headings += '</tr>'
    console.log(headings)

    data.forEach(x => {
        let headings = '  <tr>'
        Object.keys(x).forEach( key => {
            let value = x[key].toString().replace(/&/g, '&amp;')
                .replace(/</g, '&lt;')
                .replace(/>/g, '&gt;')
                .replace(/"/g, '&quot;')
                .replace(/'/g, '&#39;')

            headings += `<td>${value}</td>`
        })
        headings += '</tr>'
        console.log(headings)
    })
    console.log('</table>')
}

scoreToHtml('[{"Name":"Pesho <div>-a","Age":20,"City":"Sofia"},{"Name":"Gosho","Age":18,"City":"Plovdiv"},{"Name":"Angel","Age":18,"City":"Veliko Tarnovo"}]')