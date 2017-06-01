'use strict'

let szam = 4;
if (szam > 4) {
console.log("A szam nagyobb mint 4");
}
if (szam < 4) {
console.log("A szam kisebb mint 4");
}
if (szam === 4) {
console.log("A szam egyenlő 4");
}

let tomb = [43, 32, "Pista", 12, 654]
let asdasd = true;
for (let k=0; k<tomb.length; k++){
console.log("A tomb "+k+"-edik eleme: "+tomb[k]);
if (tomb[k] === "Pista"){
}
}
if (asdasd){
console.log("Van a tommben Pista");
}


let tomb2 = [6, 12, 19, 24, 43]
var osszeg=0;
for (let k=0; k<tomb2.length; k++){
osszeg=osszeg+tomb2[k];
}
console.log("A tomb összege: "+osszeg);
