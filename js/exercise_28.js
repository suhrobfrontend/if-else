// Raqamlar yig'indisi

// var a = +prompt("Birinchi raqamni kriting:");
// var b = +prompt("Ikkinchi raqamni kriting:");
// var c = +prompt("Uchinchi raqamni kriting:");

// var result = a + b + c;

// console.log(result)

// With function
var a = +prompt("Birinchi raqamni kriting:");
var b = +prompt("Ikkinchi raqamni kriting:");
var c = +prompt("Uchinchi raqamni kriting:");
function assemble() {
  d = a + b + c;
  return d;
}
console.log(assemble(a, b, c));
