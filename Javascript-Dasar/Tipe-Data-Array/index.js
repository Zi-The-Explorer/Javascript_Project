let arrayKosong = [];

let arrayName = [
    
    "Ozi",
    "Zein",
    "Emon",
    "Godel"

];

// Menambah Data Ke Array
arrayName.push("Zambul");
arrayName.push("Jadul");
arrayName.push("Dinda", "Kanaya");

console.table(arrayName);

// Mendapatkan panjang array
let arrayLength = arrayName.length
console.info(`Panjang Array dan jumlah datanya adalah = ${arrayLength}`);

// Mendapatkan data array pada posisi index nya
let getDataArray = arrayName[6]
console.info(`data array pada index ke 6 adalah = ${getDataArray}`);

// Mengubah data array pada posisi index tertentu
let changeDataArray = arrayName[0] = "Akhmad Fauzi"
console.table(arrayName);

// Menghapus data array pada posisi index nya
console.info(`data ${arrayName[6]} berhasil dihapus! `);
let deleteDataArray = delete arrayName[6]
console.table(arrayName);

// Memasukan Array kedalam Array
arrayName.push(["Array1,", "Array2", "Array3"])
console.table(arrayName);