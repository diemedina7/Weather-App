## ADDED Requirements

### Requirement: City Selection Event Propagation
El componente de selección (`<app-select>`) SHALL emitir un evento con el nombre de la ciudad cuando el usuario hace clic en una de las opciones del menú desplegable.

#### Scenario: Click en elemento del menú
- **WHEN** el usuario hace clic en un elemento de la lista de ciudades en el dropdown
- **THEN** el componente emite el evento con la ciudad seleccionada y oculta el menú desplegable

### Requirement: Sincronización del Input y Búsqueda Automática
El componente buscador (`<city-finder>`) SHALL suscribirse al evento del selector, actualizar el valor del input de búsqueda con la ciudad seleccionada y disparar la consulta de clima automáticamente.

#### Scenario: Selección de ciudad desde autocompletado
- **WHEN** se recibe la notificación de selección de una ciudad
- **THEN** el input del buscador se actualiza con el nombre de la ciudad y se realiza la consulta del clima a través de `WeatherService`
