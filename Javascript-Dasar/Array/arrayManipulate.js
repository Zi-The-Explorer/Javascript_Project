// Manipulasi Array

// 1.Menambah isi array
// var arr = [];
// arr[0] = "Akhmad Fauzi"
// arr[1] = "Muhammad Zein"
// arr[2] = "Jadul"

// 2. Menghapus isi array
// let arr = ["Akhmad fauzi", "Jadul", "Muhammad Zein"];
// arr[0] = undefined;
// console.log(arr);

// 3. Menampilkan isi array
// let arr = ["Akhmad Fauzi", "Adinda Fatiharki", "Aleyda Kanaya", "Fernanda Hasna"];
// for (let i = 0; i < arr.length; i++) {
//     const element = arr[i];
//     console.log(element);
// }

// Method pada array
// 1. Join
// let arr = ["Akhmad Fauzi", "Adinda Fatiharki", "Aleyda Kanaya", "Fernanda Hasna"];
// console.log(arr.join(" | "));

// 2. push and pop
// let arr = ["Akhmad Fauzi", "Adinda Fatiharki", "Aleyda Kanaya", "Fernanda Hasna"];
// arr.push('Muhammad Zein'); // Akan ditambahkan di akhir 
// arr.pop(); // Menhilangkan element di array dari elemen terakhir
// arr.pop();
// console.log(arr.join(" | "));

// 3. unshift dan shift
// let arr = ["Akhmad Fauzi", "Adinda Fatiharki", "Aleyda Kanaya", "Fernanda Hasna"];
// arr.unshift('Muhammad Zein');  // Menambahkan element baru ke baris pertama
// arr.shift(); // Menhilangkan element dari baris pertama
// console.log(arr.join(" | "));

// 4. splice 
// let arr = ["Akhmad Fauzi", "Adinda Fatiharki", "Aleyda Kanaya", "Fernanda Hasna"];
// splice (bekerjaDimualiPadaIndexKeberapa, mauDihapusBerapa, elemenBaru1, elementBaru2, ...);
// arr.splice(2, 2 , 'Muhammad Zein', "Jadul");
// console.log(arr.join(" | "));

// 5. Slice 
// let arr = ["Akhmad Fauzi", "Adinda Fatiharki", "Aleyda Kanaya", "Fernanda Hasna"];
// slice(dimualiDariIndexKeberapa, AkhirnyaKeberapa)
// let getArr = arr.slice(0, 2); // Mengambil akhamad fauzi dan adinda
// console.log(getArr.join(" | "));

// 6. foreach
let angka1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let arr1 = ["Akhmad Fauzi", "Adinda Fatiharki", "Aleyda Kanaya", "Fernanda Hasna"];
// Menggunakan looping biasa 
for (let index = 0; index < angka1.length; index++) {
    console.log(angka1[index]);
}

// Menggunakan foreach
arr1.forEach(function(e, i) {
    console.log(`Mahasiswa ke - ${i} adalah ${e}`);
});


// 7. map
// let arr = [1,2,3,4,5,6,7,8,9];
// let angka = arr.map(function(e){
//     return e * 2
// });
// console.log(angka.join(" - "));

// 8. sort  
// let arr = [1,2,6,5,3,7,8,4,9];
// arr.sort(); // Mengurutkan nilai
// console.log(arr.join(" - "));

// 9. filter and find
let arr = [1,2,3,4,5,6,7,8,9];
// let angka = arr.filter(function (x) {
//     return x  > 4
// });
let angka = arr.find(function (x) {
    return x  > 4
});
console.log(angka);








