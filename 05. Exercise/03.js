function templateFormat(input) {
    console.log('<?xml version="1.0" encoding="UTF-8"?>\n' +
        '<quiz>')
    for (let i = 0; i < input.length; i = i + 2) {
        console.log(`<question>
    ${input[i]}
  </question>
  <answer>
    ${input[i+1]}
  </answer>`)
    }
        console.log('</quiz>')
}