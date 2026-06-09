import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { WeatherService } from './services/weather.service';
import { CityFinder } from './components/city-finder/city-finder';
import { InfoWeather } from "./components/info-weather/info-weather";
import { Select } from "./components/select/select";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    // RouterOutlet,
    HttpClientModule,
    CityFinder,
    InfoWeather,
    Select
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass'
})
export class AppComponent {
  title = 'weatherApp';

  constructor() {}

}
