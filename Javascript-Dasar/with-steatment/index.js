const person = {
    firsName : "Akhmad",
    middleName : "",
    lastName : "Fauzi"
};

// Kode tanpa with steatement 
console.log(person.firsName);
console.log(person.middleName);
console.log(person.lastName);


// Menggunakan With Steatment 
with(person) {
    console.log(firsName);
    console.log(middleName);
    console.log(lastName);
}