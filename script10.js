/*10. Напишите ф-цию, которая из полного адреса с параметрами и без, например: https://tech.onliner.by/2018/04/26/smart-do-200/?utm_source=main_tile&utm_medium=smartdo200#zag3 , получит адрес доменного имени (https://tech.onliner.by), остальную часть адреса без параметров (/2018/04/26/smart-do-200/), параметры (utm_source=main_tile&utm_medium=smartdo200) и хеш (#zag3). В адресе может и не быть каких-либо составляющих. Ф-ция должна возвращать массив.*/
task(10);

function linkSearch (link) {
   let regexp = /(?<domain>https?:\/{2}[a-z\d\.]+\.[a-z]{2,3})(?<last>\/[^\?^#.]*)?(?<parameters>\?\s?[a-z]+[^#.]*)?(?<hashtag>#.*)?/
   let arrLink = link.match(regexp);
   console.log(arrLink);
   let arrFin = [];
   for (let i = 1; i < arrLink.length; i ++) {
      if (arrLink[i] != undefined) {
         arrFin.push(arrLink[i]);
      }
   }
   // console.log(arrFin);
   return arrFin;
}

let siteLink = 'https://tech.onliner.by/2018/04/26/smart-do-200/?utm_source=main_tile&utm_medium=smartdo200#zag3';

console.log(linkSearch(siteLink));