function capitlizeWords(text) {
    text = text.replace(/\b(\w)(\w*)\b/g, (match,g1,g2) => {
        return g1.toUpperCase() + g2.toLowerCase()
    })

    console.log(text)
}

capitlizeWords('Was that Easy? tRY thIs onE for SiZe!')