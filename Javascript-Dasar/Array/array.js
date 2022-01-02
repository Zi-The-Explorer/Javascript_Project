let hari = ['senin', 'selasa', 'rabu', 'kamis', 'jumat', 'sabtu', 'minggu'];
let mhs = ['ozi', 'zein', 'jadul', 'emon', 'godel', 'zambul'];
let binatang = [];

// atau
binatang = ['kucing', 'kelinci', 'monyet', 'panda', 'koala', 'sapi'];

// Mengakses data value pada array menggunakan index 
console.log(binatang[0]);

// Mengetahui type datanya pada variable
console.log(typeof(binatang));

// Mengethaui jumlah / panjang dari array
console.log(binatang.length);

// Array dengan value angka
let angka = [10, 30, 87];
console.log(angka);

// Menyimpan value array dengan tipe yang berbeda
let myArr = ["String", 23, false];
console.log(myArr);

// Menyimpan value array dengan function
let myFunct = function myFunction() {
    console.log("Hello world");
}
let myArr2 = ['text', 2, false, myFunct];
console.log(myArr2);

// array didalam array
let myArr3 = ['text', 2, false, myFunct, [2,4,5]];

// Mengambil data array didalam array
console.log(myArr3[4][0]);
