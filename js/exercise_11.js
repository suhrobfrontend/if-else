// Char sonmi? (harakter sonmi?)

var a = prompt("harakter yozing!");
var nine = "9";
var zero = "0";

if (a >= zero && a <= nine) {
  console.log("Son");
} else {
  console.log("Alpha");
}

// With function
var a = prompt("harakter yozing:");
function charact() {
  if (a >= 0 && a <= 9) {
    return "son";
  } else {
    return "alpha";
  }
}
console.log(charact(a));
