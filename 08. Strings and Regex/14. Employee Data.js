function employeeData(data) {
    class Employee {
        constructor(name, salary, position) {
            this.name = name;
            this.salary = salary;
            this.position = position;
        }

        toString() {
            return `Name: ${this.name}\n` + `Position: ${this.position}\n` + `Salary: ${this.salary}`
        }
    }

    function isValid(name, salary, position) {
        if (!(/^[A-Z]([a-z]+)?$/).test(name)) return false;
        if (!(/^[0-9]+$/).test(salary)) return false;
        if (!(/^[A-Za-z0-9-\s]+$/).test(position)) return false;
        return true
    }

    let employees = [];

    data.forEach(row => {
        let employee = row.split(' - ');
        employee[2] = employee.splice(2).join(' - ');

        if (isValid(...employee))
            employees.push(new Employee(...employee))
    })

    employees.forEach(employee => console.log(employee.toString()))

}

employeeData(['Isacc - 1000 - C - E - O',
    'I - 500 - Employee',
    'Peter - 500 - Employee'])