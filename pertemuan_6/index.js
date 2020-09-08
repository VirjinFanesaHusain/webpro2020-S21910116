/*
    object 
*/

//conts mahasiswa1 = ["john","doc",31,true];

const mhs1 = {
    namaDepan: "Virgin",
    namaBelakang: "Husain",
    umur: 31,
    sudahLulus: true,
    alamat: {
        jalan: "Jln.Arnold Mononutu",
        kecamatan: "Airmadidi",
        kabupaten: "Minahasa Utara",
},
IPsemester: [3.05, 3.25, 3.0, 3.4],
//memakai 'this' untuk mengakses properti di dalam objek itu sendiri.
//kalau memakai arrowfunction, tidak memerlukan this lagi.

hitungIPK: function (){
    let total = 0;
    this.IPsemester.forEach(function(el){
        total = total + el;
    });
    this.IPkumulatif = total/4;
    },

};
//delete mhs1.namaBelakang;
//console.leg[mhs1];

//2. kata kunci new
//const mhs2 = new object();
//mhs2.namaDepan = "Fanesa" 
//mhs2.namaBelakang= "Nesa";

//mengakses properti objek
//1. dot notation
//console.log(mhs1.umur);
//2. bracket notation
//console.log(mhs1["namaBelakang"]);

//console.log(mhs1.alamat.jalan);
//console.log(mhs1.IPsemester[2]);
//mhs1.hitungIPK();
//console.log(mhs1);

//array object (JSON)
const mahasiswa = [
    {
        nim: "001",
        namaDepan: "iji",
        namaBelakang: "john",
    },
    {
        nim: "002",
        namaDepan: "mes",
        namaBelakang: "pyt",
    },
    {
        nim: "002",
        namaDepan: "stenly",
        namaBelakang: "adam",
    },
];

mahasiswa.forEach(function(el){
    console.log(el);
});


    }
    }
]