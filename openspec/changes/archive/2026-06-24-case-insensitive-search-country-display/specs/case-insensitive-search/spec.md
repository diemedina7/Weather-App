## ADDED Requirements

### Requirement: Búsqueda Insensible a Mayúsculas y Minúsculas
El servicio de ciudades (`CitiesService`) SHALL realizar la comparación de búsqueda de manera insensible a mayúsculas y minúsculas.

#### Scenario: Filtrado de ciudades sin importar el formato de texto
- **WHEN** el usuario escribe una cadena en mayúsculas, minúsculas o formato mixto (ej: "mAdRiD")
- **THEN** el sistema SHALL retornar las coincidencias correspondientes (ej: "Madrid") ignorando la diferencia de caja
