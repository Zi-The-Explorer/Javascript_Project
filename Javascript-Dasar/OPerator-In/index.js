const person = {
    firstName : "Akhmad",
    lastName : "Fauzi"
}

// Melakukan pengecekan apakah ada property tersebut didalam object person
// Mencari firstName property pada person object menggunakan kata kunci in
let result = "firstName" in person; // true
console.log(result);


if ("firstName" in person) {
    console.log("Hello " + person.firstName + " " + person.lastName);
} else if("lastName" in person) {
    console.log("Hello " + person.firstName + " " + person.lastName);
} else {
    console.log("Hello you");
}


const names = [null, "Ozi", null];
const n = 0 in names;
console.log(`Apakah ada index ke 0 didalam array names? ${n}`);