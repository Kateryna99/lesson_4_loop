//Задача 8. Користувач загадує число. За 3 спроби комп’ютер намагається вгадати число користувача (використати confirm). 1 to 10
'use strict'

const userNumber = parseInt(prompt('Enter you number from 1 to 10'));

 let computerNumber;

for (let i = 0; i < 3; i++) {
    computerNumber = Math.floor(Math.random() * 10) +1;
    let confirmQuestion = confirm(`Is you number ${computerNumber}`);
    if(confirmQuestion === true){
        document.write(`Computer guessed right your number. Your number is ${userNumber}, computer's number is ${computerNumber}`)
        break
    }

}
