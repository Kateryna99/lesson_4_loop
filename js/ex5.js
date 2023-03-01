// Задача 5. Вивести таблицю. 3 rows (1 - 9)
'use strict'

let column = 1;

for (let i = 1; i <= 3; i++) {
    document.write(`<table class="border"> <tbody> <tr>`)
    for (let j = 0; j < 3; j++) {
        document.write(`<td class="border">${column++}</td>`)
    }
}
document.write(`</tr> </tbody> </table>`)