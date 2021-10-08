function media(notas){
    n = 0
    for (c in notas){
        n += notas[c]
    }
    const med = (n / notas.length).toFixed(2)

        if (med<59){
            console.log("f");
        }
        else if (med<69){
            console.log("d");
        }
        else if (med<79){
            console.log("c");
        }
        else if (med<89){
            console.log("b");
        }
        else if (med>89){
            console.log("a");
        }
    }

const nota = [90,100,80]
media(nota)
