// Uchburchakning tomonlari

// var a = +prompt("Birinchi raqamni kriting:");
// var b = +prompt("Ikkinchi raqamni kriting:");
// var c = +prompt("Uchinchi raqamni kriting:");

// if (a + b > c || b + c > a || c + a > b) {
//   console.log(true);
// } else {
//   console.log(false);
// }

// With function
var a = +prompt("Birinchi burchakni kriting:");
var b = +prompt("Ikkinchi burchakni kriting:");
var c = +prompt("Uchinchi burchakni kriting:");
function triangles() {
  if (a + b > c && b + c > a && a + c > b) {
    return true;
  } else {
    return false;
  }
}
console.log(triangles(a, b, c));
