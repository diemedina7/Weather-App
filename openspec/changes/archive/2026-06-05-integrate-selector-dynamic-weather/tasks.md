## 1. Integración del Selector (select & city-finder)

- [x] 1.1 Agregar el `@Output` `onSelect = new EventEmitter<string>()` en `select.ts` y emitir el evento en el método `seleccionar`
- [x] 1.2 Enlazar el evento de click en `select.html` para invocar al método `seleccionar` (ya existente en la plantilla pero asegurar coherencia)
- [x] 1.3 Modificar `city-finder.html` para escuchar el evento `(onSelect)="onCitySelected($event)"` desde `<app-select>`
- [x] 1.4 Implementar `onCitySelected(city: string)` en `city-finder.ts` que actualice el valor del input `#searchCity` en el DOM, cierre el dropdown emitiendo `false` a `isReadyToSearch$` y llame a `getWeather(city)`

## 2. Información del Clima Dinámica (info-weather)

- [x] 2.1 Modificar `info-weather.html` para renderizar de manera dinámica la descripción del clima y el ícono correspondiente desde la API (`http://openweathermap.org/img/wn/{{info_weather.weather[0].icon}}@2x.png`)
- [x] 2.2 Modificar `info-weather.html` para agregar la velocidad del viento (`info_weather.wind.speed`) y humedad (`info_weather.main.humidity`)
- [x] 2.3 Ajustar estilos de `info-weather.sass` y `styles.sass` para dar un diseño visual premium a la tarjeta (por ejemplo, fondos semitransparentes con efecto de desfoque/glassmorphism, tipografía mejor estructurada y espaciados responsivos)
