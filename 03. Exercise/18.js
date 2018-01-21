function moviePrice(input) {
    let title = input[0].toLowerCase()
    let day = input[1].toLowerCase()
    let price = 0

    if (title === 'the godfather') {
        switch (day) {
            case 'monday': price = 12; break;
            case 'tuesday': price = 10; break;
            case 'wednesday': price = 15; break;
            case 'thursday': price = 12.50; break;
            case 'friday': price = 15; break;
            case 'saturday': price = 25; break;
            case 'sunday': price = 30; break;
            default: price = "error"; break
        }
    } else if (title === "schindler's list") {
        switch (day) {
            case 'monday':
            case 'tuesday':
            case 'wednesday':
            case 'thursday':
            case 'friday': price = 8.50; break;
            case 'saturday':
            case 'sunday': price = 15; break;
            default: price = "error"; break
        }
    } else if (title === 'casablanca') {
        switch (day) {
            case 'monday':
            case 'tuesday':
            case 'wednesday':
            case 'thursday':
            case 'friday': price = 8; break;
            case 'saturday':
            case 'sunday': price = 10; break;
            default: price = "error"; break
        }
    } else if (title === 'the wizard of oz') {
        switch (day) {
            case 'monday':
            case 'tuesday':
            case 'wednesday':
            case 'thursday':
            case 'friday': price = 10; break;
            case 'saturday':
            case 'sunday': price = 15; break;
            default: price = "error"; break
        }
    }
    return  price
}