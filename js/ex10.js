// Задача 10. Знайти суму всіх непарних чисел, що знаходяться між заданими користувачем числами.
'use strict'


{const userRangeStart = parseInt(prompt('Enter the start of a number rage')),
    userRangeEnd = parseInt(prompt('Enter the end of a number rage'));

let sumOfOddNumber = 0;

for (let i = userRangeStart; i <= userRangeEnd; i++) {
    if (i % 2 !== 0)
        sumOfOddNumber+=i
}
document.write(`Sum of the all odd numbers is ${sumOfOddNumber}`);}
