//Masih materi pertemuan 14
//======================

//memecah item atau property pada array atau object ke dalam variabel yang berbeda

//1. Array

//const colors = ["merah", "kuning", "hijau"];

// let satu = colors[0];
// let dua = colors[1];
// let tiga = colors[2];

// let [satu,dua,tiga] = colors;
// console.log(satu,dua,tiga);

// let [satu, dua,] = colors;
// console.log(satu,dua);

// let [satu, , tiga, empat = biru] = colors;
// cosnlose.log(satu, tiga, empat);

//2. Object

// const user = {
//     name: "virjin",
//     gender: "male",
//     age: 33;
// };

// let {name, gender, age} = user;

// console.log(name,gender,age);

// let {name, umur} = user;
// console.log(name,age);
//  const display = (pros) => {
//      console.log(`Nama saya adalah ${name}.Umur saya adalah ${age}`);
//  };

//  display(user);

//3. Array Object

// const users = [
//     {id: 1, name: "virjin"};
//     {id: 2, name: "Fanesa"};
//     {id: 3, name: "Husain"};
// ];

// let [user1, user2, user3] = users;
// console.log(user1, user2, user3);

// let [
//     {id: idUser1, name: nameUser1 }, 
//     {id: idUser2,name: nameUser2},
//     {id: idUser3, name: nameUser3}] = users;
// console.log(id, name);

//4. Kombinasi dengan rest Operator

const colors = ["merah", "kuning", "hijau", "biru"];

let (satu, ...lainnya) = colors;

console.log(satu);
console.log(lainnya);