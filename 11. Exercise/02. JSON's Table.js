function JSONTable(input) {
    let entries = []

    input.forEach(line => {
        entries.push(JSON.parse(line))
   })

    console.log('<table>')
    entries.forEach(entry => {
        console.log(`	<tr>
		<td>${entry.name}</td>
		<td>${entry.position}</td>
		<td>${entry.salary}</td>
	<tr>`)
    })
    console.log('</table>')

}

JSONTable(['{"name":"Pesho","position":"Promenliva","salary":100000}',
    '{"name":"Teo","position":"Lecturer","salary":1000}',
    '{"name":"Georgi","position":"Lecturer","salary":1000}'])