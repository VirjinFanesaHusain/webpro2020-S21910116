// const hitung = (a,b,c,d,e,f,g) => {
//     const angka = [a,b,c,d,e];
//     let total = 0
//     for (let i=0; i<5; i++){
//         total = total + angka[i];
//     }
//     return total;
// };

// console.log{hitung(1,2,3,4,5)};

// const hitung = (param1, param2, ...params) => {
//     console.log(param1);
//     console.log(param2);
//     console.log(params);

//     let total = 0;
//     params.forEach((el) => {
//         total = total + el;
//     });
//     return total;
// };
// console.log(hitung(1,2,3,4,5,6,7,8,9,10));

//spread Operator

//1. Duplikasi Array
// const angka = [1,2,3,4,5];
// const angka2 = [...angka];

// angka(0) = 10;
// console.log(angka);
// console.log(angka2);

// console.log(angka);
// console.log(...angka);

//2. Menggabungkan Array

// const angka1 = [1,2,3,4,5];
// const angka2 = [6,7,8,9,10];
// const angka3 = [12,13];

// const gabung5 = angka1.concat(angka2, angka3);
// console.log(gabung); 

// const gabung6 = [...angka1, ...angka2, ...angka3];
// console,log(gabung)

let orang = {
    nama:"Virjin";
    umur: 19;
};

orang  = {...orang, pekerjaan: "Pramugari", Pendidikan: "S2"};
console.log(orang);

const obj1 = {a: 1, b: 2};
const obj2 = {c: 3, d: 4};

const objGabung = {...obj1, ...obj2};
