
let filas = 80;
let columnas = 80;
let lado = 20;
let fotografia = [];
generarTablero()
function generarTablero(){
    let html = "<table cellpadding=0 cellspacing=0 id ='tablero'>"
    for (let y = 0 ; y < filas; y++){
        html += "<tr>"
        for (let x=0; x < columnas; x++){
            html += `<td id= "celula-${x+"-" +y}" onmouseup="cambiarEstado(${x}, ${y})">`
            html += "</td>"
        }
        html += "</tr>"
    }

    html += "</table>"
    let contenedor = document.getElementById("contenedor-tablero")
    contenedor.innerHTML = html
    let tablero = document.getElementById("tablero")
    tablero.style.width = lado*columnas + "px"
    tablero.style.height = lado*filas + "px"
}
function cambiarEstado(x, y) {
    let celula = document.getElementById(`celula-${x + "-" + y}`)
    if (celula.style.background != "black") {
        celula.style.background = "black"
    } else {
            celula.style.background = ""
    }
}

function fotografiar() {
    fotografia = []
    for(let x=0; x < columnas; x++){
        fotografia.push([])
        for (let y =0; y <columnas; y++){
            let celula = document.getElementById(`celula-${x + "-" + y}`)
            fotografia[x][y] =celula.style.background =="black"
        }
        
    }
}
