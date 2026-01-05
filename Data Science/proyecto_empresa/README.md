# Sistema de Gestión de Ventas - Base de Datos Relacional

## Descripción del Proyecto

Diseño e implementación de una base de datos relacional completa para un sistema de gestión de ventas de jugos, incluyendo modelado de datos, funciones personalizadas, procedimientos almacenados y triggers automáticos para actualización de reportes.

## Contexto del Negocio

Sistema de información diseñado para gestionar las operaciones comerciales de una empresa de venta de jugos, permitiendo el registro de clientes, productos, vendedores, facturas y el seguimiento automatizado de la facturación diaria.

## Tecnologías Utilizadas

- **MySQL / MariaDB**: Sistema de gestión de bases de datos relacional
- **SQL**: Lenguaje de consulta estructurado
- **Stored Procedures**: Procedimientos almacenados para lógica de negocio
- **Functions**: Funciones personalizadas reutilizables
- **Triggers**: Automatización de actualizaciones en cascada

## Modelo de Datos

### Diagrama Entidad-Relación

![Modelo de Base de Datos](Modelo%20Empresa.png)

### Estructura de Tablas

#### 1. **Tabla: `clientes`**
Almacena información demográfica y comercial de clientes.

```sql
Campos principales:
- DNI (PK): Identificador único del cliente
- NOMBRE: Nombre completo
- DIRECCION, BARRIO, CIUDAD, ESTADO, CP: Datos de ubicación
- FECHA_NACIMIENTO, EDAD, SEXO: Datos demográficos
- LIMITE_CREDITO: Límite de crédito asignado
- VOLUMEN_COMPRA: Capacidad de compra
- PRIMERA_COMPRA: Indicador booleano (BIT)
```

#### 2. **Tabla: `productos`**
Catálogo de productos disponibles para venta.

```sql
Campos principales:
- CODIGO (PK): Código único del producto
- DESCRIPCION: Nombre del producto
- SABOR: Variante de sabor
- TAMANO: Tamaño del producto
- ENVASE: Tipo de envase
- PRECIO: Precio unitario
```

#### 3. **Tabla: `vendedores`**
Información del equipo de ventas.

```sql
Campos principales:
- MATRICULA (PK): Identificador del vendedor
- NOMBRE: Nombre completo
- BARRIO: Zona asignada
- COMISION: Porcentaje de comisión
- FECHA_ADMISION: Fecha de contratación
- VACACIONES: Indicador de disponibilidad
```

#### 4. **Tabla: `facturas`**
Registro de transacciones de venta (encabezado).

```sql
Campos principales:
- NUMERO (PK): Número único de factura
- FECHA: Fecha de la venta
- DNI (FK): Cliente que realizó la compra
- MATRICULA (FK): Vendedor responsable
- IMPUESTO: Tasa de impuesto aplicada (0.16)
```

#### 5. **Tabla: `items`**
Detalle de productos vendidos por factura (líneas de factura).

```sql
Campos principales:
- NUMERO (PK, FK): Número de factura
- CODIGO (PK, FK): Código del producto
- CANTIDAD: Unidades vendidas
- PRECIO: Precio al momento de venta
```

#### 6. **Tabla: `facturacion`**
Tabla de resumen para reportes de ventas diarias.

```sql
Campos principales:
- FECHA: Fecha de facturación
- VENTA_TOTAL: Suma total de ventas del día
```

### Relaciones

- **clientes → facturas** (1:N) - Un cliente puede tener múltiples facturas
- **vendedores → facturas** (1:N) - Un vendedor puede generar múltiples facturas
- **facturas → items** (1:N) - Una factura contiene múltiples items
- **productos → items** (1:N) - Un producto puede aparecer en múltiples items

## Componentes del Sistema

### 1. Funciones Personalizadas

#### `f_aleatorio(min INT, max INT)`
Genera números aleatorios dentro de un rango específico.

**Utilidad**: Base para generación de datos de prueba y simulación de ventas.

```sql
RETURN: Entero aleatorio entre min y max
Ejemplo: SELECT f_aleatorio(1, 100) -- Retorna número entre 1 y 100
```

#### `f_cliente_aleatorio()`
Selecciona un cliente aleatorio de la base de datos.

**Implementación**:
- Cuenta total de clientes
- Genera índice aleatorio
- Retorna DNI del cliente seleccionado

```sql
RETURN: VARCHAR(11) - DNI de cliente aleatorio
```

#### `f_producto_aleatorio()`
Selecciona un producto aleatorio del catálogo.

```sql
RETURN: VARCHAR(10) - Código de producto aleatorio
```

#### `f_vendedor_aleatorio()`
Selecciona un vendedor aleatorio del equipo.

```sql
RETURN: VARCHAR(5) - Matrícula de vendedor aleatorio
```

**Objetivo de estas funciones**: Facilitar la generación automatizada de datos de prueba y simulaciones de ventas realistas.

### 2. Procedimientos Almacenados

#### `sp_venta(fecha DATE, maxitems INT, maxcantidad INT)`
Procedimiento principal para generar ventas automáticas.

**Parámetros**:
- `fecha`: Fecha de la venta a registrar
- `maxitems`: Número máximo de productos por factura
- `maxcantidad`: Cantidad máxima por producto

**Lógica de negocio**:
1. Genera nuevo número de factura (MAX + 1)
2. Selecciona cliente, vendedor aleatorios
3. Crea registro en tabla `facturas`
4. Genera entre 1 y `maxitems` productos aleatorios
5. Valida que no haya productos duplicados en la factura
6. Inserta items con cantidades y precios actuales
7. Aplica impuesto del 16%

**Ejemplo de uso**:
```sql
CALL sp_venta('2021-06-22', 15, 100);
-- Genera una venta con máximo 15 productos y 100 unidades cada uno
```

#### `sp_triggers()`
Procedimiento llamado por triggers para actualizar tabla de facturación.

**Funcionalidad**:
- Recalcula ventas totales por fecha
- Actualiza tabla `facturacion` automáticamente
- Mantiene resumen actualizado para reportes

### 3. Triggers (Automatización)

Sistema de triggers que mantiene actualizada la tabla de facturación en tiempo real.

#### `TG_FACTURACION_INSERT`
**Evento**: Después de insertar en `items`
**Acción**: Recalcula facturación total

#### `TG_FACTURACION_UPDATE`
**Evento**: Después de actualizar en `items`
**Acción**: Recalcula facturación total

#### `TG_FACTURACION_DELETE`
**Evento**: Después de eliminar de `items`
**Acción**: Recalcula facturación total

**Optimización implementada**:
- Los tres triggers llaman al procedimiento `sp_triggers()` para centralizar la lógica
- Evita duplicación de código
- Facilita mantenimiento futuro

**Flujo automático**:
```
INSERT/UPDATE/DELETE en items
  → Trigger activado
    → sp_triggers() ejecutado
      → Tabla facturacion actualizada
```

## Funcionalidades Implementadas

### 1. Gestión de Datos Maestros
- Creación de tablas con restricciones de integridad
- Definición de claves primarias y foráneas
- Inserción de datos de clientes con validación

### 2. Generación Automática de Ventas
- Simulación de ventas con datos aleatorios realistas
- Validación de productos no duplicados por factura
- Asignación automática de precios vigentes

### 3. Reportes Automáticos
- Tabla de facturación actualizada en tiempo real
- Resumen de ventas diarias consolidado
- Consultas optimizadas para análisis de negocio

### 4. Integridad Referencial
- Cascada de relaciones entre tablas
- Prevención de datos huérfanos
- Validación de existencia de clientes, productos y vendedores

## Consultas SQL Destacadas

### Consulta de Ventas por Fecha
```sql
SELECT * FROM facturacion WHERE FECHA = '2021-06-22';
```

### Reporte Completo de Facturas
```sql
SELECT * FROM facturas F
INNER JOIN items I ON F.NUMERO = I.NUMERO;
```

### Obtención de Número de Factura Siguiente
```sql
SELECT MAX(NUMERO) + 1 FROM facturas;
```

## Habilidades Demostradas

### Diseño de Bases de Datos
- **Modelado Entidad-Relación**: Diseño normalizado de 6 tablas interrelacionadas
- **Normalización**: Aplicación de formas normales (1FN, 2FN, 3FN)
- **Integridad Referencial**: Uso de claves primarias y foráneas
- **Tipos de datos apropiados**: VARCHAR, INT, FLOAT, DATE, BIT

### SQL Avanzado

#### DDL (Data Definition Language)
- `CREATE TABLE` con restricciones
- `ALTER TABLE` y `DROP TABLE`
- Definición de `PRIMARY KEY` y `FOREIGN KEY`

#### DML (Data Manipulation Language)
- `INSERT INTO` individual y masivo
- `SELECT` con filtros y ordenamiento
- `LIMIT` para paginación
- `JOIN` para relacionar tablas

#### Programación en SQL
- **Funciones**: Creación de funciones personalizadas con `RETURNS`
- **Procedimientos Almacenados**: Lógica compleja con variables y control de flujo
- **Triggers**: Automatización de eventos AFTER INSERT/UPDATE/DELETE
- **Variables**: Declaración con `DECLARE`, asignación con `SET`
- **Estructuras de Control**: `WHILE`, `IF-THEN`, `END IF`

### Lógica de Negocio
- Generación de números aleatorios para simulación
- Validación de duplicados
- Cálculo automático de totales
- Gestión de secuencias (números de factura)

### Buenas Prácticas
- Uso de `DELIMITER` para definir bloques de código
- Nombramiento consistente de objetos (prefijos: `f_`, `sp_`, `TG_`)
- Comentarios descriptivos por sección
- Modularización de código en funciones reutilizables
- Centralización de lógica común en procedimientos

## Estructura del Proyecto

```
proyecto_empresa/
├── consultas_empresa.sql     # Script completo del proyecto
├── Modelo Empresa.png        # Diagrama Entidad-Relación
└── README.md                 # Documentación del proyecto
```

## Configuración y Ejecución

### Requisitos Previos
```sql
-- Habilitar creación de funciones
SET GLOBAL log_bin_trust_function_creators = 1;

-- Crear base de datos
CREATE DATABASE jugos_ventas;
USE jugos_ventas;
```

### Instalación
1. Ejecutar script de creación de tablas
2. Insertar datos de clientes, productos y vendedores
3. Crear funciones auxiliares
4. Crear procedimiento `sp_venta`
5. Implementar triggers de facturación

### Uso del Sistema

**Generar venta aleatoria**:
```sql
CALL sp_venta('2021-06-22', 15, 100);
```

**Consultar facturación del día**:
```sql
SELECT * FROM facturacion WHERE FECHA = '2021-06-22';
```

**Ver detalle de facturas**:
```sql
SELECT F.NUMERO, F.FECHA, C.NOMBRE, V.NOMBRE AS VENDEDOR,
       I.CODIGO, P.DESCRIPCION, I.CANTIDAD, I.PRECIO
FROM facturas F
INNER JOIN clientes C ON F.DNI = C.DNI
INNER JOIN vendedores V ON F.MATRICULA = V.MATRICULA
INNER JOIN items I ON F.NUMERO = I.NUMERO
INNER JOIN productos P ON I.CODIGO = P.CODIGO
WHERE F.FECHA = '2021-06-22';
```

## Casos de Uso

### 1. Simulación de Datos
Generación masiva de ventas para pruebas de rendimiento y análisis.

### 2. Reportes Gerenciales
Consulta rápida de facturación diaria sin necesidad de cálculos complejos.

### 3. Sistema Transaccional
Mantenimiento automático de integridad de datos mediante triggers.

### 4. Análisis de Ventas
Base sólida para consultas analíticas sobre clientes, productos y vendedores.

## Evolución del Proyecto

El proyecto se desarrolló en 4 fases incrementales:

**Aula 1**: Creación de tablas y carga de datos iniciales
**Aula 2**: Implementación de funciones para generación aleatoria
**Aula 3**: Desarrollo de funciones de selección aleatoria
**Aula 4**: Creación de procedimiento de ventas
**Proyecto Final**: Implementación de triggers y automatización completa

## Mejoras Potenciales

### Funcionalidad
- Implementar control de inventario
- Validar límite de crédito en ventas
- Agregar tabla de histórico de precios
- Sistema de descuentos y promociones

### Optimización
- Índices en campos de búsqueda frecuente
- Vistas materializadas para reportes
- Particionamiento de tablas por fecha
- Optimización de triggers para grandes volúmenes

### Seguridad
- Roles y permisos de usuario
- Auditoría de transacciones
- Encriptación de datos sensibles

## Impacto del Proyecto

**Valor Técnico**:
- Base de datos normalizada y escalable
- Automatización completa de reportes
- Generador de datos de prueba integrado

**Valor de Negocio**:
- Reportes de facturación en tiempo real
- Integridad de datos garantizada
- Reducción de errores manuales

---

**Desarrollado como parte del curso de Bases de Datos SQL - Alura LATAM**
**Proyecto de Base de Datos Relacional | MySQL | Stored Procedures | Triggers**
