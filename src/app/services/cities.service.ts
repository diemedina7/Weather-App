import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CitiesApiResponse, City } from '../interfaces/cities.interface';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CitiesService {
  private baseUrl: string = 'https://countriesnow.space/api/v0.1/countries';

  constructor(private http: HttpClient) { }

  public getFirst10(name?: string): Observable<City[]> {
    name = (name == undefined) ? "" : name;

    return this.getCities().pipe(
      map(response => response.data),
      map(response => response.flatMap(
        item => item.cities.map( city => ({
          country: item.country,
          name: city
        })
      ))),
      map(response => response.filter(item => item.name.toLowerCase().includes(name.toLowerCase()))),
      map(response => response.slice(0, 10))
    );
  }

  private getCities(): Observable<CitiesApiResponse> {
    return this.http.get<CitiesApiResponse>(`${this.baseUrl}`);
  }
}
