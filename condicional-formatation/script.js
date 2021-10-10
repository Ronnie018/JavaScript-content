function formatation(){
    const TABLE = document.getElementById("table")
    let notas;
    for(let i=1; i<TABLE.rows.length; i++){
        let total = Number(TABLE.rows[i].cells[1].innerText) + Number(TABLE.rows[i].cells[2].innerText)
        TABLE.rows[i].cells[3].innerText = total
        TABLE.rows[i].cells[3].style.backgroundColor = Number(TABLE.rows[i].cells[3].innerText) < 50 ? "rgb(175,27, 27)" : "rgb(25,175,55)"
    }
}
formatation()