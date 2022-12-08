// Nechtasi musbat
// var a = +prompt("Birinchi raqamni kriting:");
// var b = +prompt("Ikkinchi raqamni kriting:");
// var c = +prompt("Uchinchi raqamni kriting:");
// var zero = 0;

// if ( a <= zero && b <= zero && c <= zero) {
//   console.log(0);
// } else if ((a < 0 && b < 0) || (b < 0 && c < 0) || (c < 0 && a < 0)) {
//   console.log(1);
// } else if (a < zero || b < zero || c < zero) {
//   console.log(2)
// }

// else {
//   console.log(3);
// }

// With function

var a = +prompt("Birinchi raqamni kriting:");
var b = +prompt("Ikkinchi raqamni kriting:");
var c = +prompt("Uchinchi raqamni kriting:");
function pairOrOdd2() {
  if ((a < 0 && b < 0) || (a < 0 && c < 0) || (b < 0 && c < 0)) {
    return 1;
  } else if (a > 0 && b > 0 && c > 0) {
    return 3;
  } else {
    return 2;
  }
}
console.log(pairOrOdd2(a, b, c));
