// Kichik yoki Katta alfavit

// var a = prompt("Harf kiriting:");
// if (a === upper) {
//   console.log("Uppercase");
// } else {
//   console.log("Lowercase");
// }

// With function
var a = prompt("Harf kiriting:");
function upperOrLower() {
  if (a === a.toUpperCase()) {
    return "Uppercase";
  } else {
    return "Lowercase";
  }
}
console.log(upperOrLower(a));
