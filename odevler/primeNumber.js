    let result = true
function prime(...numbers) {
    console.log(numbers)
    for(let i=0; i<numbers.length;i++){
        for(let j=2; j<numbers[i];j++){
            if (numbers[i] % j ==0) {
                result = false;
                break;
            }
        }
        if(result){
            console.log(numbers[i] + "is Prime")
        }
        else{
            console.log(numbers[i] + "is not a Prime")
            result = true;    
        }
    }
}

prime(1,2,3,4,5,6,7,8,9)