# Análisis de Datos: Tienda Alura

## Descripción del Proyecto

Proyecto de análisis de datos para determinar la mejor tienda donde comercializar productos, basado en el análisis comparativo de 4 sucursales utilizando métricas clave de negocio.

## Tecnologías Utilizadas

- **Python 3**
- **Pandas**: Manipulación y análisis de datos
- **Matplotlib**: Visualización de datos
- **Jupyter Notebook**: Desarrollo y documentación interactiva

## Objetivos del Análisis

Evaluar 4 tiendas diferentes a través de múltiples dimensiones para determinar cuál ofrece las mejores condiciones comerciales mediante el análisis de:

1. Facturación total por tienda
2. Rendimiento por categorías de productos
3. Satisfacción del cliente (calificaciones)
4. Productos más y menos vendidos
5. Costos de envío promedio

## Metodología

### 1. Importación y Preparación de Datos
- Carga de 4 datasets desde repositorio remoto
- Limpieza y estructuración de datos con Pandas
- Consolidación de información por tienda

### 2. Análisis Exploratorio de Datos (EDA)

**Facturación Total**
- Tienda 1: $1,150,880,400
- Tienda 2: $1,116,343,500
- Tienda 3: $1,098,019,600
- Tienda 4: $1,038,375,700

**Categorías Mejor Desempeño**
- Muebles (465-499 unidades por tienda)
- Electrónicos (422-451 unidades por tienda)
- Juguetes (313-338 unidades por tienda)

**Calificaciones Promedio**
- Tienda 3: 4.05 ⭐ (mejor calificada)
- Tienda 2: 4.04
- Tienda 4: 4.00
- Tienda 1: 3.98

**Costos de Envío Promedio**
- Tienda 4: $23,459.46 (más económico)
- Tienda 3: $24,805.68
- Tienda 2: $25,216.24
- Tienda 1: $26,018.61

### 3. Visualización de Datos

Se implementaron múltiples gráficos de barras horizontales para facilitar la comparación:
- Gráfico de ingresos totales por tienda
- Gráficos comparativos de ventas por categoría (2x2 grid)
- Análisis detallado de productos individuales por tienda

## Resultados y Conclusiones

### Hallazgos Principales

- **Tienda 1** lidera en facturación total pero tiene la calificación más baja
- **Tienda 3** presenta el mejor equilibrio entre calificación del cliente y costos operativos
- **Tienda 4** muestra los ingresos más bajos con costos de envío competitivos
- Las categorías de Muebles y Electrónicos dominan consistentemente en todas las sucursales

### Recomendación Final

**Se recomienda descartar Tienda 4** como canal de venta debido a:
- Ingresos totales significativamente inferiores
- Menor volumen de ventas pese a tener casi las mismas unidades vendidas
- Segunda peor calificación de clientes

**Opciones viables** (en orden de preferencia):
1. **Tienda 1**: Mayor facturación y volumen de ventas
2. **Tienda 3**: Mejor satisfacción del cliente y costos de envío competitivos
3. **Tienda 2**: Desempeño balanceado en todas las métricas

## Estructura del Proyecto

```
challengeStore/
├── Tienda_Alura.ipynb    # Notebook principal con análisis completo
└── README.md             # Documentación del proyecto
```

## Habilidades Demostradas

- Importación y limpieza de datos desde fuentes remotas
- Análisis exploratorio de datos (EDA)
- Manipulación de DataFrames con Pandas
- Cálculo de métricas estadísticas (promedios, conteos, agregaciones)
- Visualización de datos con Matplotlib
- Formateo de datos numéricos y monetarios
- Análisis comparativo multi-dimensional
- Generación de insights y recomendaciones basadas en datos

## Ejecución del Proyecto

```bash
# Abrir en Google Colab o Jupyter Notebook
jupyter notebook Tienda_Alura.ipynb
```

El notebook ejecuta automáticamente la carga de datos desde URLs remotas, por lo que no requiere datasets locales.

---

**Desarrollado como parte del programa de Ciencia de Datos - Alura LATAM**
