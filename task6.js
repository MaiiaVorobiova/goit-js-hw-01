'use strict'
let total = 0;
let input;
while (true) {
    let input = prompt('Пожалуйста введите число');
     
    if (input === null) {
        break
    }
    total += input;
  
   }
 alert(`Общая сумма чисел равна ${total}`);
