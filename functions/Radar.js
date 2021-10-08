function verificaVelocidade(Vel){
    const Max = 70
    if (Vel <= Max){
        console.log("okay...");
    }
    else{
        console.log("voce está acima da velocidade!");
        let qtd = 0
        qtd += Vel - Max
        qtd = Math.floor(qtd / 5)
        if (qtd <= 12){
            console.log(`voce tomou ${qtd} pontos na carteira!`);
            return
        }else
            console.log("Sua carteira foi suspendida!")
    }
}

verificaVelocidade(136)