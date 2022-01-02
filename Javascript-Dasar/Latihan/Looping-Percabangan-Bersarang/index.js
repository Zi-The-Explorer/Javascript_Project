let s = '';

for (let j = 1; j <= 10; j++) {
    if (j === 4 || j === 1) {
        for (i = 1; i <= 15; i++) {
            s += "*"
        }
    }
    s += "*\n"
}



console.info(s);