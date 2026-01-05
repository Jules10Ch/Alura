# Amigo Secreto - Sorteo Aleatorio de Nombres

## Descripción
Aplicación web interactiva para organizar sorteos de "Amigo Secreto" (Secret Santa). Los usuarios pueden agregar nombres de participantes a una lista y realizar un sorteo aleatorio. El proyecto demuestra manipulación dinámica del DOM, gestión de arrays, generación de números aleatorios y validación de datos.

## Objetivo del Proyecto
Desarrollar una aplicación funcional que combine:
- Manipulación avanzada de arrays
- Creación dinámica de elementos HTML
- Validación de entrada de usuarios
- Algoritmos de selección aleatoria
- Interfaz de usuario intuitiva y accesible

## Tecnologías Utilizadas
- **HTML5**: Estructura semántica con ARIA attributes
- **CSS3**: Diseño moderno con variables CSS, flexbox y efectos visuales
- **JavaScript**: Lógica de negocio, manipulación del DOM y algoritmos

## Visualización

### Estado Inicial
![Estado inicial](./screenshots/inicial.png)
*Interfaz vacía lista para recibir nombres de participantes*

### Lista de Participantes
![Lista con nombres](./screenshots/lista-amigos.png)
*Visualización de nombres agregados: Omar, Diego, Antonio*

### Resultado del Sorteo
![Amigo sorteado](./screenshots/resultado.png)
*Resultado del sorteo mostrando el participante seleccionado aleatoriamente*

---

## Estructura del Proyecto
```
AmigoSecreto/
├── index.html          # Estructura HTML
├── style.css           # Estilos y diseño responsivo
├── app.js              # Lógica de la aplicación
├── assets/             # Recursos gráficos
│   ├── amigo-secreto.png
│   └── play_circle_outline.png
└── screenshots/        # Capturas del proyecto
```

---

## Análisis Técnico del Código

### 1. Gestión de Estado con Arrays

```javascript
let amigos = [];
```

**Concepto aplicado:**
- **Array global**: Almacena el estado de la aplicación
- **Persistencia en memoria**: Los datos existen mientras la página esté abierta
- **Fuente única de verdad**: Todos los nombres están centralizados

**Importancia:** El array es la estructura de datos central que mantiene sincronizada la interfaz con la lógica.

---

### 2. Agregar Participantes con Validación

```javascript
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
```

**Conceptos aplicados:**
- **Obtención de valor del input**: `document.getElementById().value`
- **Validación de entrada**: Verificación de string vacío
- **Método `.push()`**: Añade elementos al final del array
- **Console.log()**: Debugging para verificar el estado del array
- **Composición de funciones**: Llama a `limpiarCaja()` y `actualizarLista()`

**Flujo de ejecución:**
1. Obtiene el valor del input
2. Valida que no esté vacío
3. Agrega el nombre al array
4. Limpia el input para siguiente entrada
5. Actualiza la visualización de la lista

---

### 3. Limpieza de Input

```javascript
function limpiarCaja(){
    document.querySelector("#amigo").value = "";
}
```

**Conceptos aplicados:**
- **querySelector()**: Selección de elementos por selector CSS
- **Asignación a string vacío**: Reset del valor del input

**Propósito:** Mejora la experiencia del usuario permitiendo agregar múltiples nombres rápidamente.

---

### 4. Renderizado Dinámico de Lista

```javascript
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
```

**Conceptos aplicados:**
- **`innerHTML = ""`**: Limpia el contenido previo (evita duplicados)
- **`document.createElement()`**: Crea elementos HTML dinámicamente
- **`.textContent`**: Asigna texto de forma segura (previene XSS)
- **`.appendChild()`**: Inserta el elemento en el DOM
- **Bucle `for`**: Itera sobre cada elemento del array

**Patrón de renderizado:**
1. Limpiar contenedor
2. Iterar sobre datos
3. Crear elemento por cada dato
4. Insertar en el DOM

**Ventaja sobre innerHTML directo:** Mayor seguridad y control sobre cada elemento creado.

---

### 5. Algoritmo de Sorteo Aleatorio

```javascript
function sortearAmigo(){
    if (amigos.length === 0){
        alert("No hay amigos en la lista para sortear");
        return;
    }

    // Generar un índice aleatorio
    let indiceAleatorio = Math.floor(Math.random()*amigos.length);
    // Obtener el nombre sorteado
    let amigoSorteado = amigos[indiceAleatorio];
    // Mostrar el resultado
    document.getElementById("resultado").innerHTML = `El amigo sorteado es: <strong>${amigoSorteado}</strong>`;
}
```

**Conceptos aplicados:**
- **Validación de lista vacía**: Previene errores al sortear sin participantes
- **`return` temprano**: Sale de la función si no hay datos
- **`Math.random()`**: Genera número decimal entre 0 y 1
- **`Math.floor()`**: Redondea hacia abajo para obtener entero
- **Acceso por índice**: `amigos[indiceAleatorio]`
- **Template literals**: Interpolación con HTML para resaltar resultado

**Algoritmo paso a paso:**
```javascript
// Ejemplo: amigos = ["Omar", "Diego", "Antonio"]
// amigos.length = 3

Math.random()              // → 0.7234 (ejemplo)
Math.random() * 3          // → 2.1702
Math.floor(2.1702)         // → 2
amigos[2]                  // → "Antonio"
```

**Distribución uniforme:** Cada participante tiene la misma probabilidad de ser seleccionado.

---

## Análisis del CSS

### 1. Variables CSS para Tema Consistente

```css
:root {
    --color-primary: #4B69FD;
    --color-secondary: #FFF9EB;
    --color-tertiary: #C4C4C4;
    --color-button: #fe652b;
    --color-button-hover: #e55720;
}
```

**Ventajas:**
- Cambios de color globales desde un solo lugar
- Nomenclatura descriptiva (primary, secondary, etc.)
- Facilita modo oscuro/claro futuro

---

### 2. Layout de Dos Secciones con Flexbox

```css
.main-content {
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
}

.header-banner {
    flex: 40%;
}

.input-section {
    flex: 60%;
    border-radius: 64px 64px 0 0;
}
```

**Conceptos aplicados:**
- **Flex con porcentajes**: `flex: 40%` = 40% del espacio vertical
- **Border-radius asimétrico**: Solo esquinas superiores redondeadas
- **Altura total**: `height: 100%` ocupa toda la ventana

**Resultado:** División 40/60 con header azul y sección beige curveada.

---

### 3. Input y Botón Conectados

```css
.input-name {
    border-radius: 25px 0 0 25px;
}

.button-add {
    border-radius: 0 25px 25px 0;
}
```

**Concepto aplicado:**
- **Border-radius específico por esquina**: `top-left top-right bottom-right bottom-left`
- **Unión visual**: El input y botón parecen un solo componente

**HTML asociado:**
```html
<div class="input-wrapper">
    <input class="input-name">
    <button class="button-add">Añadir</button>
</div>
```

---

### 4. Accesibilidad Web (ARIA)

```html
<ul id="listaAmigos" aria-labelledby="listaAmigos" role="list"></ul>
<ul id="resultado" aria-live="polite"></ul>
<button aria-label="Sortear amigo secreto">
```

**Conceptos aplicados:**
- **`aria-labelledby`**: Asocia etiqueta descriptiva
- **`role="list"`**: Semántica explícita para tecnologías asistivas
- **`aria-live="polite"`**: Anuncia cambios dinámicos sin interrumpir
- **`aria-label`**: Descripción para lectores de pantalla

**Importancia:** La aplicación es usable con lectores de pantalla.

---

### 5. Efectos Hover para Feedback

```css
.button-add:hover {
    background-color: #a1a1a1;
}

.button-draw:hover {
    background-color: var(--color-button-hover);
}
```

**Concepto aplicado:**
- **Pseudo-clase `:hover`**: Cambio visual al pasar el mouse
- **Oscurecimiento de color**: Indica interactividad

---

## Flujo de Usuario Completo

```
1. Usuario carga la página
   ↓
2. Escribe nombre en el input → "Omar"
   ↓
3. Click en "Añadir"
   ↓
4. JavaScript ejecuta agregarAmigo()
   - Valida que no esté vacío ✓
   - Agrega "Omar" al array: amigos = ["Omar"]
   - Limpia el input
   - Actualiza la lista visual
   ↓
5. Usuario repite proceso: "Diego", "Antonio"
   amigos = ["Omar", "Diego", "Antonio"]
   ↓
6. Click en "Sortear amigo"
   ↓
7. JavaScript ejecuta sortearAmigo()
   - Valida que haya amigos ✓
   - Genera número aleatorio 0-2
   - Selecciona nombre del array
   - Muestra resultado en verde
```

---

## Conceptos de Programación Implementados

### Estructuras de Datos
- **Arrays**: Almacenamiento dinámico de nombres
- **Strings**: Manejo de texto del usuario

### Manipulación del DOM
- **Lectura**: `getElementById().value`, `querySelector()`
- **Escritura**: `innerHTML`, `textContent`
- **Creación**: `createElement()`, `appendChild()`

### Algoritmos
- **Validación de datos**: Verificación de strings vacíos y arrays
- **Generación aleatoria**: `Math.random()` con `Math.floor()`
- **Renderizado dinámico**: Sincronización array ↔ UI

### Control de Flujo
- **Condicionales**: `if/else` para validaciones
- **Bucles**: `for` para recorrer arrays
- **Return temprano**: Salir de función ante errores

### Funciones
- **Modularización**: Cada función tiene una responsabilidad
- **Composición**: Funciones que llaman a otras funciones
- **Side effects**: Modifican el DOM y el estado global

---

## Mejoras Potenciales (No Implementadas)

### 1. Validación Avanzada
```javascript
// Evitar nombres duplicados
if (amigos.includes(amigo)) {
    alert("Este nombre ya está en la lista");
    return;
}
```

### 2. Eliminar Participantes
```javascript
function eliminarAmigo(index) {
    amigos.splice(index, 1);
    actualizarLista();
}
```

### 3. Sorteo Sin Repetición
```javascript
let yasorteados = [];
function sortearSinRepetir() {
    let disponibles = amigos.filter(a => !yasorteados.includes(a));
    // ... sortear de disponibles
}
```

### 4. LocalStorage para Persistencia
```javascript
// Guardar al agregar
localStorage.setItem('amigos', JSON.stringify(amigos));

// Cargar al iniciar
let amigos = JSON.parse(localStorage.getItem('amigos')) || [];
```

---

## Aprendizajes Clave

1. **Sincronización estado-UI**
   - El array `amigos` es la fuente de verdad
   - La UI se actualiza cada vez que cambia el array
   - Patrón fundamental en desarrollo web moderno

2. **Creación dinámica de elementos**
   - `createElement()` + `appendChild()` vs `innerHTML`
   - Mayor control y seguridad
   - Base para frameworks como React

3. **Validación de entrada del usuario**
   - Nunca confiar en datos del usuario
   - Validar antes de procesar
   - Feedback inmediato con alerts

4. **Algoritmos de aleatoriedad**
   - `Math.random()` genera decimales [0, 1)
   - Multiplicar por `array.length` para escalar
   - `Math.floor()` para índice entero
   - Distribución uniforme garantizada

5. **Accesibilidad desde el diseño**
   - Atributos ARIA desde el HTML
   - Consideración de usuarios con discapacidades
   - No es un "extra", es fundamental

6. **CSS moderno**
   - Variables CSS para mantenibilidad
   - Flexbox para layouts
   - Border-radius para componentes unidos

---

## Diferencia: innerHTML vs createElement

Este proyecto usa **ambos métodos**:

| Método | Dónde se usa | Ventajas | Desventajas |
|--------|--------------|----------|-------------|
| `innerHTML` | Mostrar resultado del sorteo | Rápido, permite HTML | Riesgo XSS, menos control |
| `createElement()` | Lista de amigos | Seguro, control total | Más código |

**Mejor práctica:** Usar `createElement()` para contenido del usuario, `innerHTML` solo para contenido controlado.

---

**Proyecto desarrollado como parte del curso de Lógica de Programación con JavaScript - Alura**
