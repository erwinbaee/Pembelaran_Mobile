for(var y = 1; y < 10; y++) {
    for(var x = 1; x <10; x++) {
         if(y == x || x + y == 10) {
             document.write(' * ')
         } else {
             document.write(' - ')
         }
        }
        document.write(`<br>`)
    }