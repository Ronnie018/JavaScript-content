const BUTTON_START = document.getElementById("start").addEventListener("click", start)
const BUTTON_STOP = document.getElementById("stop").addEventListener("click", stop)
function start(){
    time = setInterval(changeColor, 1500)
}
function stop(){
    clearInterval(time)
}
function changeColor(){
    const BOX = document.getElementById("obj")
    const BODY = document.getElementById("background")
    const TONE = Math.ceil(Math.random()*255)
    const RGB = `rgb(${TONE},${TONE},${TONE})`
    BOX.style.backgroundColor = RGB
}