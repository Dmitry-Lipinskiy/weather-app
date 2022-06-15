import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherHourlyDialogComponent } from './weather-hourly-dialog.component';

describe('WeatherHourlyDialogComponent', () => {
  let component: WeatherHourlyDialogComponent;
  let fixture: ComponentFixture<WeatherHourlyDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeatherHourlyDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherHourlyDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
