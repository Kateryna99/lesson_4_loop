//Задача 7. Вивести на екран N абзаців (N вводиться користувачем) за зразком:
'use strict'

const passage = parseInt(prompt('Enter the amount of passage', '0'));

for (let i = 1; i <= passage; i++) {
    document.write(`<h1>Title ${i}</h1>`)
    for (let j = 1; j <= i; j++) {
        document.write(`<p>paragraph ${j}</p>`)
    }
    document.write(`<hr>`)
}