// Kode tanpa Nullish Coalescing Operator 
let parameter;

let data = parameter;
if (data === undefined || data === null) {
    data = "Nilai Default";
}

console.log(data);

// Menggunakan Nullish operator
data = parameter ?? "Nilai Default"

console.log(data);