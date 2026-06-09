import { Component, OnInit, Signal, signal, WritableSignal } from '@angular/core';
import { ComunicationInfoWeatherService } from '../../services/comunication-info-weather.service';
import { WeatherInterface } from '../../interfaces/weather.interface';
import { DatePipe, DecimalPipe } from '@angular/common';

@Component({
  selector: 'info-weather',
  standalone: true,
  imports: [
    DecimalPipe,
    DatePipe
  ],
  templateUrl: './info-weather.html',
  styleUrl: './info-weather.sass'
})
export class InfoWeather implements OnInit {
  private _currentTimeSignal = signal(new Date());

  public info_weather: WeatherInterface | null = null;
  public currenTime: Signal<Date> = this._currentTimeSignal.asReadonly();

  constructor (
    private comunicationInfoWeather: ComunicationInfoWeatherService)
  {}

  ngOnInit() {
    this.comunicationInfoWeather.info_weather_obs.subscribe(info => {
      this.info_weather = info;
      console.log('🎯 Dato actualizado:', this.info_weather);
    });
  }
}
