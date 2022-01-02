// Function di variable 
function sayHello(name) {
    console.log(`Hello ${name}`);
};

// Menyimpan function kedalam variable
let hello = sayHello;

// Memanggil function nya langsung
sayHello("Akhmad Fauzi");

// Memanggil function melalui variable
hello("Ozi");


// function di parameter
function giveMeName(callback) {
    callback("Ozi"); // sayHello("Ozi");
}

giveMeName(sayHello);