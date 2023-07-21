
let filas = 80;
let columnas = 80;
let lado = 20;
let reproducir = false;
let fotografia = [];

document.addEventListener("keydown", (e) => {
    // For keyboard control
    e.preventDefault();
    switch (e.keyCode) {
      case 39:
        siguienteEstado();
        break;
      case 32:
        intercambiarReproduccion();
        break;
      case 8:
        limpiar();
        break;
      default:
        break;
    }
  });
  setInterval(()=>{
    if(reproducir){
        siguienteEstado()
    }
  },200);
function intercambiarReproduccion() {
    reproducir = !reproducir
    if (reproducir) {
        document.body.style.background = "white"
        document.getElementById("btn1").innerHTML = `<i class="fas fa-pause"></i>`
    } else {
        document.body.style.background = "#f0f0ff"
        document.getElementById("btn1").innerHTML = `<i class="fas fa-play"></i>`
    }
}

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
function limpiar() {
    for (let x = 0; x < columnas; x++) {
        for (let y = 0; y < filas; y++) {
            let celula = document.getElementById(`celula-${x + "-" + y}`)
            celula.style.background = ""
        }
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
function contarVivas(x, y){
    let vivas = 0
    for (let i=-1; i<=1; i++){
        for(let j=-1; j<=1;j++){
            if(i==0 && j==0)
                continue
            try{
                if(fotografia[x+i][y+j])
                    vivas++
                
            }catch(e){ }
            if(vivas>3){
                return vivas
            }
        }
    }
    return vivas
}
function siguienteEstado(){
    fotografiar()
    for(let x=0; x < columnas; x++){
        for (let y =0; y <columnas; y++){
            let vivas = contarVivas(x,y)
            let celula = document.getElementById(`celula-${x + "-" + y}`)
            if(fotografia[x][y]){
                if(vivas<2 || vivas >3)
                    //muere por sobrepoblacion
                    celula.style.background = ""
            }else{
                if(vivas ==3)
                    celula.style.background ="black"
            }
        }
        
    }
}

