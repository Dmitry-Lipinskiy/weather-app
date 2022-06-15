import { Component, Input, OnInit } from '@angular/core';
import { IWeatherToday } from 'src/app/shared/model/weather-app.model';
import { WeatherService } from 'src/app/shared/service/weather.service';

@Component({
  selector: 'app-weather-today',
  templateUrl: './weather-today.component.html',
  styleUrls: ['./weather-today.component.scss']
})
export class WeatherTodayComponent implements OnInit {

  @Input() today!: IWeatherToday;

  constructor() { }

  ngOnInit(): void {
  }

  todayDate(date: number) {
    return new Date(date * 1000);
  }

  todayDuration(sunset: number, sunrise: number) {
    return new Date((sunset - sunrise) * 1000 - 3 * 3600 * 1000);
  }

  weatherIcon(icon: string) {
    return `http://openweathermap.org/img/wn/${icon}@2x.png`;
  }

  airTemperature(temp: number) {
    return Math.round(temp);
  }
}
