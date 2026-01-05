
let amigos = [];

function agregarAmigo(){

    
    let amigo = document.getElementById("amigo").value;

    if( amigo == "" ){
        alert("Por favor inserte un nombre");
    }else{
    amigos.push(amigo)
    console.log(amigos);
    limpiarCaja();
    actualizarLista();
    }
    
}



function limpiarCaja(){
    document.querySelector("#amigo").value = "";
    
}


function actualizarLista(){
    let lista = document.getElementById("listaAmigos");
    
    // Limpiar la lista antes de agregar nuevos elementos
    lista.innerHTML = "";
    
    // Recorrer el array y agregar cada amigo como un elemento <li>
    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement("li");
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
    
}

function sortearAmigo(){
    if (amigos.length === 0){
        alert("No hay amigos en la lista para sortear");
        return;
    }

    // Generar un indice aleatorio
    let indiceAleatorio = Math.floor(Math.random()*amigos.length);
    //Obtener el nombre sorteado
    let amigoSorteado = amigos[indiceAleatorio];
    //Mostrar el resultado
    document.getElementById("resultado").innerHTML = `El amigo sorteado es: <strong>${amigoSorteado}</strong>`;

}

