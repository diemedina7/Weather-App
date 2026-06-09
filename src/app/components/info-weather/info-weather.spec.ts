import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoWeather } from './info-weather';

describe('InfoWeather', () => {
  let component: InfoWeather;
  let fixture: ComponentFixture<InfoWeather>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfoWeather]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoWeather);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
