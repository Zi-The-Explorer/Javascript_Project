let jumlahAngkot = 10;
let angkotBeroperasi = 8;
let noAngkot = 1;

for (noAngkot; noAngkot <= angkotBeroperasi; noAngkot++) {
    console.info(`Angkot No ${noAngkot} Beroperasi dengan baik`);
}

for (noAngkot = angkotBeroperasi + 1; noAngkot <= jumlahAngkot; noAngkot++) {
    console.info(`Angkot No ${noAngkot} Tidak Beroperasi`);
}

// contoh perulangan tidak pernah berhenti / Looping forever

// for (; ;) {
//     console.log("Looping Forever");
// }