let teste = [];
teste[0] = "teste";
teste[2] = "teste";
console.log(teste);
console.log("###############################################################");

teste = clear(teste)

console.log("###############################################################");

console.log(teste);
/*This function clear empty spaces in arrays*/
function clear(array){
    let array2 = []
    for (valor in array){
        if (array[valor] === null){
            console.log(array[valor], "é null");
            continue;
        }
        array2.push(array[valor]);
        console.log(array[valor], "foi adicionado");
    }
    return array2
}