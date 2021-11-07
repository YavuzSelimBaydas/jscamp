function perfectNumber(i) {
    for (let i = 0; i < 1000; i++) {
        let toplam = 0;
        for (let j = 0; j < i; j++) {
            if (i % j == 0) {
                toplam += j;
            }
            
        }
        if (toplam == i) {
            console.log(i)
        }
    }
}

perfectNumber()
