function captureNumbers(arr) {
    let nums = []
    let regex = /[0-9]+/g
    let num

    arr.forEach(string => {
        while (num = regex.exec(string)) {
            nums.push(num)
        }
    })

    console.log(nums.join(' '))
}

captureNumbers(['The300',
'What is that?',
'I think it’s the 3rd movie.',
'Lets watch it at 22:45',
])