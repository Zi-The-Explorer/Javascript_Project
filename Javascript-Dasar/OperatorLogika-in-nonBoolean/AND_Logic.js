console.log("Hello" && ''); // ''
console.log("" && []); // ""
console.log("0" && "NOL");  // NOL
console.log(0 && "NOL");  // 0
console.log(null && "NULL");  // null
console.log(undefined && "UNDEFINED");  // undefined 
console.log("undefined" && "null");  // null


// Contoh penggunaan kasus
const data = {
    name : "Akhmad Fauzi",
    address : {
        country: "Indonesia",
        city : "Bekasi",
        code : "17145"
    },
    age : 24
};

const country = data.name && data.address.country; // Indonesia
console.log(country);