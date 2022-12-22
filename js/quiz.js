function bienvenidx (name){
    alert("bienvenidx" + " " + name);
}
let ingresoNombre = prompt("Ingrese su nombre");
while (ingresoNombre == "") {
    ingresoNombre=prompt("Debe ingresar su nombre para continuar");
    
}
bienvenidx(ingresoNombre);
function verificarRespuestas() {
    let total= 3; 
    let puntos= 0;
    let quiz = document.forms["triviaForm"];
    let respuestas = ["a", "b", "a"];
    for(i=1; i<= total; i++){
        if(quiz["p" + i].value === null || quiz["p" + i].value === ""){
            alert("Por favor responde la pregunta" + " " + i);
            return false;
        } else{
            if(quiz["p" + i].value === respuestas[i - 1]){
                puntos++;
            }
        }
    }
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = 'Obtuviste ' +" " + puntos + " " + 'de' +" "+ total +" "+ 'puntos';

    return false;
}