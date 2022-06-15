import { Component, Input, OnInit } from '@angular/core';
import { IListForecast } from 'src/app/shared/model/weather-app.model';

@Component({
  selector: 'app-weather-hourly',
  templateUrl: './weather-hourly.component.html',
  styleUrls: ['./weather-hourly.component.scss']
})
export class WeatherHourlyComponent implements OnInit {

  @Input() time!: IListForecast;

  constructor() { }

  ngOnInit(): void {
  }

  dayDate(date: number) {
    return new Date(date * 1000 - 3 * 3600 * 1000);
  }

  weatherIcon(icon: string) {
    return `http://openweathermap.org/img/wn/${icon}@2x.png`;
  }

  airTemperature(temp: number) {
    return Math.round(temp);
  }

  windSpeed(speed: number) {
    return Math.round((speed * 3600) / 1000);
}

}
