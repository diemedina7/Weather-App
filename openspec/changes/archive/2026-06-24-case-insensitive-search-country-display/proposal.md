## Why

Actualmente, la búsqueda de ciudades es sensible a mayúsculas y minúsculas (case-sensitive), lo cual dificulta la experiencia de usuario si se escribe de manera inconsistente (ej. "madrid" no encuentra "Madrid"). Además, la lista de sugerencias solo muestra el nombre de la ciudad, lo que dificulta la identificación de la ciudad correcta cuando existen nombres duplicados en distintos países.

## What Changes

- **Búsqueda Insensitiva**: La lógica de filtrado convertirá tanto la búsqueda como los nombres de las ciudades a minúsculas durante la comparación para ser case-insensitive.
- **Visualización de País**: Se modificará el dropdown del selector para renderizar el formato `Ciudad, País` en lugar de solo `Ciudad`.

## Capabilities

### New Capabilities
- `case-insensitive-search`: Filtrado de autocompletado insensible a mayúsculas y minúsculas en el listado de ciudades.
- `country-display`: Inclusión y renderizado del país de procedencia en cada elemento de la lista de sugerencias.

### Modified Capabilities

## Impact

- Modificación en `src/app/services/cities.service.ts` para hacer la búsqueda case-insensitive.
- Modificación en `src/app/components/select/select.html` para renderizar el país al lado del nombre de la ciudad.
