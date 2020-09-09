/*
    JavaScript Conditional
*/

//1. Menggunakan if, else if dan else
let nilaiVirjin = 91;

    if (nilaiVirjin > 80) {
        console.log("SANGAT MEMUASKAN");
} 
    else if (nilaiVirjin >= 60 && nilaiVirjin <= 80) {
        console.log("MEMUASKAN");
} 
    else {
        console.log("JANGAN MENYERAH, COBA LAGI!");
}

//2. Menggunakan switch case
let seragamSekolah;
let hari = "jumat";

switch (hari) {
  case "senin":
    seragamSekolah = "kemeja putih bawahan merah";
    break;
  case "selasa":
    seragamSekolah = "kemeja hijau bawahan hitam";
    break;
  case "rabu":
    seragamSekolah = "kemeja putih bawahan putih";
    break;
  case "kamis":
    seragamSekolah = "kemeja batik merah bawahan hitam";
    break;
  case "jumat":
    seragamSekolah = "baju pramuka";
    break;
  default:
    seragamSekolah = "baju bebas";
}

console.log(seragamSekolah);

/*Dua atau lebih kondisi berbeda
let seragamSekolah;
let hari = "senin";

switch (hari) {
  case "senin":
  case "selasa":
  case "rabu":
  case "kamis":
    seragamSekolah = "kemeja putih bawahan merah";
    break;
  case "jumat":
    seragamSekolah = "baju pramuka";
    break;
  default:
    seragamSekolah = "baju bebas";
}

console.log(seragamSekolah); 
*/

/*
    JavaScript Loop
*/

//1. For Loop
for (let i = 1; i <= 10; i++) {
    console.log(i);
  }
  
/*2. For /in Loop
const buku = {
    judul: "Harry Potter and The Philosopher's Stone",
    pengarang: "J. K. Rowling",
    tahun: 1997
 };
 for (x in buku) {
   console.log(x, ':', buku[x]);
 }
 */

 
//3. For /of Loop
const buku = ["Game of Thrones: A Song of Ice and Fire",  
   "Harry Potter and The Philosopher's Stone", 
   "Lord of The Rings: The Fellowship of The Ring"
];

for (x of buku) {
  console.log(x);
}

/* 4. While Loop
let i = 1;

while (i <= 10) {
  console.log(i);
  i++;
}
*/


//5. Do While Loop
let i = 1;

do {
  console.log(i);
  i++;
} while (i <= 10);
