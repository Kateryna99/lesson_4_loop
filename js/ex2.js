// Задача 2. Створити 10 елементів для введення цін продуктів.
'use strict'

    for (let i = 1; i <= 10; i++) {
        document.write(`<form>
       <label for="price">Product #${i}</label> <input type="text" name="price" id="price">
 </form>`)
    }