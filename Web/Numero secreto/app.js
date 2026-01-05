/*alert('Bienvenido al juego del número secreto');

// Agrega un console.log para verificar el valor de "intento" después de la entrada del usuario
let intento = prompt('Elige un número entre 1 y 10');
console.log('Valor de intento:', intento);

let numeroSecreto = 4;

// Agrega un console.log para verificar la comparación entre "intento" y "numeroSecreto"
console.log('Resultado de la comparación:', intento == numeroSecreto);

if (intento == numeroSecreto) {
    alert('Adivinaste');
} else {
    // Agrega un console.log para verificar el valor de "numeroSecreto" cuando el jugador se equivoca
    console.log('Valor del número secreto:', numeroSecreto);
    alert('El número secreto era ' + numeroSecreto);
}*/

//Variables
let numeroMaximoPosible;
numeroMaximoPosible = parseInt(prompt("Indica cual sera el numero maximo para jugar"));
let numeroSecreto = Math.floor(Math.random()*numeroMaximoPosible)+1;
let numeroUsuario = 0;
let intentos = 1;
//let palabraVeces = 'vez';
let maximosIntentos = 6;
console.log(numeroSecreto)

while (numeroUsuario != numeroSecreto) {
    
    numeroUsuario = parseInt(prompt(`Adivina un número entre 1 y ${numeroMaximoPosible}  por favor:`));

    console.log(typeof(numeroUsuario));
    if (numeroUsuario == numeroSecreto) {
        //Acertamos, fue verdadera la condición
        
        alert(`Acertaste, el número es: ${numeroUsuario}. Lo hiciste en ${intentos} ${intentos == 1 ? 'vez' : 'veces' }`);
    } else {
        if (numeroUsuario > numeroSecreto) {
            alert('El número secreto es menor');
        } else {
            alert('El número secreto es mayor');
        }
        //Incrementamos el contador cuando no acierta
        
        intentos++;

        //palabraVeces = 'veces';
        if (intentos > maximosIntentos) {
            alert(`Llegaste al número máximo de ${maximosIntentos} intentos`);
            break;
        }
        //La condición no se cumplió
        
    }
}