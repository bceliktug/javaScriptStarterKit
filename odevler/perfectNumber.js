function isPerfect() {
    let perfectNumber = []
    for (let i = 0; i <= 1000; i++) {
        let toplam = 0;
        for (let j = 1; j < i; j++) {
            if (i % j == 0) {
                toplam += j
            }
        }
        if (toplam == i) {
            perfectNumber.push(i)
        }
    }
    console.log(perfectNumber)
}

isPerfect()