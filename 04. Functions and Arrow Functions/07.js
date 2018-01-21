function wordsUppercase(string) {
    let r = /[^\w]/g;
    let arr = string.toUpperCase().split(r).filter(i => i !== "");
    console.log(arr.join(', '))
}

wordsUppercase('Hi, how are you?')

