
document.getElementById("btn__iniciosesion").addEventListener("click", iniciarSesion);
document.getElementById("btn__registro").addEventListener("click", registro);
window.addEventListener("resize", deslizar);


let form__login = document.querySelector(".form__login");
let form__registro = document.querySelector(".form__registro");
let contenedor__form = document.querySelector(".contenedor__form");
let login__caja = document.querySelector(".login__caja");
let registro__enter = document.querySelector(".registro__enter");
let login__enter = document.querySelector(".login__enter");

    

function deslizar(){

    if (window.innerWidth > 850){
        registro__enter.style.display = "block";
        login__enter.style.display = "block";
    }else{
        registro__enter.style.display = "block";
        registro__enter.style.opacity = "1";
        login__enter.style.display = "none";
        form__login.style.display = "block";
        contenedor__form.style.left = "0px";
        form__registro.style.display = "none";   
    }
}

deslizar();


    function iniciarSesion(){
        if (window.innerWidth > 850){
            form__login.style.display = "block";
            contenedor__form.style.left = "10px";
            form__registro.style.display = "none";
            registro__enter.style.opacity = "1";
            login__caja.style.opacity = "0";
        }else{
            form__login.style.display = "block";
            contenedor__form.style.left = "0px";
            form__registro.style.display = "none";
            registro__enter.style.display = "block";
            login__enter.style.display = "none";
        }
    }

    function registro(){
        if (window.innerWidth > 850){
            form__registro.style.display = "block";
            contenedor__form.style.left = "410px";
            form__login.style.display = "none";
            registro__enter.style.opacity = "0";
            login__enter.style.opacity = "1";
        }else{
            form__registro.style.display = "block";
            contenedor__form.style.left = "0px";
            form__login.style.display = "none";
            registro__enter.style.display = "none";
            login__enter.style.display = "block";
            login__enter.style.opacity = "1";
        }
}

//ALMACENAMIENTO DE DATOS//

class registroPage {
    constructor(nombreCompleto, emailCliente, nuevoUsuario, contraseña) {
      this.nombreCompleto = nombreCompleto;
      this.emailCliente = emailCliente;
      this.nuevoUsuario = nuevoUsuario;
      this.contraseña = contraseña;
    }
  }
  
  const registros = [];
  
  if (localStorage.getItem('registros')) {
    let registro = JSON.parse(localStorage.getItem('registros'));
     registros.push(...registro); 
    
    for (let i = 0; i < registro.length; i++) {
      registros.push(registro[i]);
    }
}

const formregistro = document.getElementById('form__registro');

form__registro.addEventListener('submit', (e) => {
  e.preventDefault();
  usuarioNuevo();
});

function usuarioNuevo() {
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const usuario = document.getElementById('usuario').value;
    const contraseña = document.getElementById('contraseña').value;
    const usuarioNuevo = new registroPage (nombre, email, usuario, contraseña);
    registros.push(usuarioNuevo);
    //Agrego al LocalStorage:
    localStorage.setItem('registros', JSON.stringify(registros));
    form__registro.reset();
  }

  const botonEntrar = document.getElementById("btn__entrar");

  botonEntrar.addEventListener("click", () => {
          document.location.href = "http://127.0.0.1:5500/vistas/trivia.html";
  });

  const botonRegistro = document.getElementById("btn__registrate");

  botonRegistro.addEventListener("click",() => {
         document.location.href = "http://127.0.0.1:5500/vistas/trivia.html";
  });

