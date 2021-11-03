/* 3. Дана строка «Я учу javascript!». Вырежете из нее слово «учу» и слово «javascript» тремя разными способами (через substr, substring, slice). */
task(3);

let str3 = 'Я учу javascript!';
let word31 = 'учу';
let word32 = 'javascript';

let ind31 = str3.indexOf(word31);
let ind32 = str3.indexOf(word32);

console.log('1. Через substring:');
console.log(str3.substring(ind31, ind31 + word31.length));
console.log(str3.substring(ind32, ind32 + word32.length));

console.log('2. Через substr:');
console.log(str3.substr(ind31, word31.length));
console.log(str3.substr(ind32, word32.length));

console.log('3. Через slice:');
console.log(str3.slice(ind31, ind31 + word31.length));
console.log(str3.slice(ind32, ind32 + word32.length));