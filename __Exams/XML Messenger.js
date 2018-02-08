function solve(xml) {
    let matchValidMsg = /^<message(?: [a-z]+="[a-zA-Z0-9 .]+")*>([\s\S]*?)<\/message>$/g
    let matchFrom = /^<message.*? from="([a-zA-Z0-9 .]+)".*?>[\s\S]+<\/message>$/g
    let matchTo = /^<message.*? to="([a-zA-Z0-9 .]+)".*?>[\s\S]+<\/message>$/g
    let msg
    let match
    let from
    let to


    if (match = matchValidMsg.exec(xml)) {
        if(/<\/message>/.test(match[1])) {
            return 'Invalid message format'
        }
        msg = match[1].replace(/\n/g, '</p>\n<p>')
    }
    else return 'Invalid message format'

    if (match = matchFrom.exec(xml)) {
        from = match[1]
    }
    if (match = matchTo.exec(xml)) {
        to = match[1]
    }

    if(!from || !to) return 'Missing attributes'

    return `<article>
 <div>From: <span class="sender">${from}</span></div>
 <div>To: <span class="recipient">${to}</span></div>
 <div>
 <p>${msg}</p>
 </div>
</article>
`

}

console.log(solve('<message from="Pedro" to="Zaira" topic="Prxima Centauri discoveries">We have detected a distortion in the light patterns of Proxima Centauri.\n' +
    'It\'s likely this is a new rocky planet of approximately Earth-mass.\n' +
    'This is very exciting news!\n' +
    'Sincerely, Pedro Amado</message>'))