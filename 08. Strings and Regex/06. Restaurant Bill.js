function restaurantBill(input) {
    let sum = 0;
    let products = [];

    for (let i = 0; i < input.length; i+=2) {
        products.push(input[i])
        sum += Number(input[i+1])
    }

    console.log('You purchased ' + products.join(', ') + ' for a total sum of ' + sum)
}

restaurantBill(['Beer Zagorka', '2.65', 'Tripe soup', '7.80','Lasagna', '5.69'])