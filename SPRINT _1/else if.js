var nama = prompt("Masukan Nama Kamu");
        var mahasiswa = prompt("Masukan Nilai Yang Kamu Dapatkan?", 0);
        
        if(mahasiswa > 70 ) {
            document.write("<h2>Berikut Hasil Yang Kamu Dapatkan : </h2>");
        } else if (mahasiswa < 70) {
          document.write("<h2>Berikut Hasil Yang Kamu Dapatkan : </h2>");
        }

        document.write("<p>" + "Nama : " + nama + "</p>");
        document.write("<p>" + "Nilai : " + mahasiswa + "</p>");
        document.write("<p>" + "Keterangan :" + `${mahasiswa >=70 ? ' Lulus' : ' Tidak Lulus'}` + "</p>");
    