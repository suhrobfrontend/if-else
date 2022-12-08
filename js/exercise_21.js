// O'zaro teng sonlar
// var a = +prompt("Birinchi raqamni kriting:");
// var b = +prompt("Ikkinchi raqamni kriting:");
// var c = +prompt("Uchinchi raqamni kriting:");

// if (a==b) {
//   console.log(c)
// } else if (b==c) {
//   console.log(a)
// } else if (a==c) {
//   console.log(b)
// } else {
//   console.log(0)
// }

// With function
var a = +prompt("Birinchi raqamni kriting:");
var b = +prompt("Ikkinchi raqamni kriting:");
var c = +prompt("Uchinchi raqamni kriting:");
function assignmentNum() {
  if (a === b) {
    return c;
  } else if (a === c) {
    return b;
  } else if (b === c) {
    return a;
  } else {
    return 0;
  }
}
console.log(assignmentNum(a, b, c));
