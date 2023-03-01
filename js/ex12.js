//Задача 12. Ігровий автомат. Випадково вибираємо зображення у 3 позиціях. Вибір у кожній позиції вибирається як одне з чотирьох зображень.
// Вивести ці зображення і повідомити виграш користувача (три перших зображення 100 грн, три других – 200, три третіх – 500, три четвертих зображення – 1000грн).
// Використати цикли і switch (для вибору зображення за номером).
'use strict'


let result = 0;
let randomFruitImg;
let sum = ``;

for (let i =0; i<3;i++) {
    randomFruitImg= Math.floor(Math.random()*4)+1;
    document.write(`<img class="img" src="../img/img${randomFruitImg}.png">`);
    sum+=`${randomFruitImg}`

}
console.log(sum)
switch(sum){
    case '111': result=100;
        break;
    case '222': result=300;
        break;
    case '333': result=500;
        break;
    case '444': result=1000;
        break;
}
console.log(`Your win is ${result}`)