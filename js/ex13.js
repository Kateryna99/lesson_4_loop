//13. Морський бій. Комп’ютер випадково розташовує одиночний корабель на полі розміром N*M. Маючи К снарядів користувач намагається потопити корабель.
'use strict'

let randomN = Math.floor(Math.random() * 10) + 1;
let randomM = Math.floor(Math.random() * 10) + 1;
console.log(`N = ${randomN}, M = ${randomM}`);


let result = 'You lose'
for (let i = 1; i <= 5; i++){
    let userHitN = parseInt(prompt(`Type your N hit. This is your ${i} try of 5 `));
    let userHitM = parseInt(prompt(`Type your M hit.This is your ${i} try of 5`));
       if(userHitN === randomN && userHitM===randomM){
           result = 'You hit the boat'
          break
       }
}
alert(result);
