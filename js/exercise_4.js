// juft va toqsonlarni topish

// var enterNumber = +prompt("Raqam kiriting!");
// var two = 2;
// var zero = 0;
// var qoldiq = enterNumber % two;

// if (qoldiq == zero) {
//   console.log("Juft")
// } else {
//   console.log("Toq")
// }

// with function
var a = +prompt("Raqam kiriting:");

function pairOrOdd() {
  if (a % 2 == 0) {
    return "juft";
  } else {
    return "toq";
  }
}

console.log(pairOrOdd(a));
