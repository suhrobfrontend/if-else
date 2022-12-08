// 2 tasini solishtirish

// var a = +prompt("Birinchi raqamni kriting:");
// var b = +prompt("Ikkinchi raqamni kriting:");
// var c = +prompt("Uchinchi raqamni kriting:");
// var zero = 0;
// var one = 1;

// if (a % 2 == zero && b % 2 == zero && c % 2 == zero) {
//   console.log(zero);
// } else if (a % 2 == one && b % 2 == one && c % 2 == one) {
//   console.log(zero);
// } else if (
//   (a % 2 == one && b % 2 == one) ||
//   (b % 2 == one && c % 2 == one) ||
//   (a % 2 == zero && c % 2 == one)
// ) {
//   console.log(2);
// } else if (
//   (a % 2 == zero && b % 2 == zero) ||
//   (b % 2 == zero && c % 2 == zero) ||
//   (a % 2 == zero && c % 2 == zero)
// ) {
//   console.log(one);

// } else {
//   console.log(zero);
// }

// With function
var a = +prompt("Birinchi raqamni kriting:");
var b = +prompt("Ikkinchi raqamni kriting:");
var c = +prompt("Uchinchi raqamni kriting:");
function comparisonTwoNumbers() {
  if (
    (a % 2 === 1 && b % 2 === 1 && c % 2 === 1) ||
    (a % 2 === 0 && b % 2 === 0 && c % 2 === 0)
  ) {
    return 0;
  } else if (
    (a % 2 === 0 && b % 2 === 0) ||
    (c % 2 === 0 && b % 2 === 0) ||
    (a % 2 === 0 && c % 2 === 0)
  ) {
    return 1;
  } else if (
    (a % 2 === 1 && b % 2 === 1) ||
    (c % 2 === 1 && b % 2 === 1) ||
    (a % 2 === 1 && c % 2 === 1)
  ) {
    return 2;
  } else {
    return 0;
  }
}
console.log(comparisonTwoNumbers(a, b, c));
