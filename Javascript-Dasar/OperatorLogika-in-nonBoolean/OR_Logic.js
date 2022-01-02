console.log("Hello" || "");
console.log("" || []);
console.log("0" || "NOL");
console.log(0 || "NOL");
console.log(null || "NULL");
console.log(undefined || "UNDEFINED");
console.log(0 || false);

// Penggunaan kasus
const person = {
    firstName : "",
    lastName  : "Fauzi",
}

const name = person.firstName || person.lastName;
console.log(name);