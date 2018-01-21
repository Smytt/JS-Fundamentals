function colorfulNumbers(num) {
    console.log('<ul>');
    for (let i = 1; i <= num; i++) {
        let color = 'green';
        if (i % 2 == 0) color = 'blue'
        console.log(`<li><span style='color:${color}'>${i}</span></li>`)
    }
    console.log('</ul>');
}