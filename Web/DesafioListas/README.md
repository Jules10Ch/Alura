# Desafío: Manipulación de Listas y Arrays

## Descripción
Colección de ejercicios prácticos enfocados en el dominio de arrays (listas) en JavaScript. Este proyecto implementa 11 funciones que demuestran operaciones fundamentales de programación: recorrido, búsqueda, transformación y análisis de datos en estructuras tipo array.

## Objetivo del Proyecto
Desarrollar habilidades fundamentales en:
- Manipulación de arrays
- Implementación de algoritmos de búsqueda y ordenamiento
- Uso de bucles `for` y estructuras condicionales
- Creación de funciones reutilizables
- Trabajo con parámetros y valores de retorno

## Tecnologías Utilizadas
- **JavaScript (ES6)**: Lógica de programación ejecutada en consola del navegador
- **HTML5**: Estructura mínima para carga del script

## Ejercicios Implementados

### 1. Declaración de Arrays
```javascript
let listaGenerica = [];
let lenguajesDeProgramacion = ['JavaScript','C','C++','Kotlin','Phyton'];
```
**Concepto:** Inicialización de arrays vacíos y con valores predefinidos.

---

### 2. Agregar Elementos a un Array
```javascript
lenguajesDeProgramacion.push('Java','Ruby','GoLang');
```
**Concepto:** Método `.push()` para añadir elementos al final del array.

---

### 3. Recorrido en Orden Ascendente
```javascript
function ordenAscendente(){
  for(let i=0; i<cantidadElementos; i++){
    console.log(lenguajesDeProgramacion[i]);
  }
}
```
**Conceptos aplicados:**
- Bucle `for` con índice incremental
- Acceso a elementos por índice `array[i]`
- Uso de `.length` para obtener tamaño del array

---

### 4. Recorrido en Orden Inverso
```javascript
function ordenDescendente(){
  for(let i=cantidadElementos-1; i>=0; i--){
    console.log(lenguajesDeProgramacion[i]);
  }
}
```
**Conceptos aplicados:**
- Bucle `for` decremental (de n-1 hasta 0)
- Lógica inversa de iteración

---

### 5. Cálculo de Promedio
```javascript
function promedio(){
    let suma = sumaTotal();
    let promedio = suma/cantidadNumeros;
    console.log(`Promedio = ${promedio}`);
}
```
**Conceptos aplicados:**
- Llamada a función auxiliar (`sumaTotal()`)
- Operaciones aritméticas
- Template literals para formateo de salida
- Composición de funciones

---

### 6. Suma de Elementos
```javascript
function sumaTotal(){
  let suma = 0;
    for(let i=0; i<cantidadNumeros; i++){
        suma = parseInt(suma + numeros[i]);
    }
    return suma;
}
```
**Conceptos aplicados:**
- Acumulador inicializado en 0
- Iteración con suma acumulativa
- Uso de `return` para devolver valores
- Conversión con `parseInt()`

---

### 7. Búsqueda de Mayor y Menor
```javascript
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
```
**Conceptos aplicados:**
- Inicialización de variables con primer elemento
- Comparaciones condicionales (`>=`, `<=`)
- Actualización de valores máximo/mínimo
- Algoritmo de búsqueda lineal

---

### 8. Búsqueda de Elemento por Valor
```javascript
function buscarElemento(elemento) {
    for (let i = 0; i < cantidadNumeros; i++) {
        if (numeros[i] === elemento) {
            return i; // Devuelve índice si existe
        }
    }
    return -1; // Devuelve -1 si no existe
}
```
**Conceptos aplicados:**
- Función con parámetro
- Búsqueda secuencial
- Retorno temprano (`early return`)
- Convención de retornar `-1` para "no encontrado"
- Comparación estricta `===`

---

### 9. Suma de Dos Listas
```javascript
function sumarListas(lista1,lista2){
    if(lista1.length != lista2.length){
       return null;
    }
    let listaSuma = [];
    for (let i = 0; i < lista1.length; i++) {
       listaSuma.push(lista1[i]+lista2[i]);
    }
    return listaSuma;
}
```
**Conceptos aplicados:**
- Validación de precondiciones
- Función con múltiples parámetros
- Creación dinámica de arrays
- Operaciones paralelas entre arrays
- Manejo de casos edge (null return)

---

### 10. Transformación: Cuadrado de Elementos
```javascript
function cuadradoDeLista(lista){
    let listaAlCuadrado = [];
    for (let i = 0; i < lista.length; i++) {
        listaAlCuadrado.push(lista[i]*lista[i]);
    }
    return listaAlCuadrado;
}
```
**Conceptos aplicados:**
- Transformación de datos (mapping manual)
- Creación de nuevo array sin modificar el original
- Inmutabilidad de datos

---

## Estructura del Proyecto
```
DesafioListas/
├── index.html      # Estructura HTML básica
└── app.js          # 11 ejercicios de manipulación de arrays
```

## Ejecución
1. Abrir `index.html` en el navegador
2. Abrir la consola del navegador (F12)
3. Observar los resultados de cada función ejecutada

### Salida Esperada en Consola
```
Orden Ascendente:
JavaScript
C
C++
Kotlin
Phyton
Java
Ruby
GoLang

Orden Descendente:
GoLang
Ruby
Java
...

Promedio = 6.5
Numero mayor = 10
Numero menor = 4
El elemento 10 está en la posición: 3
Arreglo resultante de las listas [1,2,3,4] + [10,20,30,40] = [11,22,33,44]
```

## Conceptos de Programación Dominados

### Estructuras de Datos
- Arrays (declaración, inicialización, manipulación)
- Índices y acceso posicional

### Estructuras de Control
- Bucle `for` (ascendente y descendente)
- Condicionales `if/else`
- Operadores de comparación (`===`, `>=`, `<=`, `!=`)

### Funciones
- Declaración de funciones
- Parámetros y argumentos
- Valores de retorno (`return`)
- Funciones auxiliares

### Algoritmos Implementados
- **Recorrido**: Iteración completa de arrays
- **Búsqueda lineal**: Localización de elementos
- **Acumulación**: Suma de elementos
- **Comparación**: Búsqueda de máximo/mínimo
- **Transformación**: Aplicar operación a cada elemento
- **Validación**: Verificación de precondiciones

## Aprendizajes Clave
1. **Iteración de arrays**: Dominio del bucle `for` en ambas direcciones
2. **Algoritmos fundamentales**: Búsqueda, suma, máximo/mínimo
3. **Funciones puras**: Retorno de valores sin efectos secundarios
4. **Validación de datos**: Verificación de tamaños de arrays
5. **Debugging con consola**: Uso de `console.log()` para verificar resultados
6. **Código modular**: Separación de responsabilidades en funciones específicas

## Diferencia con Métodos Modernos de JavaScript
Este proyecto utiliza **bucles explícitos** (`for`) en lugar de métodos modernos de arrays como:
- `.map()` - equivalente a `cuadradoDeLista()`
- `.reduce()` - equivalente a `sumaTotal()`
- `.find()` - equivalente a `buscarElemento()`
- `.reverse()` - equivalente a `ordenDescendente()`

**Razón pedagógica:** Entender la lógica interna de estas operaciones antes de usar abstracciones de alto nivel.

---
**Proyecto desarrollado como parte del curso de Lógica de Programación con JavaScript - Alura**
