// Задача 3. Вивести таблицю з одним рядком і  7 стовпцями.
'use strict'


document.write(`<table class="border"> <tr>`)
  for (let i=1; i<=7; i++){
      document.write(`<td class="border">${i}</td>`)
  }
  document.write(`</tr> </table>`)
