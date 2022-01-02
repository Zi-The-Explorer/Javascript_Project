let arrPenumpang = [];
let tambahPenumpang = function (namaPenumpang, penumpang) {
    // Jika angkot kosong 
    if (arrPenumpang.length === 0 ) {
        
        // Tambah penumpang di awal array
        arrPenumpang.push(namaPenumpang);
        // kembalikan isi array & keluar dari function
        return arrPenumpang;
    }else {
        
        // Telusuri seluruh kursi dari awal
        for (let i = 0; i < arrPenumpang.length; i++) {
            
            // Jika ada kursi kosong
            if (arrPenumpang[i] === undefined) {
                
                // tambah penumpang di kursi tersebut
                arrPenumpang[i] = namaPenumpang
                // kembalikan isi array & keluar dari function 
                return arrPenumpang;

            }
            // Jika sudah ada nama yang sama 
            else if (arrPenumpang[i] === namaPenumpang) {
                
                // tampilkan pesan kesalahan 
                console.log(`${namaPenumpang} Sudah ada didalam angkot`);
                // Kembalikan isi array & dan keluar dari function 
                return arrPenumpang;

            }

            // Jika seluruh kursi terisi 
            else if( i === arrPenumpang.length - 1){

                // Tambah penumpang di akhir array
                arrPenumpang.push(namaPenumpang)
                // kembalikan isi array & keluar dari function
                return arrPenumpang;

            }

        }

    }
}
let hapusPenumpang = function (namaPenumpang, penumpang) {
    if ( arrPenumpang.length === 0 ) {
        console.log("Angkot Masih Kosong");
        return arrPenumpang;
    } else {
        for (let i = 0; i < arrPenumpang.length; i++) {
            if (arrPenumpang[i] === namaPenumpang) {
                console.log(`Penumpang dengan nama ${namaPenumpang} Telah Turun, Kursi kosong`);
                arrPenumpang[i] = undefined;
                return arrPenumpang
            } else if (i === arrPenumpang.length - 1) {
                console.log(`${namaPenumpang} Tidak Ada didalam angkot`);
                return arrPenumpang;
            }
        }
    }
}


















