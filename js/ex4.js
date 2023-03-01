// Задача 4. Вивести таблицю з 3 рядків і 7 стовпців

'use strict'

for(let i = 1; i<=3; i++){
    document.write(`<table class="border"> <tbody> <tr>`)
    for (let j=1; j<=7; j++){
        document.write(`<td class="border">${j}</td>`)
    }
}
document.write(`</tr> </tbody> </table>`)