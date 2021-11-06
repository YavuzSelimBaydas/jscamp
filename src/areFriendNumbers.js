function areFriendNumbers(number1, number2) {
    let totalNumber1 = 0;
    let totalNumber2 = 0;
     for (let i = 0; i< number1; i++) {
       if (number1 % i == 0) {
           totalNumber1 += i;
       }
    } 
    for (let i = 0; i < number2; i++) {
        if (number2 % i == 0) {
            totalNumber2 += i;
        }
        
    }
    if (number1 == totalNumber2 && number2 == totalNumber1) {
        console.log(number1 + " and " + number2 + " are friend numbers.")
    }else{
        console.log(number1 + " and " + number2 + " are not friend numbers.")
    }
 }

areFriendNumbers(220,284)