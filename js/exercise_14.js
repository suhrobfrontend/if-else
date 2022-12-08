// Uchburchakning ichki burchaklari

// var a = +prompt("Birinchi raqamni kriting:");
// var b = +prompt("Ikkinchi raqamni kriting:");
// var c = +prompt("Uchinchi raqamni kriting:");
// var d = a + b + c;
// var zero = 0;
// var deg = 180;

// if (d>0 && d==deg) {
//   console.log(true)
// } else (
//   console.log(false)
// )

// With function
var a = +prompt("Birinchi raqamni kriting:");
var b = +prompt("Ikkinchi raqamni kriting:");
var c = +prompt("Uchinchi raqamni kriting:");
function triangle() {
  if (a + b + c === 180) {
    return true;
  } else {
    return false;
  }
}
console.log(triangle(a, b, c));
