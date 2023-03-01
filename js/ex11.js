// Задача 11. Знайти суму 5 непарних чисел, що знаходяться між заданими користувачем числами.
'use strict'

const userRangeStart = parseInt(prompt('Enter the start of a number rage')),
    userRangeEnd = parseInt(prompt('Enter the end of a number rage'));
let sumOfOddNumber = 0
let count = 0

for (let i = userRangeStart; i <= userRangeEnd && count < 5; i++) {
    if (i % 2 !== 0) {
        sumOfOddNumber += i
    count++
    console.log(sumOfOddNumber)}
}

