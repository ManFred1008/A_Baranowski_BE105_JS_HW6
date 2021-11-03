/* 8. Напишите ф-цию строгой проверки ввода номер телефона в международном формате (<код страны> <код города или сети> <номер телефона>). Функция должна возвращать true или false. Используйте регулярные выражения. */
task(8);

let phoneNum = '+375-25-569-55-46';

let checkPhoneNum = function (phone) {
   let regexp = /^\+375\-(29|17|33|44|25)\-\d{3}-\d{2}-\d{2}$/;
   return regexp.test(phone)
}

console.log(checkPhoneNum(phoneNum));