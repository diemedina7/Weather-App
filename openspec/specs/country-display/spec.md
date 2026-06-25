# country-display Specification

## Purpose
TBD - created by archiving change case-insensitive-search-country-display. Update Purpose after archive.
## Requirements
### Requirement: Renderizado de País en Opciones
El componente de selección desplegable (`<app-select>`) SHALL renderizar el nombre del país al lado de cada ciudad en el formato `Ciudad, País`.

#### Scenario: Visualización del país en el dropdown de autocompletado
- **WHEN** se listan las ciudades sugeridas
- **THEN** cada opción SHALL mostrar el texto estructurado como `Nombre de Ciudad, Nombre de País`

