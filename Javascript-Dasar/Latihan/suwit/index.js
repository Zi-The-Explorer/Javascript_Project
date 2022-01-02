let pemain = prompt("Pilih : [Gajah, Orang, Semut]").toLowerCase();
// let pemain = "Gajah".toLowerCase();

let computer = Math.random();

let hasil;

if (computer < 0.34) {computer = "gajah"} 
else if (computer < 0.64) {computer = "orang"}
else {computer = "semut"}

// console.log(computer);

if (pemain === computer) {
    
alert(`
kamu : ${pemain}
komputer : ${computer}`);
hasil = "Seri";

} else if (pemain === "gajah" && computer === "orang") {
    alert(`
kamu : ${pemain}
komputer : ${computer}`);
hasil = "Menang";
} else if (pemain === "orang" && computer === "semut") {
    alert(`
kamu : ${pemain}
komputer : ${computer}`);
hasil = "Menang";
} else if (pemain === "semut" && computer === "gajah") {
    alert(`
kamu : ${pemain}
komputer : ${computer}`);
hasil = "Menang";
} else {
    alert(`
kamu : ${pemain}
komputer : ${computer}`);
hasil = "Kalah";
}
alert("Hasil : " + hasil);