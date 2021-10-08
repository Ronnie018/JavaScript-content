function primos(num){
    return(conta(num))
}
function conta(num){
    let cont = 0
    for (let c = 0; c < num; c++){
        if (num%c===0){
            cont++
        }
    }
    return verifica(cont)
}
function verifica(cont){
    if (cont > 2){
        return false ;
    }
    return true;
}

const c = primos(7)
console.log(c);