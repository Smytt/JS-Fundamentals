function solve([text]) {

    text = text
        .replace(/([.,!?:;])\s*/g, (match, g1) => g1 + ' ')
        .replace(/\s*([.,!?:;])/g, (match, g1) => g1)
        .replace(/\.\s*\.\s*\.\s*!/g, '...!')
        .replace(/\.\s([0-9])/g, (match, g1) => '.' + g1)
        .replace(/"\s*(.*?)\s*"/g, (match, g1) => '"' + g1 + '"')

    console.log(text)
}

solve(['Terribly formatted text . With chaotic   . ..   !   spacings." Terrible quoting "! Also' +
'this date is pretty confusing : 20 . 12. 16 .'])