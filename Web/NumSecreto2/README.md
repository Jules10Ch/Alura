# Juego del Número Secreto

## Descripción
Aplicación web interactiva que implementa un juego de adivinanza numérica. El usuario debe descubrir un número aleatorio generado por el sistema, recibiendo retroalimentación en tiempo real sobre si debe buscar un número mayor o menor.

## Características Técnicas

### Funcionalidades Principales
- **Generación aleatoria de números** del 1 al 10
- **Sistema de pistas dinámicas** que guía al usuario hacia la respuesta
- **Contador de intentos** con manejo de singular/plural
- **Validación de números repetidos** mediante un sistema de historial
- **Límite de partidas** que previene la repetición de todos los números posibles
- **Interfaz responsiva** con feedback visual inmediato

### Tecnologías Utilizadas
- **HTML5**: Estructura semántica del documento
- **CSS3**: Diseño con gradientes, flexbox y efectos visuales
- **JavaScript**: Lógica de negocio y manipulación del DOM

## Conceptos de Programación Implementados

### Lógica de Programación
- **Variables y tipos de datos**: Manejo de números, strings y arrays
- **Estructuras condicionales**: `if/else` para validación de intentos
- **Operador ternario**: Validación singular/plural del contador
- **Bucles implícitos**: Recursividad en la generación de números
- **Funciones**: Modularización del código en 6 funciones específicas

### Manipulación del DOM
```javascript
// Selección y modificación dinámica de elementos
document.querySelector(elemento)
document.getElementById(id)
elemento.innerHTML = texto
```

### Algoritmos Destacados

#### Generación de Número Único
```javascript
function generarNumeroSecreto(){
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

    if(listaNumerosSorteados.includes(numeroGenerado)){
        return generarNumeroSecreto(); // Recursividad
    } else {
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
    }
}
```

**Conceptos aplicados:**
- Generación de números aleatorios con `Math.random()`
- Recursividad para evitar duplicados
- Validación con método `.includes()`
- Gestión de arrays con `.push()`

#### Validación de Intento
```javascript
function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);

    if(numeroDeUsuario === numeroSecreto){
        asignarTextoElemento("p",`Acertaste el número en ${intentos} ${(intentos===1) ? "intento" : "intentos"}`);
        document.getElementById("reiniciar").removeAttribute("disabled");
    } else {
        // Lógica de pistas mayor/menor
        intentos++;
        limpiarCaja();
    }
}
```

**Conceptos aplicados:**
- Comparación estricta con `===`
- Template literals para mensajes dinámicos
- Manipulación de atributos del DOM
- Control de estado de botones

## Estructura del Proyecto
```
NumSecreto2/
├── index.html      # Estructura HTML del juego
├── style.css       # Estilos y diseño visual
├── app.js          # Lógica del juego
└── img/            # Recursos gráficos
```

## Aprendizajes Clave
1. **Separación de responsabilidades**: HTML para estructura, CSS para presentación, JS para lógica
2. **Funciones reutilizables**: `asignarTextoElemento()` para evitar código duplicado
3. **Estado de la aplicación**: Gestión de variables globales (`numeroSecreto`, `intentos`, `listaNumerosSorteados`)
4. **Experiencia de usuario**: Deshabilitación/habilitación de botones según contexto
5. **Validación de datos**: Control de límites y casos edge (números agotados)

## Visualización

### Flujo del Juego

#### 1. Pantalla de Victoria
![Pantalla de victoria](./screenshots/victoria.png)
*El usuario acertó el número secreto en 3 intentos. El botón "Nuevo juego" se habilita automáticamente.*

#### 2. Estado Inicial
![Estado inicial](./screenshots/inicio.png)
*Interfaz inicial del juego solicitando un número del 1 al 10. El botón "Nuevo juego" está deshabilitado.*

#### 3. Pista: Número Mayor
![Pista mayor](./screenshots/pista-mayor.png)
*Sistema de retroalimentación indicando que el número secreto es mayor al ingresado.*

#### 4. Pista: Número Menor
![Pista menor](./screenshots/pista-menor.png)
*Sistema de retroalimentación indicando que el número secreto es menor al ingresado.*

### Aspectos Destacados de la UI
- **Diseño moderno** con gradientes azules y efectos de ruido
- **Personaje ilustrado** que complementa la estética tecnológica
- **Estados visuales claros** para botones (activo/deshabilitado)
- **Input numérico** con controles nativos del navegador
- **Tipografía profesional** utilizando Google Fonts (Chakra Petch e Inter)

---
**Proyecto desarrollado como parte del curso de Lógica de Programación con JavaScript - Alura**
