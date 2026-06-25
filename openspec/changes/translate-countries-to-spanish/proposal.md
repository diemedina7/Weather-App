## Why

Actualmente, el buscador muestra las sugerencias en formato `Ciudad, País`, pero dado que la API de países (`countriesnow.space`) provee los nombres de los países en inglés, los resultados se muestran mezclados (ej: "London, United Kingdom" en lugar de "London, Reino Unido"). Para lograr que toda la interfaz visible esté consistentemente en español, necesitamos traducir en tiempo de ejecución los nombres de los países.

## What Changes

- **Traducción de Países**: Crear y utilizar un mapa estático de traducción de países (inglés a español) para traducir el campo `country` de los resultados del autocompletado antes de presentarlos al usuario en el dropdown.

## Capabilities

### New Capabilities
- `translate-countries-to-spanish`: Mapeo y traducción de nombres de países en el dropdown de autocompletado de ciudades.

### Modified Capabilities

## Impact

- Creación de un archivo de utilidad `src/app/utils/country-translations.ts` con el mapa de traducción.
- Modificación de `src/app/services/cities.service.ts` para importar el mapa y realizar el mapeo de países a español.
