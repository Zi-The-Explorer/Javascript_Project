let nama;
let kelas;

let nilai;
let grade;
let keterangan;

nama = prompt("Input nama kamu?");
kelas = prompt("Kamu kelas berapa?");
nilai = prompt("input Nilai");

if (nilai > 80) {
    grade = "A"
} else if (nilai > 70) {
    grade = "B"
} else if (nilai > 60) {
    grade = "C"
} else if (nilai > 50) {
    grade = "D"
} else {
    grade = "E"
}

switch (grade) {
    case "A":
        result("Bagus", "Lulus");
        break;
    case "B":
         result("Baik", "Lulus");
        break;
    case "C":
         result("Cukup", "Lulus");
        break;
    case "D":
         result("Kurang", "Remedial");
        break;
    default:
         result("Buruk", "Tidak Lulus");
        break;
}

function result(reward, keterangan) {
     alert(reward);
     document.writeln(`Nama : ${nama}`);
     document.writeln("<br>");
     document.writeln(`Kelas : ${kelas}`);
     document.writeln("<br>");
     document.writeln(`Nilai : ${nilai}`);
     document.writeln("<br>");
     document.writeln(`Keterangan : ${keterangan}`);
}