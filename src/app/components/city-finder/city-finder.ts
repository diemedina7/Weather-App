import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { debounceTime, distinctUntilChanged, fromEvent, map, Subject } from 'rxjs';

import { WeatherService } from '../../services/weather.service';
import { WeatherInterface } from '../../interfaces/weather.interface';
import { ComunicationInfoWeatherService } from '../../services/comunication-info-weather.service';
import { CitiesService } from '../../services/cities.service';
import { Select } from '../select/select';
import { City } from '../../interfaces/cities.interface';

@Component({
  selector: 'city-finder',
  standalone: true,
  imports: [Select],
  templateUrl: './city-finder.html',
  styleUrl: './city-finder.sass'
})
export class CityFinder implements AfterViewInit {

  public isFocus: boolean = false;
  public isReadyToSearch$ = new Subject<boolean>();

  public options: City[] = [];

  @ViewChild('searchCity') searchCity!: ElementRef;

  constructor (
    private weatherService: WeatherService,
    private comunicationInfoWeather: ComunicationInfoWeatherService,
    private citiesService: CitiesService
  )
  {}

  ngAfterViewInit(): void {
    fromEvent(this.searchCity.nativeElement, 'input').pipe(
      map((event: any) => event.target.value),
      debounceTime(500),
      distinctUntilChanged(),
      map((value: string) => ({
        textValue: value,
        isValid: value.length >= 3
      }))
    ).subscribe( (res) => {
      console.log('Buscar:', res.textValue);
      this.isReadyToSearch$.next(res.isValid);

      if (res.isValid)
        this.getOptionCities(res.textValue);
    });
  }

  public getWeather(city: string) {
    this.weatherService.getWeather(city).subscribe({
      next: (info: WeatherInterface) => {
        this.comunicationInfoWeather.sendNewInfoWeather(info);
      },
      error: (err) => console.error('Error al obtener usuarios:', err)
    });
  }

  public getOptionCities(city: string) {
    this.citiesService.getFirst10(city).subscribe({
      next: (data: City[]) => {
        this.options = data;
      }
    });
  }

  public onCitySelected(city: string) {
    this.searchCity.nativeElement.value = city;
    this.isReadyToSearch$.next(false);
    this.getWeather(city);
  }
};
