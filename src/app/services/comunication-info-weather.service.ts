import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { WeatherInterface } from '../interfaces/weather.interface';

@Injectable({
  providedIn: 'root'
})
export class ComunicationInfoWeatherService {

  constructor() { }

  private info_weather = new BehaviorSubject<WeatherInterface | null>(null); // valor inicial
  info_weather_obs = this.info_weather.asObservable();

  sendNewInfoWeather(new_info: WeatherInterface) {
    this.info_weather.next(new_info);
  }
}
