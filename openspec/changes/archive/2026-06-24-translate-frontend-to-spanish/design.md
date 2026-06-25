## Context

La aplicación contiene metadatos y configuraciones en inglés. En particular:
- En `index.html`: `<html lang="en">` y `<title>WeatherApp</title>`.
- En `weather.service.ts`: La URL de consulta a OpenWeatherMap no especifica idioma, por lo que por defecto retorna en inglés (`en`).

## Goals / Non-Goals

**Goals:**
- Cambiar el idioma del HTML principal a español (`lang="es"`).
- Cambiar el título del HTML principal a `ClimaApp`.
- Añadir el parámetro de idioma `lang=es` a la llamada HTTP en `WeatherService`.

**Non-Goals:**
- Traducir los nombres de los países devueltos por la API de países `countriesnow.space` (ya que requeriría un mapeador externo de traducción complejo o base de datos de traducciones que está fuera del alcance de esta simplificación del frontend).

## Decisions

### 1. Parámetro de localización en API
- **Decisión**: Añadir `&lang=es` en la URL de consulta.
- **Razón**: OpenWeatherMap soporta la localización nativa del campo de descripción del clima de forma gratuita e instantánea.

### 2. Edición de index.html
- **Decisión**: Cambiar directamente los atributos en el archivo.
- **Razón**: Asegura que los motores de búsqueda, lectores de pantalla y navegadores reconozcan correctamente la app en español y coincida con el encabezado.

## Risks / Trade-offs

- Ninguno. Es un cambio de configuración y metadatos totalmente seguro.
