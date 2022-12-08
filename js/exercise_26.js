// 3ta son

// var a = +prompt("Birinchi raqamni kriting:");
// var b = +prompt("Ikkinchi raqamni kriting:");
// var c = +prompt("Uchinchi raqamni kriting:");

// if (a % 2 == 0 && b % 2 == 0 && c % 2 == 0) {
//   console.log(2);
// } else if (a % 2 != 0) {
//   console.log(3);
// } else if (b % 2 != 0) {
//   console.log(3);
// } else if (c % 2 != 0) {
//   console.log(3);
// } else {
//   console.log(0);
// }

// With function
var a = +prompt("Birinchi raqamni kriting:");
var b = +prompt("Ikkinchi raqamni kriting:");
var c = +prompt("Uchinchi raqamni kriting:");
function threeNumbers() {
  if (a % 2 === 1 && b % 2 === 1 && c % 2 === 1) {
    return 1;
  } else if (a % 2 === 0 && b % 2 === 0 && c % 2 === 0) {
    return 2;
  } else if (a % 2 === 1 || b % 2 === 1 || c % 2 === 1) {
    return 3;
  } else {
    return 0;
  }
}
console.log(threeNumbers(a, b, c));
