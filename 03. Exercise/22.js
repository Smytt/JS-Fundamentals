function calendar(input) {
    let [d, m, y] = input;
    let currentDay = 1;
    let classToday = '';

    let today = new Date(input[2], input[1] - 1, input[0]);
    let first = new Date(input[2], input[1] - 1, 1);
    let tempDate = new Date(input[2], input[1] - 1, 1);
    tempDate.setMonth(tempDate.getMonth() + 1);
    tempDate.setDate(tempDate.getDate() - 1);
    let numberOfDays = tempDate.getDate();
    tempDate.setDate(1);
    tempDate.setDate(tempDate.getDate() - 1);
    let lastMonthLastDay = tempDate.getDate();

    let firstDOW = first.getDay();

    console.log('<table>');
    console.log('<tr><th>Sun</th><th>Mon</th><th>Tue</th><th>Wed</th><th>Thu</th><th>Fri</th><th>Sat</th></tr>');

    while (currentDay <= numberOfDays) {
        let row = '<tr>';
        if (first.getDay() > 0 && currentDay === 1) {
            for (let i = 0; i < 7; i++) {
                if (currentDay === today.getDate()) {
                    classToday = ' class="today"';
                }
                else classToday = '';
                if (i >= first.getDay()) {
                    row += `<td${classToday}>${currentDay}</td>`;
                    currentDay++
                }
                else {
                    row += `<td class="prev-month">${lastMonthLastDay - first.getDay() + 1 + i}</td>`;
                }
            }
        }
        else if (currentDay + 6 > numberOfDays) {
            let newMonthDay = 1;
            for (let i = 0; i < 7; i++) {
                if (currentDay === today.getDate()) {
                    classToday = ' class="today"';
                }
                else classToday = '';
                if (currentDay <= numberOfDays) {
                    row += `<td${classToday}>${currentDay}</td>`;
                    currentDay++
                }
                else {
                    row += `<td class="next-month">${newMonthDay}</td>`;
                    newMonthDay++;
                }
            }
        }
        else {
            for (let i = 0; i < 7; i++) {
                if (currentDay === today.getDate()) {
                    classToday = ' class="today"';
                }
                else classToday = '';
                row += `<td${classToday}>${currentDay}</td>`;
                currentDay++;
            }
        }

        row += '</tr>';
        console.log(row);

    }
    console.log('</table>');
}

// calendar([16, 9, 2016])