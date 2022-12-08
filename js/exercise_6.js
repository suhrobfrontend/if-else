// Uchta sondan kattasini topish (a, b, c)

// var firstNumber = +prompt("Birinchi raqamni kiritng!");
// var secondNumber = +prompt("Ikkinchi raqamni kiritng!");
// var thirdNumber = +prompt("Uchinchi raqamni kiritng!");

// if (firstNumber > secondNumber && firstNumber > thirdNumber) {
//   console.log(`Katta son ${firstNumber}`);
// } else if (firstNumber <  thirdNumber && secondNumber < thirdNumber) {
//   console.log(`Katta son ${thirdNumber}`);
// }  else {
//   console.log(`Katta son ${secondNumber}`);
// }

// With function
var a = +prompt("Birinchi raqamni kiritng!");
var b = +prompt("Ikkinchi raqamni kiritng!");
var c = +prompt("Uchinchi raqamni kiritng!");

function comparisons() {
  if (a > b && a > c) {
    return a;
  } else if (b > a && b > c) {
    return b;
  } else {
    return c;
  }
}
console.log(comparisons(a, b, c));
