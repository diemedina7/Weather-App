import { TestBed } from '@angular/core/testing';

import { ComunicationInfoWeatherService } from './comunication-info-weather.service';

describe('ComunicationInfoWeatherService', () => {
  let service: ComunicationInfoWeatherService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComunicationInfoWeatherService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
