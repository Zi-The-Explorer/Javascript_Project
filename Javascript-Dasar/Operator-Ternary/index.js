// Kode tanpa menggunakan ternary operator 
const nilai = 70;
let ucapan;

if (nilai >= 75) {
    ucapan = "Selamat Anda Lulus";
}else {
    ucapan = "Silahkan Coba Lagi"
}

console.log(ucapan);

// menyederhanakan if steatment dengan ternary operator 
ucapan = nilai >= 75 ? "Selamat Anda Lulus" : "Wah Coba Lagi Nanti Ya";
console.log(ucapan);