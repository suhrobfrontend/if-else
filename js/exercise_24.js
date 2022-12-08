// Sonlar nechi xonali
// var a = +prompt("Raqamni kriting:");
// var ten = 10;
// var hundred = 100;
// if (a >= ten) {
//   console.log(2)
// } else if (a >= 100) {
//   console.log(3)
// } else {
//   console.log(1)
// }

// With function
var a = +prompt("Raqamni kriting:");
function numberRoom() {
  if (a >= 10 && a < 100) {
    return 2;
  } else if (a >= 100 && a < 1000) {
    return 3;
  } else if (a < 10) {
    return 1;
  } else {
    return "Siz juda katta son kiritdingiz!";
  }
}
console.log(numberRoom(a));
