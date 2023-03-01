//14. Каса. Користувачу повідомляють суму, яку йому треба сплатити. Користувач поступово вводить суму грошей до тих пір,
// поки суми не буде достатньо для оплати товарів (кожного разу користувачу повідомляють, яку ще суму потрібно ввести).
'use strict'

let sumToPay = 5000;

do {
    let userPayment = parseInt(prompt(`You need to pay ${sumToPay}. Enter the sum of money you are paying`))
    if (userPayment <= sumToPay) {
        sumToPay -= userPayment
        alert(`You paid ${userPayment}. There is ${sumToPay} left`)
    } else alert('You try to pay too much. Try again')
}
while (sumToPay > 0)
alert('You have paid all the sum')


