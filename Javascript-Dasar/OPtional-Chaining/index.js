// Kode error untuk mengakses object nullish
const person = {
   // address : 
};

// Mengakses property undefined
let country;

// Pengecekan menggunakan if
if (person.address !== undefined && person.address !== null) {
    country = person.address.country;
}

console.log(country);

// Pengecekan menggunakan optional chaining
console.log(person?.address?.country);