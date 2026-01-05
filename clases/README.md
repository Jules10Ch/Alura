# Portafolio Académico - Ciencia de Datos

## Descripción

Recopilación completa de materiales de aprendizaje y ejercicios prácticos realizados durante el programa de Ciencia de Datos. Este repositorio documenta la progresión de conocimientos desde fundamentos de programación científica hasta modelos avanzados de Machine Learning.

## Estructura del Aprendizaje

El programa se organizó en tres áreas principales de conocimiento:

```
clases/
├── ETL/                      # Extracción, Transformación y Carga de Datos
├── Estadistica y ML/         # Estadística y Machine Learning
└── SQL/                      # Bases de Datos Relacionales
```

---

## 1. ETL - Análisis y Procesamiento de Datos

### 1.1 NumPy - Computación Científica

**Conocimientos adquiridos:**
- Arrays multidimensionales y operaciones vectorizadas
- Indexación avanzada y slicing
- Broadcasting para operaciones eficientes
- Funciones matemáticas y estadísticas
- Algebra lineal básica con NumPy
- Generación de números aleatorios
- Optimización de rendimiento vs listas de Python

**Archivos**: `1Numpy/`

---

### 1.2 Pandas - Manipulación de Datos

**Conocimientos adquiridos:**
- Creación y manipulación de DataFrames y Series
- Selección de datos con `.loc[]` y `.iloc[]`
- Filtrado y consultas condicionales
- Ordenamiento y ranking de datos
- Operaciones de agrupación (`groupby`)
- Funciones de agregación y estadísticas descriptivas
- Manejo de valores nulos (`isna`, `fillna`, `dropna`)
- Trabajo con índices personalizados

**Archivos**: `2Pandas. Conociendo la biblioteca/`

---

### 1.3 Pandas - Entrada/Salida de Datos

**Conocimientos adquiridos:**
- Lectura y escritura de archivos CSV
- Importación de datos desde Excel
- Manejo de diferentes delimitadores y encodings
- Normalización de datos JSON anidados (`json_normalize`)
- Exportación de DataFrames a múltiples formatos
- Configuración de parámetros de importación (headers, tipos de datos)
- Optimización de lectura de archivos grandes

**Archivos**: `3Pandas E-S/`

---

### 1.4 Pandas - Transformación y Manipulación Avanzada

**Conocimientos adquiridos:**
- Combinación de DataFrames (`merge`, `join`, `concat`)
- Operaciones de pivoteo (`pivot_table`, `melt`)
- Transformación de datos (apply, map, replace)
- Creación de nuevas columnas derivadas
- Recodificación de variables categóricas
- Limpieza y normalización de strings
- Detección y tratamiento de outliers
- Reshape de datos (wide vs long format)

**Archivos**: `4Pandas. Transformación y manipulación/`

---

### 1.5 Matplotlib - Visualización de Datos

**Conocimientos adquiridos:**
- Creación de gráficos básicos (línea, barra, dispersión)
- Personalización de figuras (colores, etiquetas, títulos)
- Subplots y layouts de múltiples gráficos
- Configuración de ejes y escalas
- Histogramas y distribuciones
- Gráficos de caja (boxplots) para detección de outliers
- Guardado de gráficos en diferentes formatos
- Estilización y temas visuales

**Archivos**: `5Matplotlib_Graficos/`

---

### 1.6 IA Aplicada a Ciencia de Datos

**Conocimientos adquiridos:**
- Integración de herramientas de IA en flujos de trabajo
- Automatización de tareas de análisis exploratorio
- Uso de IA para generación de código y debugging
- Mejores prácticas en documentación asistida por IA
- Validación crítica de outputs generados por IA
- Optimización de prompts para análisis de datos

**Archivos**: `6ia_aplicada_ciencias_de_datos/`

---

## 2. Estadística y Machine Learning

### 2.1 Estadística con Python - Nivel 1

**Conocimientos adquiridos:**
- Tipos de variables (cualitativas, cuantitativas)
- Medidas de tendencia central (media, mediana, moda)
- Medidas de dispersión (varianza, desviación estándar, rango)
- Distribuciones de frecuencia
- Análisis univariado
- Gráficos estadísticos básicos
- Interpretación de estadísticas descriptivas
- Quartiles y percentiles

**Archivos**: `1Estadistica_con_Python_1/`

---

### 2.2 Estadística con Python - Nivel 2

**Conocimientos adquiridos:**
- Probabilidad y distribuciones probabilísticas
- Distribución normal y estandarización (Z-score)
- Teorema del límite central
- Intervalos de confianza
- Pruebas de hipótesis (test t, test Z)
- Nivel de significancia y p-value
- Correlación de Pearson
- Análisis de varianza (ANOVA)

**Archivos**: `2Estadistica_con_Python_2/`

---

### 2.3 Regresión Lineal - Fundamentos

**Conocimientos adquiridos:**
- Concepto de regresión lineal simple
- Método de mínimos cuadrados ordinarios (OLS)
- Interpretación de coeficientes
- Análisis de residuos
- R² (coeficiente de determinación)
- Supuestos de regresión lineal
- Predicción con modelos lineales
- Visualización de líneas de regresión

**Archivos**: `3Relaciones con Regresión Lineal/`

---

### 2.4 Regresión Lineal - Técnicas Avanzadas

**Conocimientos adquiridos:**
- Regresión lineal múltiple
- Selección de variables (stepwise, backward, forward)
- Multicolinealidad y VIF
- Variables dummy para categóricas
- Interacciones entre variables
- Transformaciones logarítmicas
- Validación de supuestos (homocedasticidad, normalidad)
- Diagnóstico de modelos (leverage, influencia)

**Archivos**: `4Regresion_Lineal_Tecnicas_Avanzadas/`

---

### 2.5 Clasificación de Datos - Machine Learning

**Conocimientos adquiridos:**
- Algoritmos de clasificación supervisada
- Regresión Logística
- Árboles de Decisión (Decision Trees)
- Random Forest
- K-Nearest Neighbors (KNN)
- Support Vector Machines (SVM)
- Naive Bayes
- División de datos (train/test/validation)
- Feature scaling y normalización

**Archivos**: `5Clasificacion_Datos_Machine_Learning/`

---

### 2.6 Validación de Modelos y Métricas

**Conocimientos adquiridos:**
- Métricas de clasificación (Accuracy, Precision, Recall, F1-Score)
- Matriz de confusión
- Curvas ROC y AUC
- Validación cruzada (K-Fold, Stratified K-Fold)
- Overfitting y underfitting
- Regularización (L1, L2)
- Grid Search para optimización de hiperparámetros
- Métricas de regresión (MSE, RMSE, MAE, R²)
- Balanceo de clases (SMOTE, undersampling, oversampling)

**Archivos**: `6Validacion de modelos y metricas/`

---

### 2.7 IA Aumentada - Predicción de Atrasos de Vuelos

**Conocimientos adquiridos:**
- Proyecto aplicado de clasificación
- Feature engineering para datos temporales
- Manejo de datasets desbalanceados
- Pipeline completo de ML (ETL → Modelado → Evaluación)
- Interpretación de resultados para stakeholders
- Optimización de modelos según métricas de negocio
- Deployment de modelos predictivos
- Análisis de features importance

**Archivos**: `7IA aumentada. prevision atrasos de vuelos/`

---

## 3. SQL - Bases de Datos Relacionales

### 3.1 SQL - Fundamentos y Consultas

**Conocimientos adquiridos:**

#### Lenguaje de Definición de Datos (DDL)
- `CREATE TABLE` con restricciones
- `ALTER TABLE` para modificar estructuras
- `DROP TABLE` y eliminación segura
- Definición de claves primarias y foráneas
- Tipos de datos (VARCHAR, INT, FLOAT, DATE, BIT)

#### Lenguaje de Manipulación de Datos (DML)
- `SELECT` con filtros (`WHERE`)
- `INSERT INTO` individual y masivo
- `UPDATE` con condiciones
- `DELETE` controlado
- `ORDER BY` y ordenamiento
- `LIMIT` para paginación
- Funciones de agregación (`COUNT`, `SUM`, `AVG`, `MAX`, `MIN`)
- `GROUP BY` y `HAVING`

#### Consultas Avanzadas
- `INNER JOIN`, `LEFT JOIN`, `RIGHT JOIN`
- Subconsultas (subqueries)
- `UNION` y combinación de resultados
- `DISTINCT` para valores únicos
- `CASE WHEN` para lógica condicional
- Operadores lógicos (`AND`, `OR`, `NOT`, `IN`, `BETWEEN`)

**Archivos**: `scriptsSQL/`

---

### 3.2 SQL - Programación Avanzada

**Conocimientos adquiridos:**

#### Funciones Personalizadas
- Creación de funciones (`CREATE FUNCTION`)
- Parámetros de entrada y valores de retorno
- Variables locales (`DECLARE`, `SET`)
- Funciones escalares vs funciones de tabla

#### Procedimientos Almacenados
- `CREATE PROCEDURE` con parámetros
- Estructuras de control (`IF-THEN-ELSE`, `WHILE`, `LOOP`)
- Cursores para iteración
- Manejo de errores (`HANDLER`)
- Variables de sesión y globales

#### Triggers
- Triggers `BEFORE` y `AFTER`
- Eventos: `INSERT`, `UPDATE`, `DELETE`
- Acceso a valores `NEW` y `OLD`
- Triggers a nivel de fila
- Automatización de auditoría

#### Administración de Bases de Datos
- Backup y restore de bases de datos
- Importación y exportación de datos
- Gestión de usuarios y permisos
- Optimización de consultas
- Índices para mejorar rendimiento

**Archivos**: `scriptsSQL/sql_dba/`

---

## Herramientas y Tecnologías

### Lenguajes
- Python 3
- SQL (MySQL/MariaDB)

### Librerías de Python
- **NumPy**: Computación numérica
- **Pandas**: Manipulación de datos
- **Matplotlib**: Visualización estática
- **Seaborn**: Visualización estadística
- **Plotly**: Gráficos interactivos
- **Scikit-learn**: Machine Learning
- **Statsmodels**: Modelado estadístico
- **Imbalanced-learn**: Balanceo de datos

### Entornos de Desarrollo
- Jupyter Notebook
- Google Colab
- MySQL Workbench
- VS Code

---

## Progresión de Habilidades

### Nivel Fundamental
✓ Manipulación de datos con Pandas
✓ Visualización con Matplotlib
✓ Consultas SQL básicas
✓ Estadística descriptiva

### Nivel Intermedio
✓ ETL completo (Extracción, Transformación, Carga)
✓ Análisis exploratorio de datos (EDA)
✓ Regresión lineal simple y múltiple
✓ Joins y subconsultas SQL
✓ Stored procedures y funciones

### Nivel Avanzado
✓ Modelos de clasificación (Random Forest, SVM, KNN)
✓ Optimización de hiperparámetros
✓ Validación cruzada y métricas avanzadas
✓ Balanceo de clases con SMOTE
✓ Triggers y automatización en SQL
✓ Feature engineering
✓ Pipeline completo de ML

---

## Estadísticas del Portafolio

- **Total de archivos de práctica**: 33+
- **Notebooks de Jupyter**: 25+
- **Scripts SQL**: 8+
- **Módulos completados**: 14
- **Áreas de conocimiento**: 3 (ETL, ML, SQL)

---

## Aplicaciones Prácticas

Este material de aprendizaje sirvió como base para el desarrollo de proyectos aplicados:

1. **[Análisis de Tienda Alura](../Data%20Science/challengeStore)** - Análisis exploratorio y visualización
2. **[Predicción de Churn TelecomX](../Data%20Science/proyecto_telecomX)** - EDA y análisis estadístico
3. **[Modelo Predictivo TelecomX](../Data%20Science/challenge_telecomX_parte2)** - Machine Learning completo
4. **[Sistema de Gestión de Ventas](../Data%20Science/proyecto_empresa)** - Base de datos SQL avanzada

---

## Competencias Desarrolladas

### Data Analysis
- Limpieza y transformación de datos
- Análisis exploratorio (EDA)
- Detección de patrones y outliers
- Visualización efectiva de datos

### Machine Learning
- Modelado predictivo supervisado
- Evaluación y validación de modelos
- Optimización de algoritmos
- Interpretación de resultados

### Bases de Datos
- Diseño de esquemas relacionales
- Consultas complejas y optimización
- Programación en SQL
- Automatización con triggers

### Herramientas Técnicas
- Python para Data Science
- Control de versiones
- Documentación técnica
- Resolución de problemas

---

**Programa completado**: Ciencia de Datos - Alura LATAM
**Periodo**: 2024-2025
**Modalidad**: Online con proyectos prácticos
