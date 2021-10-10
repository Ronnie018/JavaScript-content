document.getElementById("dropmenu").addEventListener("click", setSelect)

function setSelect(){
    const MENU = document.getElementById("dropmenu-open")
    if (MENU.hasAttribute("class")){
        MENU.removeAttribute("class")
        return
    }
    MENU.setAttribute("class", "opened")
    return
}