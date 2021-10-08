function multiples(num){
    lista = [[],[]];
    n = 3;
    while (true) {
        if (n <= num){
            lista[0].push(n);
            n += 3;
        }
        else { n = 5; break }
    }
    while (true) {
        if (n <= num){
            lista[1].push(n);
            n += 5;
        }
        else{   
                n = 0; 
                break
        }
    }
    for (element in lista){
        for (c in lista[element]){
            console.log(n);
            n += lista[element][c]
            console.log("lista", lista[element][c]);
        }
    }
    console.log(n);
}
multiples(10)