const absolute = document.getElementsByClassName("absolute")
absolute[1].addEventListener("click", changePosition)


function changePosition(){
    if (absolute[1].style.right){
        console.log("tem");
        absolute[1].style.removeProperty("right")
        return
    }
    absolute[1].style.backgroundColor = "green"
    absolute[1].style.right = "0"
    return

}