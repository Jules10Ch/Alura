# Número Secreto

Juego interactivo de adivinanza desarrollado con JavaScript vanilla como parte del curso de lógica de programación de Alura.

## Descripción

Aplicación web que desafía al usuario a adivinar un número secreto generado aleatoriamente. El juego incluye pistas direccionales, contador de intentos y límite máximo de jugadas.

## Tecnologías Utilizadas

- **HTML5**: Estructura semántica del proyecto
- **CSS3**: Diseño responsive con gradientes y efectos visuales
- **JavaScript**: Lógica del juego y manejo de interacciones

## Funcionalidades Implementadas

### Lógica de Programación
- **Generación aleatoria de números** con `Math.random()` y `Math.floor()`
- **Bucle while**: Repetición del juego hasta acertar o alcanzar el límite
- **Condicionales if/else**: Validación de respuestas y pistas al usuario
- **Contador de intentos**: Seguimiento del número de jugadas
- **Operador ternario**: Manejo de singular/plural ("vez" vs "veces")
- **Template literals**: Mensajes dinámicos personalizados

### Interacción con el Usuario
- Configuración del rango máximo personalizable
- Sistema de pistas (mayor/menor)
- Límite de 6 intentos máximos
- Mensajes contextuales según el resultado

## Conceptos Clave Demostrados

```javascript
// Variables y tipos de datos
let numeroSecreto = Math.floor(Math.random()*numeroMaximoPosible)+1;

// Estructuras de control
while (numeroUsuario != numeroSecreto) {
    // Validación y feedback
    if (numeroUsuario > numeroSecreto) {
        alert('El número secreto es menor');
    }
}

// Operador ternario
alert(`Lo hiciste en ${intentos} ${intentos == 1 ? 'vez' : 'veces'}`);
```

## Estructura del Proyecto

```
Numero secreto/
├── index.html          # Estructura HTML
├── style.css           # Estilos y diseño visual
├── app.js              # Lógica del juego
└── img/                # Recursos gráficos
    ├── robot.png
    ├── trophy.png
    └── code.png
```

## Aprendizajes Técnicos

- Manipulación del DOM con JavaScript
- Uso de prompts para captura de datos
- Conversión de tipos con `parseInt()`
- Control de flujo con bucles y condicionales
- Debug con `console.log()`
- Diseño con CSS Grid y Flexbox
- Implementación de gradientes y pseudo-elementos



## Ejecución

1. Abrir `index.html` en el navegador
2. Ingresar el número máximo deseado para el rango
3. Adivinar el número secreto siguiendo las pistas
4. Ganar en máximo 6 intentos

---

**Curso**: Lógica de Programación - Alura Latam
**Tecnologías**: HTML, CSS, JavaScript
**Año**: 2025
