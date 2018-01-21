function chessBoard(num) {
    console.log('<div class="chessboard">')
    for (let i = 1; i <= num; i++) {
        console.log('<div>')
        for (let j = 1; j <= num; j++) {
            let color = 'white'
            if ((i % 2 == 0 && j % 2 == 0) || (i % 2 == 1 && j % 2 == 1)) {
                color ='black'
            }
            console.log(`<span class="${color}"></span>`)
        }
        console.log('</div>')
    }
    console.log('</div>')
}