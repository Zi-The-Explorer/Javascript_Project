let jumlahAngkot = 10;
let noAngkot = 1;


for(noAngkot; noAngkot <= jumlahAngkot; noAngkot++) {
    if (noAngkot <= 6 && noAngkot != 5 ) {
        console.info(`Angkot no ${noAngkot} Beroperasi dengan baik`);
    } else if (noAngkot === 9 || noAngkot === 7) {
        console.info(`Angkot no ${noAngkot} Sedang tidak beroperasi`);
    } else {
        console.info(`Angkot no ${noAngkot} Sedang Lembur`);
    }

}