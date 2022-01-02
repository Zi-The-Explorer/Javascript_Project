const person = {};

// Menambah atau mengubah 
person["nama"] = "Akhmad Fauzi";
person["alamat"] = "Indonesia";
person["Umur"] = 24;


console.table(person);

// Menghapus index properties  
delete person["Umur"];
console.table(person);

// Membuat Object properties secara langsung
const orang = {
    "Nama" : "Akhmad Fauzi",
    "Alamat" : "Bekasi, Indonesia",
    "Umur" : 24
};

console.table(orang);

// Mengakses Property Object
console.info(`nama : ${orang.Nama}`);
console.info(`alamat : ${orang.Alamat}`);
console.info(`umur : ${orang.Umur}`);