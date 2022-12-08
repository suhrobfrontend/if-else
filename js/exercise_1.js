// 10 bilan taqqoslash

// var enterNumber = +prompt("Raqam kiriting!");
// var ten = 10;
// var three = 3;
// var two = 2;
// Var twelfe = 12;
// if (enterNumber > ten) {
//   console.log(enterNumber + three);
// } else if (enterNumber == ten) {
//   console.log(ten + twelfe);
// } else {
//   console.log(enterNumber * twelfe);
// }




// With function
var NumberIn = +prompt("Raqam kiriting!");
function exercise1(Num) {
  if (Num > 10) {
    return Num + 3
  } else if (Num < 10) {
    return Num * 2
  } else {
    return 22
  }
}
console.log(exercise1(NumberIn))