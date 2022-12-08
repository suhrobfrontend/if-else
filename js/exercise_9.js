// 3 va 4ga bo'linadigan son

// var a = +prompt("Raqam kiriting!");
// var three = 3;
// var four = 4;
// var zero = 0;
// var resultOne = a % three;
// var resultTwo = a % four;

// if (resultOne == zero && resultTwo == zero) {
//   console.log(true);
// } else {
//   console.log(false);
// }

// With function
var a = +prompt("Raqam kiriting:");
function fourAndThree() {
  if (a % 4 == 0 && a % 3 == 0) {
    return true;
  } else {
    return false;
  }
}
console.log(fourAndThree(a));
