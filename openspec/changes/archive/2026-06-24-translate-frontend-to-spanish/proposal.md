## Why

Actualmente, algunos textos y metadatos de la aplicación están en inglés (ej. el idioma raíz en `index.html` está configurado en `"en"`, el título es `"WeatherApp"`, y la descripción del clima provista por la API de OpenWeatherMap se renderiza en inglés como "clear sky", "light rain", etc.). Para asegurar que la aplicación esté completamente adaptada al español, necesitamos internacionalizar y localizar estas secciones.

## What Changes

- **Traducción de Clima de la API**: Configurar la llamada a la API de clima de OpenWeatherMap para pedir los datos en español (`lang=es`), traduciendo dinámicamente las descripciones climáticas.
- **Traducción de Metadatos HTML**: Modificar `index.html` para establecer el idioma del documento en español (`lang="es"`) y cambiar el título de la pestaña a `ClimaApp`.

## Capabilities

### New Capabilities
- `translate-frontend-to-spanish`: Localización completa de los textos del frontend y metadatos HTML al idioma español.

### Modified Capabilities

## Impact

- Modificación de `src/app/services/weather.service.ts` para agregar el parámetro de idioma en la llamada HTTP.
- Modificación de `src/index.html` para actualizar etiquetas de idioma y título.
