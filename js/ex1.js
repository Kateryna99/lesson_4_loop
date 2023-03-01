// Задача 1. Вивести з використанням циклів маркований список з випадковими числами (1-100). Кількість випадкових чисел вводиться користувачем.
'use strict'


    const amountOfTheList = parseInt(prompt('Enter an amount of the lines', '0'));

    for (let i = 0; i < amountOfTheList; i++) {
        const numberOfTheList = Math.floor(Math.random() * 100) + 1;

        document.write(`<ul><li>${numberOfTheList}</li></ul>`);
    }


