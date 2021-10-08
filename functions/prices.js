const cadeiras= {
    cadeira0: ["generica", 20],
    cadeira1: ["normal", 260],
    cadeira2: ["mais boazinha", 750],
    cadeira3: ["mais cara", 1080],

}
function filter(min, max){
    for (obj in cadeiras){
        for(c in cadeiras[obj]){
            console.log("++++++++++++++++++====++++++++++++++++++");
            if (cadeiras[obj][c] >= min && cadeiras[obj][c] <= max ){
                console.log(cadeiras[obj][c]);
            }
        }
    }
}
const filtrar=filter(250, 750)