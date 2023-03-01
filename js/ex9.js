// Користувач загадує число. Комп’ютер задає питання поки не вгадає число користувача (використати confirm). 1 to 10
'use strict'

const userNumber = parseInt(prompt('Enter your number from 1 to 10'));
let confirmQuestion

do {
    const computerNumber = Math.floor(Math.random() * 10) + 1;
    confirmQuestion = confirm(`Is your number ${computerNumber}`)
}
while (confirmQuestion !== true);