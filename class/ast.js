function asteriscos(val){
    for (c = 0; c <= val; c ++){
        let str = ''
        for (linha = 0; linha <= c; linha ++){
            str += "*"
        }
        console.log(str);
    }
}

asteriscos(10)