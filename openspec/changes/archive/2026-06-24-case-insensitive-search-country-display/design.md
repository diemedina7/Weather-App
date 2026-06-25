## Context

El filtrado actual de ciudades se realiza de la siguiente manera en `CitiesService`:
`map(response => response.filter(item => item.name.includes(name)))`
Dado que `includes()` es sensible a mayúsculas/minúsculas en JavaScript, necesitamos normalizar a minúsculas ambas partes.
Además, la plantilla en `select.html` solo renderiza el nombre: `{{ city.name }}`. Al tener el país disponible en la interfaz `City` (`city.country`), podemos agregarlo directamente a la vista.

## Goals / Non-Goals

**Goals:**
- Convertir la búsqueda en `CitiesService` a case-insensitive usando `.toLowerCase()`.
- Modificar el template de la lista de selección `select.html` para interpolar también el país (`{{ city.name }}, {{ city.country }}`).

**Non-Goals:**
- Modificar el comportamiento al seleccionar (se mantendrá enviando únicamente el nombre de la ciudad `city.name` para realizar la búsqueda del clima correctamente en `getWeather()`).

## Decisions

### 1. Filtrado en el servicio
- **Decisión**: Usar `.toLowerCase()` en `item.name` y `name`.
- **Razón**: Es la forma más rápida, directa y estándar de lograr comparaciones insensibles a mayúsculas/minúsculas en TypeScript sin incurrir en costos de procesamiento significativos.

### 2. Presentación visual
- **Decisión**: Formatear como `{{ city.name }}, {{ city.country }}`.
- **Razón**: Es una convención común en interfaces de usuario de clima para ubicar geográficamente la ciudad deseada.

## Risks / Trade-offs

- Ninguno identificado. El cambio es puramente visual y de lógica de filtrado simple.
