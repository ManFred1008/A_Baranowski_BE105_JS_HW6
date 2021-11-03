/* 6. Выведите на экран текущую дату-время в формате 12:59:59 31.12.2014. Для решения этой задачи напишите функцию, которая будет добавлять 0 перед днями и месяцами, которые состоят из одной цифры (из 1.9.2014 сделает 01.09.2014). */
task(6);

let dateNow = new Date();
// console.log(dateNow);
// dateNow.setHours(2);
let hours = dateNow.getHours(),
    minutes = dateNow.getMinutes(),
    seconds = dateNow.getSeconds(),
    days = dateNow.getDate(),
    months = dateNow.getMonth(),
    years = dateNow.getFullYear();


let time = hours + ':' + minutes + ':' + seconds + ' ' + days + '.' + months + '.' + years;
console.log(time);

function repNull (str) {
   let arrNone = time.match(/\b\d\b/g);
   str = str.replace(/\b\d\b/g, "&");
   if (arrNone.length > 0) {
      for (let i = 0; i < arrNone.length; i++) {
         arrNone[i] = 0 + arrNone[i];
         str = str.replace(/&/, `${arrNone[i]}`);
      }
   }
   console.log(str);
}

repNull(time);

//------------------------------------------------
//Вариант 2

// function addNull(str) {

//    let regexp = /\d+/g;

//    let arrTime = str.match(regexp);
//    // console.log(arrTime);

//    let arrTimeCop = [];
//    for (let i = 0; i < arrTime.length; i++) {
//       if (arrTime[i].length == 1) {
//          arrTimeCop.push(0 + arrTime[i]);
//       } else {
//          arrTimeCop.push(arrTime[i]);
//       }
//    }
//    str = '';
//    for (let i = 0; i < arrTimeCop.length; i++) {
//       if (i < 2) {
//          str = str + arrTimeCop[i] + ':';
//       } else if (i == 2) {
//          str = str + arrTimeCop[i] + ' ';
//       } else {
//          str = str + arrTimeCop[i] + '.';
//       }
//    }
//    // console.log(arrTimeCop);
//    console.log(str);
// }


//----------------------------------------------------
// Вариант3

// function addNull(str) {
//    let str1 = '';
//    if (str.indexOf(':') != 2) {
//       str = 0 + str; 
//    }
//    if (str.lastIndexOf(':') != 5) {
//       str1 = str.slice(0,3) + 0 + str.slice(3);
//       str = str1;
//    }
//    if (str.indexOf(' ') != 8) {
//       str1 = str.slice(0,6) + 0 + str.slice(6);
//       str = str1;
//    }
//    if (str.indexOf('.') != 11) {
//       str1 = str.slice(0,9) + 0 + str.slice(9);
//       str = str1;
//    }
//    if (str.lastIndexOf('.') != 14) {
//       str1 = str.slice(0,12) + 0 + str.slice(12);
//       str = str1;
//    }
//    console.log(str);
// }

// addNull(time);