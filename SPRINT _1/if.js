var angka = prompt(`masukkan angka :`);
if( angka % 2 === 0 ) {
    alert(angka + ` adalah bilangan GENAP`);
    } else {
        alert(angka + ` adalah bilangan GANJIL`);
    }

    //bilangan ganjil dari 60 sampai 100

    for(i = 60; i <= 100; i++) {
        if(i % 2 != 0 ) {
            document.write(i + `<br>`)
        }
    }