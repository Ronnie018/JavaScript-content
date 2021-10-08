function VerificaObjeto(obj){
    if(typeof obj !== "object"){
        console.log("não é um objeto");
        return
    }
    for (valor in obj){
        if (typeof(obj[valor]) === "string"){
            console.log(obj[valor], "é string");
            continue
        }
        console.log(obj[valor], "não é string");
}
}

const objeto = {
    nome : "ronnie",
    idade: 55,
    sobrenome: "brito",
}

VerificaObjeto(objeto)