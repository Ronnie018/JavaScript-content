function FizzBuzz(n){
    if (Number(n)){
    let str = calcula(n)
    console.log(str);
    }else
    console.log("não é número")
}

function calcula(num){
    if (num%3 === 0){
        if (num%5 === 0){
            return "FizzBuzz"
        }
        return "Fizz"
    }
    else if (num%5 === 0){
        return "Buzz"
    }
    return num
}

FizzBuzz(5)