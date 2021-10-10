let images;
let quantidade;
let slider;
let actual;
_init()



function _init(){
    console.log("inicializado...");
    quantidade = 4
    console.log("%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%");
    load()
    slider = document.getElementById("slider")
    actual = 0
    console.log("%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%");
    setInterval(setImage, 3000)
}

function load(){
    console.log("carregando dependências...");
    images = []

    for (c = 0; c < quantidade; c++){
        let image = `./Images/img${c}.png`
        images[c] = image
        console.log("image", image);
        console.log("carregando imagens...", images[c]);

    }
    console.log("imagens carregadas: ", images);
    }
    
function setImage(){
    if(actual > images.length-1){
        actual = 0
    }
    console.log("atribuindo imagem: ", images[actual], "á", slider)
    slider.style.backgroundImage = `url(${images[actual]})`
    console.log("imagem atribuida.");
    actual++
}