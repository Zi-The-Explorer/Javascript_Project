let name;

if (name === undefined) {
    console.info("UNDEFINED");
} else {
    console.info("DEFINED");
}

// Undefined array value
const nama = ["Akhmad", "Fauzi"];

if (nama[2] === undefined) {
    console.info("Data Tidak Ada");
} else {
    console.info(`Hello ${nama[2]}`);
}

// Undefined Object Property
const person = {
    "nama" : "Akhmad Fauzi",
    "Alamat" : "Bekasi, Indonesia",
    "age" : 24
};
if (person.nama === undefined) {
    console.info("Undefined");
} else {
    console.info(`Hello ${person.nama}`);
}