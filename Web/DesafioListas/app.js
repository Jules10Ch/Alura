//1. Crea una lista vacía llamada "listaGenerica".
let listaGenerica = []; 

//2. Crea una lista de lenguajes de programación llamada "lenguagesDeProgramacion con los siguientes elementos: 'JavaScript', 'C', 'C++', 'Kotlin' y 'Python'.
let lenguajesDeProgramacion = ['JavaScript','C','C++','Kotlin','Phyton']; 

//3. Agrega a la lista "lenguagesDeProgramacion los siguientes elementos: 'Java', 'Ruby' y 'GoLang'.
lenguajesDeProgramacion.push('Java','Ruby','GoLang');

//4. Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion.
let cantidadElementos = lenguajesDeProgramacion.length;
function ordenAscendente(){
  for(let i=0; i<cantidadElementos; i++){
    console.log(lenguajesDeProgramacion[i]);
  }
}
console.log("Orden Ascendente: ");
ordenAscendente(); 
 
//5. Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion en orden inverso.
function ordenDescendente(){
  for(let i=cantidadElementos-1; i>=0; i--){
    console.log(lenguajesDeProgramacion[i]);
  }
}
console.log("Orden Descendente: ");
ordenDescendente();

//6. Crea una función que calcule el promedio de los elementos en una lista de números.
let numeros = [5,6,8,10,6,4];
let cantidadNumeros = numeros.length;

function promedio(){

    for(let i=0; i<cantidadNumeros; i++){
        console.log(`Numero ${i+1} = ${numeros[i]}`);
       
    }

let suma = sumaTotal(); //llama a la funcion sumaTotal()
let promedio = suma/cantidadNumeros;
console.log(`Promedio = ${promedio}`);
}

//8. Crea una función que devuelva la suma de todos los elementos en una lista.
function sumaTotal(){
  let suma = 0;
    for(let i=0; i<cantidadNumeros; i++){
        suma = parseInt(suma + numeros[i]);

    }
console.log(`Suma = ${suma}`);

return suma; //devuelve el valor de la suma para usarse en funcion promedio
}
promedio(); 

//7. Crea una función que muestre en la consola el número más grande y el número más pequeño en una lista.
function numeroMayorOMenor(){
    let mayor = numeros[0];
    let menor = numeros[0];

    for(let i=0; i<cantidadNumeros; i++){
        if (numeros[i]>=mayor){
            mayor = numeros[i];
        }
        if (numeros[i]<=menor){
          menor = numeros[i];
        }  
       
    }
console.log(`Numero mayor = ${mayor}`);
console.log(`Numero menor = ${menor}`);
}
numeroMayorOMenor();

//9. Crea una función que devuelva la posición en la lista donde se encuentra un elemento pasado como parámetro, o -1 si no existe en la lista.
function buscarElemento(elemento) {
    for (let i = 0; i < cantidadNumeros; i++) {
        if (numeros[i] === elemento) {
            return i; // Devuelve el índice si encuentra el elemento
        }
    }
    return -1; // Devuelve -1 si el elemento no existe
}

let elementoBuscado = 10;
let posicion = buscarElemento(elementoBuscado);
console.log(`El elemento ${elementoBuscado} está en la posición: ${posicion}`);

//10. Crea una función que reciba dos listas de números del mismo tamaño y devuelva una nueva lista con la suma de los elementos uno a uno.
function sumarListas(lista1,lista2){
    if(lista1.length != lista2.length){
       console.log("Las listas tienen distinto tamaño");
       return null;
    }
    let listaSuma = [];
   
    for (let i = 0; i < lista1.length; i++) {
       listaSuma.push(lista1[i]+lista2[i]);
       
    }
    return listaSuma;
   
   }
   
   let numeros1 = [1,2,3,4];
   let numeros2 = [10,20,30,40];
   
   let resultado = sumarListas(numeros1,numeros2);
   console.log(`Arreglo resultante de las listas [${numeros1}] + [${numeros2}] = [${resultado}]`);

   //11. Crea una función que reciba una lista de números y devuelva una nueva lista con el cuadrado de cada número.
   function cuadradoDeLista(lista){
    let listaAlCuadrado = [];
    for (let i = 0; i < lista.length; i++) {
        listaAlCuadrado.push(lista[i]*lista[i]);
        
     }
     return listaAlCuadrado;
   }

   arreglo = [1,2,3];
   let alCuadrado = cuadradoDeLista(arreglo);
   console.log(`Arreglo resultante de cada valor de la lista [${arreglo}] al cuadrado = [${alCuadrado}]`);



