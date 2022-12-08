// Hafta kuni

// var a = +prompt("hafta kunini kriting:");

// if (a == 1) {
//   console.log("dushanba");
// } else if (a == 2) {
//   console.log("seshanba");
// } else if (a == 3) {
//   console.log("chorshanba");
// } else if (a == 4) {
//   console.log("payshanba");
// } else if (a == 5) {
//   console.log("juma");
// } else if (a == 6) {
//   console.log("shanba");
// } else if (a == 7) {
//   console.log("yakshanba");
// } else {
//   console.log("None");
// }

// With function

var a = +prompt("hafta kunini kriting:");
function weekDay() {
  if (a === 1) {
    return "dushanba";
  } else if (a === 2) {
    return "seshanba";
  } else if (a === 3) {
    return "chorshanba";
  } else if (a === 4) {
    return "payshanba";
  } else if (a === 5) {
    return "juma";
  } else if (a === 6) {
    return "shanba";
  } else if (a === 7) {
    return "yakshanba";
  } else {
    return "None";
  }
}

console.log(weekDay(a));
