//Задача 16. Користувач поступово вводить прибуток магазину за кожен день протягом N тижнів.
// Знайти загальну величину прибутку та вивести величину прибутку протягом кожного окремого тижня.
'use strict'

let generalIncome = 0;
let generalWeekIncome = 0;
let weekAmount = parseInt(prompt('Enter amount of weeks you want to check'));

exit:for (let i = 1; i <= weekAmount; i++) {

    for (let j = 1; j <= 7; j++) {
        let dayIncome = parseInt(prompt(`Enter your income for day ${j} week ${i}`));
        if (! isFinite(dayIncome)) break exit
        generalWeekIncome += dayIncome
    }
    generalIncome+=generalWeekIncome
}
console.log(generalWeekIncome,generalIncome)
