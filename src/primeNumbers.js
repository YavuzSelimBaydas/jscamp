function primeNumbers() {
    let sayac=0;
    for (let i = 2; i < 1000; i++) {
        for (let j =1; j <= i; j++) {
            if (i % j == 0) {
               sayac ++;
            }
            
        }
        if (sayac == 2) {
            console.log(i)
        }else sayac = 0;
    }
}
primeNumbers()