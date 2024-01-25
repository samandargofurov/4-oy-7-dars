// 1. ========> Ixtiyoriy sonning kubini topuvchi funksiya yozing. <===============        \/\/

// // // ====> regular function <=====

// function kubiniTopish(arg) {
//     let kub = arg ** 3;

//     return kub
// }

// let res = kubiniTopish(2);
// console.log(res);

// // // ====> express function <=====

// let kubiniTopish2 = function(arg) {
//     let kub = arg ** 3;

//     return kub
// }

// let res2 = kubiniTopish2(4);
// console.log(res2);

// // // ====> arrow function <=====

// let kubiniTopish3 = (arg) => {
//     let kub = arg ** 3;

//     return kub
// }

// let res3 = kubiniTopish3(3);
// console.log(res3);

// 2. ==========> Ixtiyoriy 2 ta sondan kattasining kvadratini topuvchi funksiya yozing. <==========         \/\/

// // =========> regular function <=========

// function ikkitaSondanKattsi(arg, arg2) {
//   let max;
//     if (arg > arg2) {
//         max = arg;
//     } else {
//         max = arg2;
//     }

//     return max ** 2;
// }

// let res = ikkitaSondanKattsi(2, 6);
// console.log(res);

// // ====> express function <=====

// let ikkitaSondanKattsi2 = function(arg, arg2) {
//    let max;
//     if (arg > arg2) {
//         max = arg;
//     } else {
//         max = arg2;
//     }

//     return max ** 2;
// }

// let res2 = ikkitaSondanKattsi2(2, 9);
// console.log(res2);

// // ====> arrow function <=====

// let ikkitaSondanKattsi3 = (arg, arg2) => {
//     let max;
//     if (arg > arg2) {
//         max = arg;
//     } else {
//         max = arg2;
//     }

//     return max ** 2;
// }

// let res3 = ikkitaSondanKattsi3(2, 5);
// console.log(res3);

// 3. ==========> Ixtiyoriy 3 xonali sonning raqamlari yigindisini topuvchi funksiya yozing. <============   \/\/

// // ====> regular function <=====

// function uchXonaliSonniYigindisi(arg) {
//     let b = arg % 10;
//     let o = Math.trunc((arg % 100) / 10);
//     let y = Math.trunc((arg / 100));

//     let yigindi = b + o + y;

//     return yigindi
// }

// let res = uchXonaliSonniYigindisi(123);
// console.log(res);

// // ====> express function <=====

// let uchXonaliSonniYigindisi2 = function(arg) {
//     let b = arg % 10;
//     let o = Math.trunc((arg % 100) / 10);
//     let y = Math.trunc((arg / 100));

//     let yigindi = b + o + y;

//     return yigindi
// }

// let res2 = uchXonaliSonniYigindisi2(212);
// console.log(res2);

// // ====> arrow function <=====

// let uchXonaliSonniYigindisi3 = (arg) => {
//     let b = arg % 10;
//     let o = Math.trunc((arg % 100) / 10);
//     let y = Math.trunc((arg / 100));

//     let yigindi = b + o + y;

//     return yigindi
// }

// let res3 = uchXonaliSonniYigindisi3(223);
// console.log(res3);

// 4. ===========> Ixtiyoriy sonning bo'luvchilari sonini topuvchi funksiya yozing <============       \\\\\\\\\\\\\\

// // ====> regular function <=====

// function sonniBoluvchilariSoni(arg) {

//     return
// }

// let res = sonniBoluvchilariSoni(12);
// console.log(res);

// // ====> express function <=====

// let sonniBoluvchilariSoni2 = function(arg) {

//     return
// }

// let res2 = sonniBoluvchilariSoni2(5);
// console.log(res2);

// // ====> arrow function <=====

// let sonniBoluvchilariSoni3 = (arg) => {

//     return
// }

// let res3 = sonniBoluvchilariSoni3(8);
// console.log(res3);

// 5. ===========> 1 dan n gacha barcha toq sonlar yig'indisini topuvchi funksiya yozing <==================== \/\/

// // ====> regular function <=====

// function toqSonlarYigindisi(arg) {
//     let p = 0;
//     for (let i = 1; i <= arg; i++) {
//         if (i % 2 == 1) {
//             p += i;
//         }
//     }
//     return p
// }

// let res = toqSonlarYigindisi(10);
// console.log(res);

// // ====> express function <=====

// let toqSonlarYigindisi2 = function (arg) {
//     let p = 0;
//     for (let i = 1; i <= arg; i++) {
//         if (i % 2 == 1) {
//             p += i;
//         }
//     }
//     return p
// };

// let res2 = toqSonlarYigindisi2(5);
// console.log(res2);

// // ====> arrow function <=====

// let toqSonlarYigindisi3 = (arg) => {
//     let p = 0;
//     for (let i = 1; i <= arg; i++) {
//         if (i % 2 == 1) {
//             p += i;
//         }
//     }
//     return p
// };

// let res3 = toqSonlarYigindisi3(8);
// console.log(res3);

// 6. ============> a dan b gacha barcha 3 ga hamda 5 ga karrali sonlar kopaytmasini topuvchi funksiya yozing <================     \\\\\\\\\

// ====> regular function <=====

// function karralilarkopaytmasi(a, b) {
//     let p = 1;
//     for (let i = a; i <= b; i++) {
//         if (i % 3 == 0 && i % 5 == 0) {
//             p += i;
//         }
//     }
//     return p
// }

// let res = karralilarkopaytmasi(15, 5);
// console.log(res);

// ====> express function <=====

// let karralilarkopaytmasi2 = function (a, b) {

// };

// let res2 = karralilarkopaytmasi2(15, 3);
// console.log(res2);

// ====> arrow function <=====

// let karralilarkopaytmasi3 = (a, b) => {

// };

// let res3 = karralilarkopaytmasi3(15, 21);
// console.log(res3);

// 7. ==============> Berilgan sonning tub yoki tub emasligini tekshiruvchi funksiya yozing <===================  \\\\\\\

// // ====> regular function <=====

// function tubOrNot(arg) {

// }

// let res = tubOrNot(1);
// console.log(res);

// // ====> express function <=====

// let tubOrNot2 = function (a, b) {

// };

// let res2 = tubOrNot2(15, 3);
// console.log(res2);

// // ====> arrow function <=====

// let tubOrNot3 = (a, b) => {

// };

// let res3 = tubOrNot3(15, 21);
// console.log(res3);

// 8. ==============> Ixtiyoriy 3 xonali sonni palindrom yoki palindrom emasligini tekshiruvchi funksiya yozing <=================== \/\/

// // ====> regular function <=====

// function palindromOrNot(arg) {
//     let b = arg % 10;
//     let y = Math.trunc((arg / 100));

//     if (b == y) {
//         return "palindrom";
//     } else {
//         return "palindrom son emas"
//     }
// }

// let res = palindromOrNot(123);
// console.log(res);

// // ====> express function <=====

// let palindromOrNot2 = function(arg) {
//     let b = arg % 10;
//     let y = Math.trunc((arg / 100));

//     if (b == y) {
//         return "palindrom";
//     } else {
//         return "palindrom son emas"
//     }
// }

// let res2 = palindromOrNot2(100);
// console.log(res2);

// // ====> arrow function <=====

// let palindromOrNot3 = (arg) => {
//     let b = arg % 10;
//     let y = Math.trunc((arg / 100));

//     if (b == y) {
//         return "palindrom";
//     } else {
//         return "palindrom son emas"
//     }
// }

// let res3 = palindromOrNot3(333);
// console.log(res3);
