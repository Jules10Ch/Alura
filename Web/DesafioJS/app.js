let titulo = document.querySelector("h1");
titulo.innerHTML = "¡Hora del Desafío!";

function funcionConsola(){
    console.log("El boton fue clickado");
}

function funcionAlert(){
    alert("Yo amo JS");
}

function funcionPrompt(){
    let ciudad = prompt("Dime el nombre de una ciudad de Brasil");
    alert(`Estuve en ${ciudad} y me acorde de ti`);
}

function funcionSuma(){
    let n1 = parseInt(prompt("Dame el primer numero"));
    let n2 = parseInt(prompt("Dame el segundo numero"));
    resultado = n1 + n2;
    alert(`El resultado es ${resultado}`);
}