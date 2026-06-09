import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { WeatherInterface } from '../interfaces/weather.interface';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private baseUrl = environment.apiUrl;
  private apiKey = environment.apiKey;

  constructor(private http: HttpClient) {}

  getWeather(city: string): Observable<WeatherInterface> {
    return this.http.get<WeatherInterface>(`${this.baseUrl}/weather?q=${city}&units=metric&appid=${this.apiKey}`);
  }
}
