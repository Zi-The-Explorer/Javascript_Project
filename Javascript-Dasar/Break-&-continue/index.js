// Kode break
let num = 1;

// Kondisi while adalah true, Looping forever
// Namun dalam block loop, kita menambahkan if steatment untuk melakukan break jika kondisi sudah lebih dari 10 maka hentikan
while (true) {
    console.log("Perulangan ke " + num);
    num ++;

    if (num > 5) {  
        break;
    }
}


// Kode Continue 
for (let i = 1; i <= 100 ; i++) {
    if (i % 2 == 0 ) {
        continue;
    }
    console.log("Perulangan Ganjil ke-" + i);
}
