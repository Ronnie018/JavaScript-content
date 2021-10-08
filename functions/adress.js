function address(rua, cidade, CEP){
    return {
        rua,
        cidade,
        CEP,
        exibirEndereco: function(){
            console.log(
            `rua: ${rua}, cidade: ${cidade}, estado: ${CEP}`);
        },
    }
}

const endereco = address("road", "Sâo Paulo", "00000-000")

endereco.exibirEndereco()