import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherErrorDialogComponent } from './weather-error-dialog.component';

describe('WeatherErrorDialogComponent', () => {
  let component: WeatherErrorDialogComponent;
  let fixture: ComponentFixture<WeatherErrorDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeatherErrorDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherErrorDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
