function username(input) {
    let users = []

    input.forEach( x => {
        let user = ''
        let split = x.split('@')
        user += split[0] + '.'

        let domains = split[1].split('.')
        domains.forEach(y => user += y[0])
        users.push(user)
    })

    console.log(users.join(', '))
}

username(['peshoo@gmail.com', 'todor_43@mail.dir.bg', 'foo@bar.com']
)