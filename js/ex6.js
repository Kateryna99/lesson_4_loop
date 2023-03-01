// Задача 6. Вивести 3 таблиці (по 3 рядки і 3 стовпці у кожній) за зразком.
'use strict'

let column = 1;

for (let i = 0; i < 3; i++) {
    document.write(`<table class="border"> <tbody> `)
    for (let j = 0; j < 3; j++) {
        document.write(`<tr>`)
        for (let k = 0; k < 3; k++) {
            document.write(`<td class="border">${column}</td>`)
            column++
        }
        document.write(`</tr>`)
    }
    document.write(`</tbody> </table>`)
}
