// Syarat Mutlak untuk lulus adalah berdasarkan nilai ujian dan jumlah absen maksimal

const nilaiUjian = 70;
const absen = 3;

if (nilaiUjian >= 65 && absen < 15) {
    document.writeln("Selamat Kamu Lulus");
} else {
    document.writeln("Maaf kamu tidak lulus");
}
