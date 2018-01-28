function formFiller(username, mail, phone, text) {
    let matchUsername = /<![A-Za-z]+?!>/g
    let matchMail = /<@[A-Za-z]+?@>/g
    let matchPhone = /<\+[A-Za-z]+?\+>/g

    for (let i = 0; i < text.length; i++) {
        console.log(text[i]
            .replace(matchMail, mail)
            .replace(matchPhone, phone)
            .replace(matchUsername, username)
        )
    }

}

formFiller(['Pesho',
    'pesho@softuni.bg',
    '90-60-90',
    ['Hello, <!username!>!',
        'Welcome to your Personal profile.',
        'Here you can modify your profile freely.',
        'Your current username is: <!fdsfs!>. Would you like to change that? (Y/N)',
        'Your current email is: <@DasEmail@>. Would you like to change that? (Y/N)',
        'Your current phone number is: <+number+>. Would you like to change that? (Y/N)']])