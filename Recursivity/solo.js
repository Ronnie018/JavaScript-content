function count(min, max){
    if (min<=max){
        console.log(min);
        console.log(max);
        console.log("''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''");
        count(++min, max)
    }
}

function factorial(num){
    if (num === 1){
        return 1;
    }
    return num*factorial(num-1);
}
const jooj = factorial(500)
console.log(jooj);