import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CityFinder } from './city-finder';

describe('CityFinder', () => {
  let component: CityFinder;
  let fixture: ComponentFixture<CityFinder>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CityFinder]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CityFinder);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
