# Análisis de Churn de Clientes - TelecomX

## Descripción del Proyecto

Análisis exploratorio de datos (EDA) para identificar los factores que influyen en la cancelación de servicios de telecomunicaciones, con el objetivo de desarrollar estrategias de retención de clientes basadas en datos.

## Contexto del Negocio

TelecomX enfrenta una alta tasa de cancelaciones que afecta significativamente sus ingresos y crecimiento. Este proyecto analiza el comportamiento de los clientes para comprender los patrones de abandono y proponer acciones concretas para mejorar la retención.

## Tecnologías Utilizadas

- **Python 3**
- **Pandas**: Manipulación y normalización de datos JSON
- **NumPy**: Operaciones numéricas
- **Matplotlib**: Visualizaciones estáticas
- **Seaborn**: Visualizaciones estadísticas avanzadas
- **Plotly Express**: Gráficos interactivos

## Dataset

**Fuente**: `TelecomX_Data.json` (archivo JSON anidado con información de 7,267 clientes)

**Variables principales** (23 columnas):
- Información demográfica (género, edad, pareja, dependientes)
- Servicios contratados (teléfono, internet, seguridad, soporte técnico, streaming)
- Detalles de contrato (tipo, método de pago, facturación)
- Métricas financieras (cargo mensual, cargo total)
- **Variable objetivo**: `Churn` (cancelación del servicio)

## Metodología

### 1. Extracción y Normalización (ETL)

- Importación de archivo JSON desde repositorio remoto
- Normalización de estructura JSON anidada en 5 DataFrames:
  - `datos_iniciales`: IDs y variable objetivo
  - `cliente`: Datos demográficos
  - `phone`: Servicios telefónicos
  - `internet`: Servicios de internet
  - `account`: Información de cuenta y facturación

### 2. Transformación y Limpieza de Datos

**Tratamiento realizado**:
- Conversión de valores categóricos binarios ('Yes'/'No') a formato numérico (1/0)
- Reemplazo de valores 'No service' por 0
- Corrección de valores vacíos en columna `Charges.Total`
- Creación de variable derivada `Cuentas_Diarias` (cargo mensual ÷ 30.5 días)
- Integración de todos los DataFrames en `df_final` para análisis unificado

### 3. Análisis Exploratorio de Datos (EDA)

**Análisis univariado y bivariado enfocado en**:
- Distribución de cancelaciones por variables demográficas
- Relación entre tipo de contrato y tasa de churn
- Impacto de servicios adicionales en la retención
- Patrones de gasto y duración del contrato
- Métodos de pago y su correlación con abandono

### 4. Visualización de Datos

Implementación de múltiples visualizaciones:
- Gráficos de barras comparativos
- Distribuciones de frecuencia
- Análisis de correlación
- Gráficos interactivos con Plotly

## Resultados Clave

### Métricas Generales
- **Tasa de Churn**: 25.7% (1,869 de 7,267 clientes)
- **Clientes activos**: 5,398 (74.3%)

### Hallazgos Principales

**1. Tipo de Contrato (Factor Crítico)**
- Contratos mensuales: Altamente asociados con cancelación
- Contratos de 2 años: Menor tasa de abandono
- **Insight**: Incentivar compromisos a largo plazo reduce significativamente el churn

**2. Método de Pago**
- Cheque electrónico: 57% de tasa de cancelación
- Tarjeta de crédito: Mayor estabilidad y lealtad
- **Insight**: Promover pagos automáticos mejora retención

**3. Duración de la Relación**
- Mediana de permanencia (clientes que cancelan): 10 meses
- Mediana de permanencia (clientes activos): 37 meses
- **Insight**: Los primeros meses son críticos para fidelización

**4. Gasto Total**
- Clientes que cancelan gastan significativamente menos
- Posible indicador de menor satisfacción o uso limitado del servicio

**5. Variables con Bajo Impacto**
- Género: Sin diferencia significativa
- Senior Citizen: Impacto mínimo en tasa de abandono

## Recomendaciones Estratégicas

### Acciones de Retención Prioritarias

1. **Programa de Incentivos para Contratos Largos**
   - Descuentos progresivos para contratos de 12 y 24 meses
   - Beneficios adicionales por renovación anticipada

2. **Optimización de Métodos de Pago**
   - Migración de cheques electrónicos a débito automático
   - Incentivos para adopción de tarjeta de crédito

3. **Programa de Onboarding (Primeros 6 Meses)**
   - Seguimiento proactivo en los primeros 10 meses
   - Asistencia personalizada para maximizar uso de servicios
   - Ofertas de servicios complementarios con descuento

4. **Estrategia de Up-selling Inteligente**
   - Ofrecer paquetes integrados a clientes con bajo gasto
   - Demostrar valor de servicios adicionales (seguridad, soporte técnico)

## Estructura del Proyecto

```
proyecto_telecomX/
├── challenge_telecomX.ipynb      # Notebook principal con análisis completo
├── TelecomX_Data.json           # Dataset en formato JSON
├── TelecomX_diccionario.md      # Descripción de variables
└── README.md                    # Documentación del proyecto
```

## Habilidades Demostradas

### Técnicas de Data Science
- Extracción, Transformación y Carga (ETL) de datos JSON complejos
- Normalización de datos anidados con `pd.json_normalize()`
- Limpieza y tratamiento de valores faltantes
- Ingeniería de características (feature engineering)
- Análisis exploratorio de datos (EDA)
- Análisis de correlación y patrones de comportamiento

### Visualización de Datos
- Implementación de paletas de colores personalizadas
- Gráficos estadísticos con Seaborn
- Visualizaciones interactivas con Plotly
- Storytelling con datos

### Business Intelligence
- Identificación de KPIs críticos para el negocio
- Traducción de insights técnicos a recomendaciones accionables
- Análisis de cohortes y segmentación de clientes
- Desarrollo de estrategias basadas en datos

## Ejecución del Proyecto

```bash
# Abrir en Jupyter Notebook o Google Colab
jupyter notebook challenge_telecomX.ipynb
```

**Nota**: El notebook carga automáticamente los datos desde el repositorio remoto.

## Impacto del Proyecto

Este análisis proporciona una base cuantitativa para:
- Reducir la tasa de cancelación en un 15-20% mediante estrategias focalizadas
- Identificar clientes en riesgo de abandono
- Optimizar recursos de retención hacia segmentos de alto impacto
- Mejorar el Customer Lifetime Value (CLV)

---

**Desarrollado como parte del Challenge de Ciencia de Datos - Alura LATAM**
