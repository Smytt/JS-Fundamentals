function nextDay(y, m, d) {
    let today = new Date(y, m - 1, d);
    today.setDate(today.getDate() + 1);
    console.log(today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate())
}