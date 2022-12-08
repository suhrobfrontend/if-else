// Ikkta sondan kattasini topish (a, b)

// var a = +prompt("Birinchi raqamni kiritng!");
// var b = +prompt("Ikkinchi raqamni kiritng!");

// if (a > b) {
//   console.log(`Katta son ${a}`);
// } else if (a < b) {
//   console.log(`Katta son ${b}`);
// } else {
//   console.log("Voy ular teng");
// }

// With function
var a = +prompt("Birinchi raqamni kiritng!");
var b = +prompt("Ikkinchi raqamni kiritng!");

function comparisons() {
  if (a > b) {
    return a;
  } else {
    return b;
  }
}

console.log(comparisons(a, b));
