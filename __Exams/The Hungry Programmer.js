function hungryProgrammer(meals, commands) {
    let i = 0
    let eaten = 0;

    while (commands[i] !== 'End') {
        let command = commands[i++].split(' ')

        switch (command[0]) {
            case 'Serve':
                if (meals[0] === undefined)
                    continue
                console.log(meals[meals.length - 1] + ' served!')
                meals.pop()
                break;
            case 'Add':
                if (command.length !== 2)
                    continue;
                meals.unshift(command[1])
                break;
            case 'Shift':
                if (meals[command[1]] === undefined ||
                    meals[command[2]] === undefined ||
                    command.length !== 3 ||
                    isNaN(command[1]) ||
                    isNaN(command[2])
                )
                    continue
                let meal1 = meals[command[1]]
                let meal2 = meals[command[2]]
                meals[command[1]] = meal2
                meals[command[2]] = meal1
                break;
            case 'Eat':
                if (meals[0] === undefined)
                    continue
                eaten++;
                console.log(meals[0] + ' eaten')
                meals.shift();
                break;
            case 'Consume':
                if (meals[command[1]] === undefined ||
                    meals[command[2]] === undefined ||
                    command.length !== 3 ||
                    isNaN(command[1]) ||
                    isNaN(command[2])
                )
                    continue
                meals.splice(command[1], command[2] - command[1] + 1)
                eaten += command[2] - command[1] + 1
                console.log('Burp!')
                break;
        }
    }
    if (meals.length === 0)
        console.log('The food is gone')
    else
        console.log(`Meals left: ${meals.join(', ')}`)
    console.log(`Meals eaten: ${eaten}`)
}

hungryProgrammer(['fries', 'fish', 'beer', 'chicken',
        'beer', 'eggs'],
    ['Add spaghetti',
        'Shift 0 1',
        'Consume 1 4',
        'End']
)