// Barchasi musbatmi

// var a = +prompt("Birinchi raqamni kriting:");
// var b = +prompt("Ikkinchi raqamni kriting:");
// var c = +prompt("Uchinchi raqamni kriting:");
// var d = +prompt("To'rtinchi raqamni kriting:");

// var zero = 0;

// if (a > zero && b > zero && c > zero && d > zero) {
//   console.log(true);
// } else {
//   console.log(false);
// }

// With function
var a = +prompt("Birinchi raqamni kriting:");
var b = +prompt("Ikkinchi raqamni kriting:");
var c = +prompt("Uchinchi raqamni kriting:");
var d = +prompt("To'rtinchi raqamni kriting:");
function pairOrOdd3() {
  if (a > 0 && b > 0 && c > 0 && d > 0) {
    return true;
  } else {
    return false;
  }
}
console.log(pairOrOdd3(a, b, c, d));
