let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;


function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento(){
    let numeroDeUsusario = parseInt(document.getElementById('valorUsuario').value);
    if (numeroSecreto === numeroDeUsusario){
        asignarTextoElemento('p', `Acertaste el numero secreto en ${intentos} ${(intentos === 1 ? 'vez' : 'veces')}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if(numeroSecreto > numeroDeUsusario){
            asignarTextoElemento('p', 'El numero secreto es mayor');
        } else {            asignarTextoElemento('p', 'El numero es menor');
        };
        intentos++;
        limpiarCaja();
    };
    return;
}

function limpiarCaja(){
    document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto() {
    let numerosGenerados = Math.floor(Math.random()*numeroMaximo)+1;

    if(listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p', 'Ya se sortearon todos los numeros');
    }else{
        if(listaNumerosSorteados.includes(numerosGenerados)){
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numerosGenerados)
            return numerosGenerados;
        }
    }
    
    
}

function condicionesIniciales(){
    asignarTextoElemento('h1', 'Juego del numero secreto');
    asignarTextoElemento('p', `Elije un numero entre 1 y ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1
}

function reiniciarJuego(){
    //limpiar caja
    limpiarCaja();
    //indicar mensaje de intervalos de numeros
    //generar el numero aleatorio
    //reiniciar intentos
    condicionesIniciales();
    //deshabilitar el boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
}

condicionesIniciales();

