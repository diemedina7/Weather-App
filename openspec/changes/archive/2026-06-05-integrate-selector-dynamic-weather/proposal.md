## Why

La aplicación de clima actual tiene dos limitaciones críticas:
1. El selector de sugerencias de ciudades (`<app-select>`) está roto, ya que al hacer clic en una ciudad solo se imprime en consola y no actualiza el campo de búsqueda ni carga el clima de la ciudad seleccionada.
2. La visualización de la información del clima (`<info-weather>`) está incompleta, tiene valores estáticos y el estado de la condición climática está prefijado con el texto "Soleado" de forma estática (hardcoded), ignorando la descripción y el ícono real provisto por la API de OpenWeatherMap.

## What Changes

- **Integración del Selector**: Al hacer clic en una ciudad en el dropdown de autocompletado, se rellenará el campo de texto de búsqueda, se ocultará el menú desplegable y se disparará de forma inmediata la consulta del clima para esa ciudad.
- **Visualización Climática Dinámica**: Se rediseñará la tarjeta de clima para mostrar la descripción en tiempo real y el ícono correspondiente desde la API de OpenWeatherMap.
- **Detalles del Clima Adicionales**: Se agregarán datos relevantes como humedad, velocidad del viento, sensación térmica y la hora local de actualización con un diseño moderno, limpio y responsivo.

## Capabilities

### New Capabilities
- `city-selector-integration`: Habilita la selección interactiva de ciudades desde la lista de autocompletado para disparar búsquedas y sincronizar el estado del buscador.
- `dynamic-weather-details`: Renderizado dinámico de la tarjeta de clima utilizando íconos climáticos oficiales, descripciones traducidas o provistas por la API y detalles métricos adicionales (humedad, viento).

### Modified Capabilities
<!-- No existing capabilities listed in openspec/specs/ since the directory is empty -->

## Impact

- Modificación de `src/app/components/select/select.ts` y `select.html` para emitir eventos de selección.
- Modificación de `src/app/components/city-finder/city-finder.ts` y `city-finder.html` para suscribirse al evento de selección, rellenar el input y llamar a `getWeather()`.
- Modificación de `src/app/components/info-weather/info-weather.ts` y `info-weather.html` para renderizar el clima con íconos dinámicos de OpenWeatherMap y métricas de viento y humedad.
