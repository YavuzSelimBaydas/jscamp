function isPrime(x) {
    if (x==0 || x==1) {
        return false;
    }else{
        for (let i = 2; i < x ; i++){
            if (x%i == 0) {
                return false;
            }
    }
}
return true
}
function findPrime(...numbers) {
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i]<0){
            console.log(numbers[i] + " is invalid number.")
        }
        else if (isPrime(numbers[i])) {
            console.log(numbers[i] + " is Prime Number.")
        }else{
            console.log(numbers[i] + " is not Prime Number.")
        }
    }
}

findPrime(-5,0,1,2,3,6,9,765,899)
