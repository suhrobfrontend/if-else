// Kabisa yili

// var a = +prompt("yilni kiriting!")
// var zero = 0;
// var four = 4;
// var hundred = 100;
// var fourHundred = 400;

// if (a%four==zero && a%hundred!=zero || a%fourHundred==zero) {
//   console.log("Bu yil kabisa yili")
// } else {
//   console.log("Bu yil kabisa yili emas!")
// }

// With function
var a = +prompt("yilni kiriting:");
function leapYear() {
  if (a % 4 === 0 && (a % 100 !== 0 || a % 400 === 0)) {
    return "Bu yil kabisa yili";
  } else {
    return "Bu yil kabisa yili emas";
  }
}
console.log(leapYear(a));
