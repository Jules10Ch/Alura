# Modelo Predictivo de Churn - TelecomX (Parte 2)

## Descripción del Proyecto

Desarrollo e implementación de modelos de Machine Learning para predecir la probabilidad de cancelación (churn) de clientes en TelecomX, utilizando técnicas de clasificación supervisada y optimización de hiperparámetros.

## Contexto

Este proyecto es la continuación del [Análisis de Churn TelecomX](../proyecto_telecomX), donde se identificó una tasa de cancelación del 25.7%. En esta segunda fase, se desarrollan modelos predictivos que permiten identificar proactivamente a clientes en riesgo de abandono para implementar estrategias de retención personalizadas.

## Objetivo del Proyecto

Construir un modelo de clasificación que maximice la identificación correcta de clientes que cancelarán el servicio (alto **Recall**), minimizando falsos negativos para optimizar las campañas de retención.

## Tecnologías y Librerías

### Core Data Science
- **Python 3**
- **Pandas**: Manipulación de datos
- **NumPy**: Operaciones numéricas
- **Matplotlib & Seaborn**: Visualización de datos

### Machine Learning (Scikit-learn)
- **Preprocesamiento**:
  - `MinMaxScaler`: Normalización de variables numéricas
  - `OneHotEncoder`: Codificación de variables categóricas
  - `ColumnTransformer`: Transformaciones por tipo de variable

- **Modelos de Clasificación**:
  - `DecisionTreeClassifier`
  - `RandomForestClassifier`
  - `KNeighborsClassifier`
  - `LogisticRegression`
  - `DummyClassifier` (baseline)

- **Balanceo de Datos**:
  - `SMOTE` (Synthetic Minority Over-sampling Technique)

- **Validación y Optimización**:
  - `train_test_split`: División estratificada de datos
  - `StratifiedKFold`: Validación cruzada
  - `GridSearchCV`: Búsqueda de hiperparámetros óptimos

- **Evaluación**:
  - Métricas: Accuracy, Precision, Recall, F1-Score
  - `ConfusionMatrix`: Análisis de errores
  - `classification_report`: Reporte completo

### Análisis Estadístico
- **Statsmodels**: Factor de Inflación de Varianza (VIF) para multicolinealidad

## Dataset

**Fuente**: `datos_tratados.csv` (generado en Parte 1)
- **Registros**: 7,267 clientes
- **Variables**: 23 características después de limpieza
- **Variable objetivo**: `Churn` (binaria: 0 = No canceló, 1 = Canceló)
- **Distribución de clases**: Desbalanceada (74.3% No Churn, 25.7% Churn)

## Metodología

### 1. Preparación de Datos

**Carga y limpieza**:
- Importación de datos tratados desde la Parte 1
- Eliminación de columnas irrelevantes (`customerID`)
- Verificación de valores nulos y tipos de datos

**Codificación de variables categóricas**:
- Aplicación de `OneHotEncoder` para variables nominales
- Transformación mediante `ColumnTransformer`

**Normalización de variables numéricas**:
- Escalado con `MinMaxScaler` para rango [0, 1]
- Homogeneización de escalas para algoritmos sensibles a magnitudes

### 2. Análisis de Multicolinealidad

**Factor de Inflación de Varianza (VIF)**:
- Detección de correlaciones entre variables independientes
- Eliminación de variables redundantes para mejorar interpretabilidad del modelo

**Análisis de correlación**:
- Matriz de correlación para variables numéricas
- Identificación de relaciones con la variable objetivo `Churn`

### 3. División de Datos

**Estrategia de splitting**:
```
- 70% Training (entrenamiento)
- 15% Validation (validación)
- 15% Test (prueba final)
```

**Estratificación**: Mantenimiento de proporción de clases en cada conjunto

### 4. Balanceo de Clases con SMOTE

**Problema**: Desbalanceo 74.3% vs 25.7%

**Solución**: Aplicación de SMOTE sobre conjunto de entrenamiento
- Generación sintética de ejemplos de la clase minoritaria (Churn = 1)
- Prevención de overfitting al aplicarse solo en training
- Mejora en la capacidad del modelo para detectar cancelaciones

### 5. Modelado y Entrenamiento

**Modelos base evaluados**:

1. **Dummy Classifier** (baseline)
   - Predicción aleatoria para establecer benchmark mínimo

2. **Decision Tree Classifier**
   - Modelo interpretable de reglas de decisión
   - Validación cruzada con StratifiedKFold (5 folds)

3. **Random Forest Classifier**
   - Ensamble de árboles de decisión
   - Reducción de overfitting mediante agregación

4. **K-Nearest Neighbors (KNN)**
   - Clasificación basada en similitud
   - Evaluación de diferentes números de vecinos

5. **Logistic Regression**
   - Modelo lineal probabilístico
   - Interpretación de coeficientes

**Métricas de evaluación**:
- **Accuracy**: Precisión general
- **Precision**: Proporción de positivos correctos
- **Recall**: Capacidad de detectar churn (métrica prioritaria)
- **F1-Score**: Balance entre precisión y recall

### 6. Optimización de Hiperparámetros

**Métrica de optimización**: **Recall** (prioridad en detectar clientes que cancelarán)

**Grid Search aplicado a**:

**Decision Tree**:
```python
- max_depth: [3, 5, 10, None]
- min_samples_split: [2, 5, 10]
- min_samples_leaf: [1, 2, 4]
- criterion: ['gini', 'entropy']
```

**Random Forest**:
```python
- n_estimators: [100, 200]
- max_depth: [5, 10, None]
- min_samples_split: [2, 5, 10]
- min_samples_leaf: [1, 2, 4]
- criterion: ['gini', 'entropy']
```

**KNN**:
```python
- n_neighbors: [3, 5, 7, 9, 11]
- weights: ['uniform', 'distance']
- metric: ['euclidean', 'manhattan']
```

### 7. Evaluación Final en Datos de Test

- Predicción con modelos optimizados sobre conjunto de test
- Comparación de rendimiento entre modelos
- Análisis de matrices de confusión
- Selección del modelo de mejor desempeño

## Resultados

### Modelos Optimizados

Los modelos fueron ajustados priorizando **Recall** para maximizar la detección de clientes en riesgo:

**Mejores hiperparámetros por modelo** (obtenidos vía GridSearchCV):
- **Decision Tree**: Configuración óptima con balance entre profundidad y generalización
- **Random Forest**: Ensamble robusto con múltiples estimadores
- **KNN**: Número óptimo de vecinos según validación cruzada

### Métricas en Conjunto de Test

Evaluación final con datos no vistos para validar capacidad de generalización:

**Recall Alto**: Los modelos optimizados logran identificar la mayoría de clientes que cancelan, reduciendo el riesgo de perder clientes sin intervención.

**Trade-off Precision-Recall**: Se acepta menor precisión a cambio de mayor recall, ya que es preferible contactar algunos clientes que no cancelarán (falsos positivos) que perder clientes reales en riesgo (falsos negativos).

### Análisis de Matriz de Confusión

- **Verdaderos Positivos (TP)**: Clientes correctamente identificados como churn
- **Falsos Negativos (FN)**: Clientes en riesgo no detectados (minimizados)
- **Falsos Positivos (FP)**: Clientes estables clasificados como riesgo
- **Verdaderos Negativos (TN)**: Clientes correctamente identificados como estables

## Aplicación del Modelo

### Casos de Uso

1. **Campañas de Retención Proactivas**
   - Identificación semanal de clientes en alto riesgo
   - Asignación de recursos de retención a segmentos prioritarios

2. **Personalización de Ofertas**
   - Segmentación de clientes según probabilidad de churn
   - Diseño de incentivos específicos por perfil de riesgo

3. **Monitoreo Continuo**
   - Scoring automático de nuevos clientes
   - Alertas tempranas para el equipo comercial

### ROI Estimado

**Escenario conservador**:
- Tasa de churn actual: 25.7%
- Clientes detectados correctamente: ~80% (según Recall)
- Tasa de recuperación con intervención: 40%
- **Reducción de churn proyectada**: 8-10%

## Estructura del Proyecto

```
challenge_telecomX_parte2/
├── TelecomX_parte2.ipynb       # Notebook con pipeline completo de ML
├── datos_tratados.csv          # Dataset preprocesado (Parte 1)
└── README.md                   # Documentación del proyecto
```

## Habilidades Demostradas

### Machine Learning
- Desarrollo de pipeline completo de ML (ETL → Modelado → Evaluación)
- Implementación de múltiples algoritmos de clasificación
- Técnicas de balanceo de datos (SMOTE)
- Validación cruzada estratificada
- Optimización de hiperparámetros con Grid Search
- Selección de métricas según objetivos de negocio

### Feature Engineering
- Codificación de variables categóricas (One-Hot Encoding)
- Normalización de variables numéricas (Min-Max Scaling)
- Análisis de multicolinealidad (VIF)
- Transformaciones por tipo de variable (ColumnTransformer)

### Evaluación de Modelos
- Análisis de matrices de confusión
- Interpretación de métricas: Precision, Recall, F1-Score
- Comprensión de trade-offs según contexto de negocio
- Validación en datos de test para evaluar generalización

### Buenas Prácticas
- División estratificada de datos (Train/Validation/Test)
- Aplicación de SMOTE solo en training (evitar data leakage)
- Uso de pipelines reproducibles
- Documentación clara de decisiones técnicas

## Ejecución del Proyecto

```bash
# Abrir en Jupyter Notebook o Google Colab
jupyter notebook TelecomX_parte2.ipynb
```

**Requisitos**:
```bash
pip install pandas numpy matplotlib seaborn scikit-learn imbalanced-learn statsmodels
```

## Próximos Pasos

### Mejoras Potenciales

1. **Feature Engineering Avanzado**
   - Creación de variables de interacción
   - Análisis de tendencias temporales (tenure)
   - Agregación de comportamiento histórico

2. **Modelos Avanzados**
   - Gradient Boosting (XGBoost, LightGBM)
   - Redes Neuronales
   - Ensambles (Stacking, Voting)

3. **Deployment**
   - API REST para predicciones en tiempo real
   - Integración con CRM
   - Dashboard de monitoreo (Streamlit/Dash)

4. **Explicabilidad**
   - SHAP values para interpretación de predicciones
   - Feature importance por modelo
   - Análisis de casos individuales

## Impacto del Proyecto

**Valor de Negocio**:
- Reducción proyectada de churn: 8-10%
- Optimización de presupuesto de retención mediante targeting preciso
- Mejora en Customer Lifetime Value (CLV)

**Valor Técnico**:
- Pipeline de ML reproducible y escalable
- Benchmark de 5 algoritmos de clasificación
- Framework de evaluación orientado a métricas de negocio

---

**Desarrollado como parte del Challenge de Ciencia de Datos - Alura LATAM**
**Proyecto de Machine Learning Supervisado | Clasificación Binaria | Optimización con Grid Search**
