/* 7. Дана строка 'aa aba abba abbba abca abea'. Напишите регулярку, которая найдет строки aba, abba, abbba по шаблону: буква 'a', буква 'b' любое количество раз, буква 'a'. */
task(7);

let str7 = 'aa aba abba abbba abca abea';

regexp = /ab+a/g;

console.log(str7.match(regexp));