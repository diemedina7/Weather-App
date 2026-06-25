## Context

La API de ciudades `countriesnow.space` provee información de geolocalización global en inglés. Dado que la lista de sugerencias en `select.html` consume las propiedades `city.name` y `city.country`, podemos interceptar y traducir la propiedad `country` en el flujo reactivo de `CitiesService`.

## Goals / Non-Goals

**Goals:**
- Crear un listado exhaustivo estático de traducción de países (inglés a español) en un archivo de utilidades.
- Mapear el flujo del observable en `CitiesService` para sustituir el valor de `country` utilizando el mapa de traducción.

**Non-Goals:**
- Traducir los nombres de las ciudades (ej. "London" a "Londres" o "Munich" a "Múnich") de forma exhaustiva, debido a que el volumen de nombres de ciudades es de millones de registros, lo que excede el alcance de un mapeador estático. Los nombres de ciudades se mantendrán como los provee la API (nombres nativos/locales).

## Decisions

### 1. Ubicación del mapa de traducción
- **Decisión**: Crear `src/app/utils/country-translations.ts` independiente.
- **Razón**: Permite mantener el servicio `CitiesService` limpio y facilita el mantenimiento del diccionario en el futuro.

### 2. Mapeo en CitiesService
- **Decisión**: Dentro del operador `map` de RxJS, realizar la traducción de la propiedad `country` buscando la coincidencia en el diccionario. Si no existe coincidencia, retornar la cadena original en inglés como respaldo.
- **Razón**: Asegura robustez en caso de que la API incorpore nuevos países que no se encuentren previamente en el diccionario.

## Risks / Trade-offs

- Ninguno. El rendimiento del mapa de acceso directo $O(1)$ en memoria es despreciable.
