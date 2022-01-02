// Kode For In di Object
// Mengambil data di object menggunakan for berdasarkan property
const person = {
    firstName : "Akhmad",
    middleName : "",
    lastName : "Fauzi"
};

for (const property in person) {
    console.log(`Property ${property} : ${person[property]}`);
}

// Mengambil data di Array menggunakan for berdasarkan index 
// Kode For In di Array
const names = ["Fauzi", "Zein", "Aldi"];

for(const index in names) {
    console.log(`Index ke ${index} : ${names[index]}`);
}