
let filas = 80;
let columnas = 80;
let lado = 20;

generarTablero()
function generarTablero(){
    let html = "<table cellpadding=0 cellspacing=0 id ='tablero'>"
    for (let f = 0 ; f < filas; f++){
        html += "<tr>"
        for (let c=0; c < columnas; c++){
            html += "<td>"
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