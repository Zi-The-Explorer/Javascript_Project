// Kode Global Scope 

// Global Scope
let counter = 0

function hitMe() {
    // local scope function hitMe
    counter++ // we can access
}


hitMe()
hitMe()
hitMe()

console.log(counter)



function first() {
    // local scope first
    let firstVariable = "First"
    console.log(firstVariable);
}

first()

// Ini berada di global scope
console.log(firstVariable) // Tidak dapat mengakses variable pada local scope function


