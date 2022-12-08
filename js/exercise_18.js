// Kichik son
// var a = +prompt("Birinchi raqamni kriting:");
// var b = +prompt("Ikkinchi raqamni kriting:");

// if (a > b) {
//   console.log(b);
// } else if (a == b) {
//   console.log("teng");
// } else {
//   console.log(a);
// }

// With function
var a = +prompt("Birinchi raqamni kriting:");
var b = +prompt("Ikkinchi raqamni kriting:");
function twoNumbers() {
  if (a > b) {
    return a;
  } else if (b > a) {
    return b;
  } else {
    return "teng";
  }
}

console.log(twoNumbers(a, b));
