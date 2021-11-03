/* 4. Дан массив с элементами 4, 2, 5, 19, 13, 0, 10. Найдите квадратный корень из суммы кубов его элементов. Для решения воспользуйтесь циклом for. */
task(4);

function sqrtSum(arr) {
   let sum = 0;
   for (i = 0; i < arr.length; i++) {
      sum += Math.pow(arr[i], 3);
   }
   return Math.sqrt(sum);
}

let arr4 = [4,2,5,19,13,0,10];

console.log(sqrtSum(arr4));