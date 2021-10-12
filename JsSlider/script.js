let images;
let actual;
let max;
let slider;

function _init(){
    max = 4;
    actual = 1;
    load();
    put();
}
function load(){
    console.log("loading images...");
    images = [];
    for (c=0;c<max;c++){
        image = new Image();
        image = `images/img${c}.png`;
        images[c] = image;
    }
}
function put(){
    console.log("setting");
    slider = document.getElementById("slider");
    setInterval(setimage, 2000);
}
function setimage(){
    if (actual >= max){
        actual = 0;
    }
    slider.style.backgroundImage = `url(${images[actual]})`;
    actual ++;
}
_init();