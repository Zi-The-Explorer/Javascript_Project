// Function generator sederhana 
function* createNames() {
    yield "Ozi"
    yield "Zein"
    yield "Jadul"
}

const names = createNames()
for(const name of names) {
    console.log(name)
}


// Function Generator Kompleks 

// Lazy
function* buatGanjil(value) {
    for (let i = 0; i <= value ; i++) {
        if (i % 2 === 1) {
            console.log(`yield ke ${i}`)
            yield i 
        }
    }
}

// eager
function* buatGanjilArray(value) {
    const result = []
    for (let i = 0; i <= value ; i++) {
        if (i % 2 === 1) {
            console.log(`yield ke ${i}`)
            result.push(i)
        }
    }
    return result
}

const angkaGanjil = buatGanjil(100)
// for (const angka of angkaGanjil) {
//     console.log(angka)
// }

// Panggil Lazy Generator dengan satu persatu
console.log(angkaGanjil.next().value)
console.log(angkaGanjil.next().value)
console.log(angkaGanjil.next().value)