function matchWords(mail) {
    let regex = /^[A-Za-z0-9]+@[a-z]+\.[a-z]+$/

    console.log(regex.test(mail)? 'Valid' : 'Invalid')
}

matchWords('invalid@emai.bg')