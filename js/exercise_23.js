// Sonlar o'qidagi a nuqta

// var a = +prompt("Raqamni kriting:");
// var zero = 0;
// var subOne = -1;
// if (a < zero) {
//   console.log(a * subOne);
// } else {
//   console.log(a);
// }

// With function
var a = +prompt("Raqamni kriting:");
function aDot() {
  if (a < 0) {
    return a * -1;
  } else {
    return a;
  }
}
console.log(aDot(a));
