/* 1. Дана строка 'aaa@bbb@ccc'. Замените все @ на ! с помощью глобального поиска и замены. */
task(1);

function strRep (str) {
   return str.replace(/@/g, '!');
}

console.log(strRep('aaa@bbb@ccc'));