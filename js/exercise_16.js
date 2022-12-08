// Uchburchak shakli

// var a = +prompt("Birinchi raqamni kriting:");
// var b = +prompt("Ikkinchi raqamni kriting:");
// var c = +prompt("Uchinchi raqamni kriting:");

// if (a==b && b==c) {
//   console.log("equilateral")
// } else if (a==b || b==c || a==c) {
//   console.log("isosceles")
// } else {
//   console.log("scalene")
// }

// With function
var a = +prompt("Birinchi burchakni kriting:");
var b = +prompt("Ikkinchi burchakni kriting:");
var c = +prompt("Uchinchi burchakni kriting:");
function triangleTypes() {
  if (a == b && b == c) {
    return "equilateral";
  } else if (a == b || b == c || a == c) {
    return "'isosceles";
  } else {
    return "scalene";
  }
}
console.log(triangleTypes(a, b, c));
