// Manfiy va musbat son
// var a = +prompt("Raqam kiriting!");
// var zero = 0;

// if (a > 0) {
//   console.log("Musbat")
// } else if (a = zero) {
//   console.log (zero)
// }
//  else {
//   console.log("Manfiy")
// }

// With function
var a = +prompt("Raqam kiriting:");

function negativeAndPositive() {
  if (a > 0) {
    return "Musbat";
  } else if (a == 0) {
    return 0;
  } else {
    return "Manfiy";
  }
}

console.log(negativeAndPositive(a));
