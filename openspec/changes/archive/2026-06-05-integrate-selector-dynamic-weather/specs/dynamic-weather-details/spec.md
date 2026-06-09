## ADDED Requirements

### Requirement: Descripción e Ícono Climático en Tiempo Real
El componente de información de clima (`<info-weather>`) SHALL renderizar la descripción del clima y el ícono climáticos dinámicos correspondientes obtenidos desde la API de OpenWeatherMap, en lugar de un texto fijo ("Soleado").

#### Scenario: Carga de clima con datos reales de condición
- **WHEN** se recibe la información del clima desde el servicio de comunicación
- **THEN** el componente muestra la descripción de la condición (e.g., "nubes dispersas", "lluvia ligera") y la imagen correspondiente al código de ícono retornado por la API (`http://openweathermap.org/img/wn/{icon}@2x.png`)

### Requirement: Visualización de Métricas de Viento y Humedad
El componente de información de clima (`<info-weather>`) SHALL renderizar la humedad (%) y la velocidad del viento (m/s) junto con la temperatura actual y sensación térmica.

#### Scenario: Renderizado de información completa del clima
- **WHEN** se tiene un clima válido cargado
- **THEN** se muestran las métricas de humedad (en %) y velocidad del viento (en m/s o km/h) en una tarjeta responsiva y con diseño limpio
