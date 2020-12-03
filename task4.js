'use strict'
let credits = 23580;
const pricePerDroid = 3000;
let droidAmount = prompt('Введите количество');
let message;
if (!droidAmount) {
    message = 'Отменено пользователем!';
} else {
    droidAmount = Number(droidAmount);
    const totalPrice = pricePerDroid * droidAmount;

    if (totalPrice > credits) {
        message = 'Недостаточно средств на счету!';
    } else {
        (credits -= totalPrice);
         message = `Вы купили ${droidAmount} дроидов, на счету осталось ${credits} кредитов.`;
    }
}
console.log(message);