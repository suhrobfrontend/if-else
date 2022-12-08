// 5ga bo'linadigan son

// var a = +prompt("Raqam kiriting!");
// var five = 5;
// var zero = 0
// var result = a % five;

// if (result == zero) {
//   console.log("true")
// } else {
//   console.log("false")
// }

// With function
var a = +prompt("Raqam kiriting:");
function five() {
  if (a % 5 === 0) {
    return true;
  } else {
    return false;
  }
}
console.log(five(a));
