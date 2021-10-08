function criaEndereco(rua, numero, cidade, cep){
    return {
        rua,
        numero,
        cidade,
        cep,
    }
}

const end1 = criaEndereco("minharua", "37", "São Paulo", "00000-000")
const end2 = criaEndereco("minharua", "37", "São Paulo", "00000-000")

const igual = function(){
    if (end1.cep === end2.cep){
        console.log("yess");
        return
    }
    console.log("noo");
}
igual()