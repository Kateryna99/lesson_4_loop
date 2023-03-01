//Задача 15. Користувач поступово вводить показники температури протягом року. Знайти середню температуру.
'use strict'
 let sumOfTemperature = 0,
     averageTemperature,
     i=0;
const YearDays = 364;

do {
    let temperature = parseInt(prompt('Enter temperature of the year that you fixed.'));
    if (! isFinite(temperature)) break;
    sumOfTemperature += temperature;
    i++
    averageTemperature = sumOfTemperature / i;
}
while (i < YearDays)

alert(`Average degree of the days amount you entered is ${averageTemperature.toFixed(2)} degree`);
