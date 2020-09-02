/*
    1.function


let a = 8;
let b = 3;

let luasA = a*a;
let luasB = b*b;

let total = luasA + luasB;
console.log(total);
*/

/*function declaration
function penjumlahanDuaBujurSangkar(a,b){
    let luasA = a*a;
    let luasB = b*b;

    let total = luasA + luasB;
    return total
}

console.log(penjumlahanDuaBujurSangkar(8,3));
console.log(penjumlahanDuaBujurSangkar(10,5));
*/

/*Refactoring
function penjumlahanDuaBujurSangkar(a,b){

    return a*a +  b*b;
}

console.log(penjumlahanDuaBujurSangkar(8,3));
console.log(penjumlahanDuaBujurSangkar(10,5));


//contoh parameter dan argument
function tambah(a,b){
    return a + b;
}
function kali(a,b){
    return a * b;
}
  console.log(tambah(kali(5,2),kali(10,2)));
*/

//function expression
const penjumlahanDuaBujurSangkar = function (a,b){
    return a*a +  b*b;
};

console.log(penjumlahanDuaBujurSangkar(8,3));
console.log(penjumlahanDuaBujurSangkar(10,5));