let last = document.getElementById("last")
last.addEventListener("touchmove", teste)

function teste(){
    console.log("scrolling");
    let scroller = document.getElementById("el-padre")
    scroller.scrollBy(-1500, 0)
}