function isPrime(){
    let primeNumbers = [];
    for(let i=2; i<=1000;i++){
        let prime = true;
        for(let j=2;j<i;j++){
            if(i%j ===0){
                prime = false;
                break;
            }
        }
        if(prime == true){
            primeNumbers.push(i)
        }
    }
    console.log(primeNumbers)
}

isPrime();