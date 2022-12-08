// Sonlar o'qidagi masofa
// var a = +prompt("Birinchi raqamni kriting:");
// var b = +prompt("Ikkinchi raqamni kriting:");

// if (a>b) {
//   console.log(a-b)
// } else {
//   console.log(b-a)
// }

// With function
var a = +prompt("Birinchi raqamni kriting:");
var b = +prompt("Ikkinchi raqamni kriting:");
function coordination() {
  c = b - a;
  return c;
}
console.log(coordination(a, b));
