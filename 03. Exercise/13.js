function lastMonth(input) {
    let date = new Date()
    date.setDate(1)
    date.setMonth(input[1] - 1)
    date.setYear(input[2])

    date.setDate(date.getDate() - 1);

    console.log(date.getDate());
}

lastMonth([17, 3, 2002])