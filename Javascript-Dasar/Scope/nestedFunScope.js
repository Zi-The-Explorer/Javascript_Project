// Nested Scope Function
function first(name) {
    let greeting = `Hello ${name}`
    function second() {
        console.log(greeting) 
        // variable greeting dapat di panggil karna berada di local scope function first() yang posisi nya berada di luar function second, 
        // karna function second adalah nested fun dari function first()


        let secondVar = "This Second scope"
    } 
    second()
    // console.log(secondVar) //Error
    // Pada scope local di function first(), 
    // tidak dapat mengakses variable yang terdapat didalam local scope dari nested function nya
}

first("Akhmad Fauzi")