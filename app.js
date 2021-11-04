const pi = document.querySelector('#piedra');
const pa = document.querySelector('#papel');
const ti = document.querySelector('#tijeras');
const opcion = document.querySelector('#opcion');
const resultadoo = document.querySelector('#resu');
const miSeleccion = document.querySelector('#seleccion');

const partidasJugadas = document.querySelector('#partidas');
const der = document.querySelector('#derrotas');
const em = document.querySelector('#empates');
const vic = document.querySelector('#victorias');

let perdidas = 0;
let empates = 0;
let victorias = 0;
let partidas = 0;

pi.addEventListener('click' , piedraa);
pa.addEventListener('click', papeel);
ti.addEventListener('click', tijeraa);


function piedraa(){
    const randomm = random();
    opcionOponente(randomm);
    miOpcion('Piedra');
    if(randomm === 'piedra' ){
        resultado('Empate');
        marcador('e');
        return;
    }
    if(randomm === 'papel'){
        resultado('Perdiste');
        marcador('pi');
        return;
    }
    if(randomm === 'tijera'){
        resultado('Ganaste');
        marcador('ga');
        return;
    }
    
}

function papeel(){
    const randomm = random();
    opcionOponente(randomm);
    miOpcion('Papel');
    if(randomm === 'piedra' ){
        resultado('Ganaste');
        marcador('ga');
        return;
    }
    if(randomm === 'papel'){
        resultado('Empate');
        marcador('e');
        return;
    }
    if(randomm === 'tijera'){
        resultado('Perdiste');
        marcador('pi');
        return;
    }
   
}

function tijeraa(){
    const randomm = random();
    opcionOponente(randomm);
    miOpcion('Tijera');
    if(randomm === 'piedra' ){
        resultado('Perdiste');
        marcador('pi');
        return;
    }
    if(randomm === 'papel'){
        resultado('Ganaste');
        marcador('ga');
        return;
    }
    if(randomm === 'tijera'){
        resultado('Empate');
        marcador('e');
        return;
    }
   
}

function marcador(e){
 
    LimpiarPartidas();
    setTimeout(() => {
        if(e === 'e'){
            empates = empates + 1;
            limpiarEmpates();
            const html = document.createElement('u');
            html.textContent = `${empates}`
            em.appendChild(html);
         
            return;
        }
        else if(e === 'pi'){
            perdidas++;
            limpiarDerrotas();
            const html = document.createElement('u');
            html.textContent = `${perdidas}`
            der.appendChild(html);
         
            if(perdidas === 5){
                setTimeout(() => {
                    alert('Juego finalizado: Haz Perdido :(')
                    location.reload();
                }, 300);
            }
            return;
        }
        else if (e === 'ga'){
            victorias++;
            limpiarVictorias();
            const html = document.createElement('u');
            html.textContent = `${victorias}`
            vic.appendChild(html);
          
            if(victorias === 5){
                setTimeout(() => {
                   alert('Juego finalizado: Haz ganado :]');
                    location.reload();
                }, 300);
            }
            return;
        }
    }, 2500);    


    if(e.length > 0) {
        partidas++;
        LimpiarPartidas();
        const html = document.createElement('p');
        html.textContent = `${partidas}`
        partidasJugadas.appendChild(html);

    }
}


function resultado(res){
    limpiarResultado();
    setTimeout(() => {
        
    const r = document.createElement('u');
    r.innerHTML = `<h6 class="animate__animated animate__rubberBand animate__slow">${res}</h6>`;
    resultadoo.appendChild(r);

    }, 2000);


}

function miOpcion(opc){
    limpiarMiSeleccion();
    const r = document.createElement('p');
    r.innerHTML = `<h3 class="animate__animated animate__jackInTheBox">${opc.toUpperCase()}</h3>`;
    miSeleccion.appendChild(r);
}

function opcionOponente(option){

    setTimeout(() => {
        limpiarOpcion();
        const r = document.createElement('p');
        r.innerHTML = `<h3 class="animate__animated animate__rubberBand">${option.toUpperCase()}</h3>`;
        opcion.appendChild(r);
    }, 1000);
        
}


function limpiarVictorias(){
    while(vic.firstChild){
        vic.removeChild(vic.firstChild);
    }


}
function limpiarDerrotas(){
    while(der.firstChild){
        der.removeChild(der.firstChild);
    }
}
function limpiarEmpates(){
    while(em.firstChild){
        em.removeChild(em.firstChild);
    }
}

function limpiarResultado(){
    while(resultadoo.firstChild){
        resultadoo.removeChild(resultadoo.firstChild);
    }
}

function limpiarMiSeleccion(){
    while(miSeleccion.firstChild){
        miSeleccion.removeChild(miSeleccion.firstChild);
    }
}

function limpiarOpcion(){
    while(opcion.firstChild){
        opcion.removeChild(opcion.firstChild);
    }
}

function LimpiarPartidas(){
    while(partidasJugadas.firstChild){
        partidasJugadas.removeChild(partidasJugadas.firstChild);
    }
}


 function random (){

        const numero = Math.floor(Math.random() * 3);
        switch (numero) {
            case 0:
                return 'piedra';
                break;
            case 1:
                return 'papel';
                break;
            case 2:
                return 'tijera';
                break;
        
            default:
                break;
            }

}

