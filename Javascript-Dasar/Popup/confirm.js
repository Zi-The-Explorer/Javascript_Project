const masuk =  confirm("Anda yakin mau masuk?");

if (masuk) {
    const nama = prompt("Siapa Nama Kamu?");
    alert(`Hello ${nama}`);
} else {
    alert("Bye, Terimakasih");
}