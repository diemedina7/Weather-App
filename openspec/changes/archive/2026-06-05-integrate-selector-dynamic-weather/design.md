## Context

La aplicación de clima en Angular (v17.3) tiene componentes standalone. El componente `Select` se encarga de mostrar un listado desplegable de sugerencias de ciudades basadas en lo escrito por el usuario en `CityFinder`. Sin embargo, actualmente no hay comunicación desde `Select` hacia `CityFinder` para retornar la opción elegida. Además, el componente `InfoWeather` renderiza de manera fija la palabra "Soleado" y carece de detalles como el viento, la humedad y el ícono real del clima.

## Goals / Non-Goals

**Goals:**
- Implementar una comunicación hija-padre mediante un `@Output` (`EventEmitter`) en el componente `Select` hacia el componente `CityFinder`.
- Rellenar el campo del input de búsqueda con el nombre de la ciudad seleccionada y ocultar el dropdown.
- Disparar de forma automática la búsqueda de clima llamando al método `getWeather` de `CityFinder` una vez seleccionada la ciudad.
- Modificar el componente `InfoWeather` para mapear los datos climáticos reales (humedad, viento, descripción) e incluir la renderización del ícono oficial de OpenWeatherMap.
- Mejorar los estilos visuales usando Bootstrap 5 y Sass para un look premium con efecto glassmorphism.

**Non-Goals:**
- Persistir búsquedas pasadas en `localStorage` (esto corresponde a otra funcionalidad).
- Modificar el servicio `WeatherService` o `CitiesService`; las APIs se mantendrán iguales.

## Decisions

### 1. Comunicación select -> city-finder
- **Decisión**: Usar un `@Output` `onSelect = new EventEmitter<string>()` en el componente `Select`.
- **Razón**: Es la forma estándar y limpia en Angular para pasar eventos hacia arriba de hijo a padre.
- **Alternativa considerada**: Usar un servicio compartido para la selección. Se descartó por sobrediseño, ya que `Select` es un hijo directo acoplado al buscador de ciudades (`CityFinder`).

### 2. Actualización de input y trigger de búsqueda en `CityFinder`
- **Decisión**: Actualizar el valor del input `#searchCity` mediante manipulación de su propiedad `value` o una referencia local, y llamar directamente a `getWeather()`. Adicionalmente, emitir `false` a `isReadyToSearch$` para cerrar el dropdown.
- **Razón**: Sincroniza la UI del buscador con la selección y provee feedback visual inmediato.

### 3. Iconografía y descripción dinámicas en `InfoWeather`
- **Decisión**: Acceder a `info_weather.weather[0].icon` para formar la URL `http://openweathermap.org/img/wn/{{icon}}@2x.png` y a `info_weather.weather[0].description` para la condición.
- **Razón**: Aprovecha la información rica y dinámica provista por OpenWeatherMap sin hardcodear datos.

## Risks / Trade-offs

- **[Riesgo]**: Al actualizar el valor del input manualmente, se puede volver a disparar el evento de teclado `input` registrado en `ngAfterViewInit()` mediante `fromEvent`.
  - **Mitigación**: El operador `distinctUntilChanged()` y el hecho de emitir `false` para cerrar el dropdown previenen búsquedas de sugerencias duplicadas e infinitas al seleccionar un item.
