// Sonlarni taqqoslab tashlang

// var a = +prompt("Birinchi raqamni kriting:");
// var b = +prompt("Ikkinchi raqamni kriting:");
// var c = +prompt("Uchinchi raqamni kriting:");

// if (a < b && b < c) {
//   console.log(1)
// } else if (a>b && b>c) {
//   console.log(2)
// } else if (a<b && b>c) {
//   console.log(b)
// } else if (a == b && b == c) {
//   console.log(5)
// } else {
//   console.log(0)
// }

// With function
var a = +prompt("Birinchi raqamni kriting:");
var b = +prompt("Ikkinchi raqamni kriting:");
var c = +prompt("Uchinchi raqamni kriting:");
function comparisonUpLow() {
  if (a < b && b < c) {
    return 1;
  } else if (a > b && b > c) {
    return 2;
  } else if (a < b && b > c) {
    return b;
  } else {
    return 0;
  }
}
console.log(comparisonUpLow(a, b, c));
