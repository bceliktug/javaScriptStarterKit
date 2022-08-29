function isFriends(number1, number2){
    let sum1 = 1;
    let sum2 = 1;
    for(let i=2;i<number1;i++){
        if(number1 % i == 0){
            sum1 = sum1 + i;
        }
    }
    for(let j=2; j<number2;j++){
        if(number2 % j == 0){
            sum2 = sum2 + j;
        }
    }
    console.log(sum1)
    console.log(sum2)
    if(sum1 == number2 && sum2 == number1){
        console.log(number1 + " and " + number2 + 
        " are friends number." )
    } 
    else{
        console.log("They are not friends number")
    }
}

isFriends(110,152)