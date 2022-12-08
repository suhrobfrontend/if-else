// Son yasash

// var a = prompt("Birinchi raqamni kriting:");
// var b = prompt("Ikkinchi raqamni kriting:");
// var c = prompt("Uchinchi raqamni kriting:");

// var d = Number(a + b + c);

// if (a==0 || b==0 || c==0) {
//   console.log(0)
// } else {
//   console.log(d)
// }

// With function
var a = prompt("Birinchi raqamni kriting:");
var b = prompt("Ikkinchi raqamni kriting:");
var c = prompt("Uchinchi raqamni kriting:");
function makeNumber() {
  d = Number(a + b + c);
  return d;
}
console.log(makeNumber(a, b, c));
